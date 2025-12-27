function login() {
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (password === "nyakkk") {
    window.location.href = "welcome.html";
  } else {
    error.textContent = "Wrong password 💔";
    error.style.color = "pink";
  }
}
