import * as Yup from "yup";

//regex pattern for password, email and username.
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,20}$/;
const usernameRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*$/;
const emailRegex =
  /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const LoginSchema = Yup.object().shape({
  identifier: Yup.string()
    .min(3, "Username must be contain at least 3 character!")
    .required("Username is required!")
    .test(
      "is-username-or-email",
      "Invalid format of username or email!",
      function (value) {
        // Check email regex
        if (emailRegex.test(value)) {
          return true;
        }
        // Check username regex
        if (usernameRegex.test(value)) {
          return true;
        }
        return false; // not of both
      }
    )
    .test(
      "no-start-digit-or-symbol",
      "Username should not start with a digit or symbol!",
      function (value) {
        // if it's a username (not an email), apply the start validation
        if (!emailRegex.test(value) && !usernameRegex.test(value)) {
          return false;
        }
        return true;
      }
    ),
  password: Yup.string()
    .matches(
      passwordRegex,
      "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character."
    )
    .min(6, "Password must be at least 6 characters!")
    .max(20, "Password is too long!")
    .required("Password is required!"),
});
