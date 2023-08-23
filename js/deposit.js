const depositTolalElement = document.getElementById('deposit-total');

const rana = {
    getElementById(className) {
        return {
            addEventListener(event, callback) {
                if (event === "click") {
                    callback()
                }
            }
        };
    }
}

rana.getElementById('dfdfdfdfd').addEventListener('click', function () {

})
// step 1
const div = document.createElement('div')
// step 2
div.innerHTML = `
<div>
i am inner html 
</div>
`;
// step optional
div.setAttribute('class', 'class2 class2')

//setp 3
depositTolalElement.appendChild(div)
console.log(depositTolalElement);

document.getElementById('btn-deposit').addEventListener('click', function () {

    const depositFieldElement = document.getElementById('deposit-field');
    const depositFieldElementString = depositFieldElement.value;
    const newDeposit = parseFloat(depositFieldElementString);



    const depositTolalElementString = depositTolalElement.innerText;
    const previousDepositTolal = parseFloat(depositTolalElementString);

    const depositAddAmaount = previousDepositTolal + newDeposit;
    depositTolalElement.innerText = depositAddAmaount;

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);

    const totalAmaountDeposit = balanceTotal + newDeposit;
    balanceTotalElement.innerText = totalAmaountDeposit;
    depositFieldElement.value = '';
})
console.dir(document.getElementById('balance-total'))