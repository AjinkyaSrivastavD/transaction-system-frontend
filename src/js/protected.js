document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
        alert('Unauthorized! Redirecting to login.');
        window.location.href = 'login.html';
    } else {
        document.getElementById('content').textContent = 'Welcome to the protected page!';
    }

    document.getElementById('logout').addEventListener('click', () => {
        localStorage.removeItem('jwtToken');
        window.location.href = 'login.html';
    });
});
