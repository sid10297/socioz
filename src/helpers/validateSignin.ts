export const validateSignin = (data: { email: string; password: string }) => {
  if (!data.email || !data.password) {
    return false;
  }
  return true;
};
