// Base URL of your backend
const BASE_URL = "http://localhost:3000";

function register() {
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;

  fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
      if (data.message === "User registered successfully") {
        window.location.href = "index.html";
      }
    })
    .catch(err => alert("Error: " + err));
}

function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
      if (data.message === "Login successful") {
        localStorage.setItem("username", username);
        window.location.href = "profile.html";
      }
    })
    .catch(err => alert("Error: " + err));
}

function updateProfile() {
  const username = document.getElementById("profileUsername").value;
  const age = document.getElementById("profileAge").value;
  const dob = document.getElementById("profileDob").value;
  const contact = document.getElementById("profileContact").value;

  fetch(`${BASE_URL}/profile`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, age, dob, contact }),
  })
    .then(res => res.json())
    .then(data => alert(data.message))
    .catch(err => alert("Error: " + err));
}
