document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login
    if (username === 'admin' && password === 'password') {
        const token = generateJWT();
        localStorage.setItem('jwtToken', token);
        document.getElementById('message').textContent = 'Login successful! Redirecting...';
        setTimeout(() => {
            window.location.href = 'protected.html'; // Redirect after login
        }, 1000);
    } else {
        document.getElementById('message').textContent = 'Invalid credentials!';
    }
});

function generateJWT() {
    // Simulate JWT creation
    return 'fake-jwt-token';
}
