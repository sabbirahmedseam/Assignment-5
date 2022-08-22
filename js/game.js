


function inputField(num) {
    const inputValue = document.getElementById(num);
    const inputValueText = parseInt(inputValue.value);
    inputValue.value = inputValueText;

    if (isNaN(inputValueText)) {
        alert('pls give a number');
    }
    inputValue.value = '';
    return inputValueText;
}

function setInputText(idName, value) {
    const inputDigit = document.getElementById(idName);
    inputDigit.innerText = value;
}

document.getElementById('btn-calc').addEventListener('click', function () {
    const perPlayer = inputField('per-player');
    const playerCost = 5 * perPlayer;
    setInputText('player-cost', playerCost);

})
document.getElementById('btn-total').addEventListener('click', function () {
    const playerCost = parseInt(document.getElementById('player-cost').innerText);


    // follwing is an input field
    const managerCost = inputField('mng-field');

    // follwing is an input field
    const coachCost = inputField('coach-cost')
    const totalCost = playerCost + managerCost + coachCost;
    setInputText('total-cost', totalCost);
})