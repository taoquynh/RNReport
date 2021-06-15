const domain: string = "http://report.bekhoe.vn";

const login: string = "/api/accounts/Login";
const register: string = "/api/accounts/Register";
const getProfile: string = "/api/accounts/profile";
const upload: string = "/api/upload";
const updateProfile: string = "/api/accounts/update";
const changePassword: string = "/api/accounts/changePassword";

interface UrlString {
  nameRequest: string;
}
const returnUrl = (nameRequest: string): string => {
  return domain + nameRequest;
};

export {
  domain,
  login,
  register,
  getProfile,
  upload,
  updateProfile,
  changePassword,
  returnUrl,
};
