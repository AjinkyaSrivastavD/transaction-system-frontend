document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start');
    if (startButton) {
        startButton.addEventListener('click', () => {
            const token = localStorage.getItem('jwtToken');
            if (token) {
                window.location.href = 'protected.html'; // Redirect to protected page
            } else {
                window.location.href = 'login.html'; // Redirect to login
            }
        });
    }
});
