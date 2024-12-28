export const validateSignup = (data: {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  confirmPassword: string;
}) => {
  if (data.firstName.length < 3) {
    return {
      field: "firstName",
      message: "First name must be at least 3 characters",
    };
  } else if (data.lastName.length < 3) {
    return {
      field: "lastName",
      message: "Last name must be at least 3 characters",
    };
  } else if (data.email.length < 3) {
    return {
      field: "email",
      message: "Email must be at least 3 characters",
    };
  } else if (data.password.length < 8) {
    return {
      field: "password",
      message: "Password must be at least 8 characters",
    };
  } else if (data.password !== data.confirmPassword) {
    return {
      field: "confirmPassword",
      message: "Passwords do not match",
    };
  } else if (data.username.length < 3) {
    return {
      field: "username",
      message: "Username must be at least 3 characters",
    };
  }
  return true;
};
