
document.getElementById('btn-withdraw').addEventListener('click', function () {

    const withdrawFieldElement = document.getElementById('withdraw-field');
    const windowFieldElementString = withdrawFieldElement.value;
    const NewWindowField = parseFloat(windowFieldElementString);
    withdrawFieldElement.value = '';

    const totalWithdrawElement = document.getElementById('withdraw-total');
    const totalWithdrawString = totalWithdrawElement.innerText;
    const totalWithdrawAmaount = parseFloat(totalWithdrawString);

    const totalAmaountWithdraw = totalWithdrawAmaount + NewWindowField;
    totalWithdrawElement.innerText = totalAmaountWithdraw;

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalElementString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalElementString);

    const totalBalanceAmaount = balanceTotal - NewWindowField;
    balanceTotalElement.innerText = totalBalanceAmaount;

})