const getUserDetails = () => {
  let userDetails = localStorage.getItem("user");
  return userDetails && JSON.parse(userDetails);
};

const checkAuthStatus = () => {
  let isAuth = localStorage.getItem("auth");
  return Boolean(isAuth);
};

const logout = () => {
  localStorage.removeItem("auth");
  localStorage.removeItem("user");
  window.location.href = "/login";
};

if (checkAuthStatus()) {
  document.querySelector("h1").textContent = `Welcome back, ${
    getUserDetails().name
  }!`;
} else {
  window.location.href = "/login";
}
