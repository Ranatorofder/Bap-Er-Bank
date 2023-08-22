
document.getElementById('btn-submit').addEventListener('click', function () {
    const emailFild = document.getElementById('user-email');
    const email = emailFild.value;
    const passwordFild = document.getElementById('user-password');
    const password = passwordFild.value;
    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html'
    }
    else {
        alert('Tui password vule gesos !!. Toke ami teijjo sontan gosona korlam. ')
    }

})