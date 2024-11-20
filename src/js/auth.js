// Simulate JWT token for demo purposes
const fakeToken = "mock-jwt-token";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const logoutButton = document.getElementById("logout");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Mock login logic
      if (username && password) {
        localStorage.setItem("token", fakeToken);
        alert("Login successful!");
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid credentials");
      }
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Sign-up complete! Please log in.");
      window.location.href = "login.html";
    });
  }

  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      localStorage.removeItem("token");
      alert("Logged out!");
      window.location.href = "index.html";
    });
  }
});
