
document.getElementById('btn-submit').addEventListener('click', function () {
    const emailFild = document.getElementById('user-email');
    const email = emailFild.value;
    const passwordFild = document.getElementById('user-password');
    const password = passwordFild.value;
    if (email === 'sontan@baap.com' && password === 'secret') {
        console.log('valid user')
    }
    else {
        console.log('invalid user')
    }

})