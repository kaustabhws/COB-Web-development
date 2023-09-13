function showPassword() {
    let pass = document.getElementById('password');

    if (pass.type === 'password') {
        pass.setAttribute('type', 'text')
    } else {
        pass.setAttribute('type', 'password')
    }
}

function showcPassword() {
    let pass = document.getElementById('cpassword');

    if (pass.type === 'password') {
        pass.setAttribute('type', 'text')
    } else {
        pass.setAttribute('type', 'password')
    }
}

function submitCheck() {
    let pass1 = document.getElementById('password').value;
    let pass2 = document.getElementById('cpassword').value;

    let alert = document.querySelector('.alert');

    if(!pass1 || !pass2) {
        alert.innerHTML = "Enter a password ❌";
        setTimeout(() => {
        alert.innerHTML = "";
        }, 3000);
        return
    }

    if(pass1 === pass2) {
        alert.innerHTML = "Password matched ✅";
        setTimeout(() => {
        alert.innerHTML = "";
        }, 3000);
    } else {
        alert.innerHTML = "Password mismatch ❌";
        setTimeout(() => {
        alert.innerHTML = "";
        }, 3000);
    }
}