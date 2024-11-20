document.addEventListener('DOMContentLoaded', () => {
    localStorage.removeItem('jwtToken');
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1000);
});
