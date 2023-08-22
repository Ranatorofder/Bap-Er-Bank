
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawFieldStrin = withdrawField.value;
    const newWithdrawAmaount = parseFloat(newWithdrawFieldStrin);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentTotalWithdrawTotal = previousWithdrawTotal + newWithdrawAmaount;
    withdrawTotalElement.innerText = currentTotalWithdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmaount;
    balanceTotalElement.innerText = newBalanceTotal;

    withdrawField.value = '';

})