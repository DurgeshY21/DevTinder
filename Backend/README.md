# DevTinder Backend

## Developer Notes

### Signup API Implementation Details

The `/signup` API endpoint handles the registration of new users and includes several key features to ensure data integrity and security:

#### 1. Data Validation (`validator` package)
Before touching the database, the incoming request body (`req.body`) is intercepted and validated using a custom utility function (`src/validations/auth.validation.js`) alongside the popular `validator` npm package:
- **Presence Check:** Ensures `firstName` and `lastName` exist.
- **Email Validation:** Uses `validator.isEmail()` to strict-check the format of the provided email address (e.g., must contain `@` and a valid domain).
- **Password Strength:** Uses `validator.isStrongPassword()` to enforce a secure password policy (minimum 8 characters, requiring at least 1 uppercase, 1 lowercase, 1 number, and 1 special symbol).
- **Early Rejection:** If validation fails, an explicit `Error` is thrown, completely preventing any processing and instantly returning a `400 Bad Request` with a clear message to the client.

#### 2. Security: Password Hashing (`bcryptjs`)
- We NEVER store passwords in plain text.
- We use the `bcryptjs` library to generate a strong `salt` (`await bcrypt.genSalt(10)`).
- The user's password is encrypted/hashed using this salt (`await bcrypt.hash(password, salt)`).
- We only save this irreversible `hashedPassword` string to the MongoDB database.

#### 3. Corner Cases & Error Handling
- **Duplicate Email Prevention:** The Mongoose User schema enforces `unique: true` on the `email` field.
- **Graceful Error Catching:** When a user attempts to sign up with an email that is already registered, MongoDB throws a `duplicate key error` with the code `11000`. 
- Our `try...catch` block intercepts this specific MongoDB error code (`err.code === 11000`) and safely returns: `{"error": "Email is already registered. Please login instead!"}` instead of crashing the app or confusing the user with raw database traces.
