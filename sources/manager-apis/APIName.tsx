const domain: string = "http://report.bekhoe.vn";

const login: string = "/api/accounts/Login";
const register: string = "/api/accounts/Register";
const getProfile: string = "/api/accounts/profile";
const upload: string = "/api/upload";
const updateProfile: string = "/api/accounts/update";
const changePassword: string = "/api/accounts/changePassword";
const getListIssues: string = "/api/issues?limit=50&offset=0";

interface UrlString {
  nameRequest: string;
}
const returnUrl = (nameRequest: string): string => {
  return domain + nameRequest;
};

const returnUrlImage = (url: string): string => {
  if (url === null) {
    return ""
  }
  return url.substring(0, 4) === "http" ? url : domain + url;
};

export {
  domain,
  login,
  register,
  getProfile,
  upload,
  updateProfile,
  changePassword,
  getListIssues,
  returnUrl,
  returnUrlImage
};
