const getUserData = () => {
    const userNameEl = document.getElementById('username').value;
    const emailEl = document.getElementById('email').value;
    const passwordEl = document.getElementById('password').value;
    const secondPasswordEl = document.getElementById('passwordCheck').value;

    if (!emailEl.includes('@') || !emailEl.includes('.')) {
        alert('Input your email address as the shown way!');
        return;
    }

    if (userNameEl && emailEl && passwordEl && secondPasswordEl) {
        if (passwordEl === secondPasswordEl) {
            console.log(`Name: ${userNameEl}\nEmail address: ${emailEl}\nPassword: ${passwordEl}\nPassword verification: ${secondPasswordEl}`);
            alert("You successfully logged in the system!");
            location.reload();
            return;
        } else {
            alert("You inserted wrong password!");
            return;
        }
    } else {
        alert("Please fill in the form!");
        return;
    };

};


const buttonRegister = document.getElementById('register');
buttonRegister.addEventListener('click', getUserData);
