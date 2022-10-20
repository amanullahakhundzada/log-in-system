const form = document.querySelector("form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const credentials = {
    username: usernameInput.value,
    password: passwordInput.value,
  };

  // send POST request to /login
  let res = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  let data = await res.json();

  console.log(data);

  localStorage.setItem("user", JSON.stringify(data.authUser));
  localStorage.setItem("auth", data.authUser.authStatus);

  if (data.success) {
    window.location.href = "/";
  }

  // clear password field
  passwordInput.value = "";
});
