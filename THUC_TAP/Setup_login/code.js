document.addEventListener('DOMContentLoaded', function () {
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginButton = document.getElementById('loginButton');

    const accounts = {
        'admin': {
            password: 'adminpass',
            redirectUrl: 'quanly.html'
        },
        'sinhvien': {
            password: 'sinhvienpass',
            redirectUrl: 'sinhvien.html'
        }
    };

    if (showRegister && showLogin && loginForm && registerForm) {
        showRegister.addEventListener('click', function (e) {
            e.preventDefault();
            loginForm.classList.add('hidden');
            registerForm.classList.remove('hidden');
        });

        showLogin.addEventListener('click', function (e) {
            e.preventDefault();
            registerForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
        });

        loginButton.addEventListener('click', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (accounts[username] && accounts[username].password === password) {
                window.location.href = accounts[username].redirectUrl;
            } else {
                alert('Sai tài khoản hoặc mật khẩu');
            }
        });
    } else {
        console.error('One or more elements not found.');
    }
});
