document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem("token");
  
    // Redirect unauthenticated users
    if (!token && (window.location.pathname.includes("dashboard.html") || window.location.pathname.includes("profile.html"))) {
      alert("You must be logged in to access this page!");
      window.location.href = "login.html";
    }
  });
  