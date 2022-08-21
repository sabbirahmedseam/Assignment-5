

function inputField(value) {
    const inputValue = document.getElementById(value);
    const inputValueText = parseInt(inputValue.value);
    if (isNaN(inputValueText)) {
        alert('pls give a number');
    }
    inputValue.value = inputValueText;
    // inputValue.value = '';
    return inputValueText;

}

function setValue(idName, rate) {
    const deploy = document.getElementById(idName);
    deploy.innerText = rate;
}



document.getElementById('btn-calc').addEventListener('click', function () {
    const perPlayer = inputField('per-player');

    const playerRate = 5 * perPlayer;
    setValue('player-cost', playerRate);

})

document.getElementById('btn-total').addEventListener('click', function () {
    const perPlayer = parseInt(document.getElementById('player-cost').innerText);
    //    Following is an input tag
    const mngCost = inputField('mng-cost');

    //    Following is an input tag
    const coachCost = inputField('coach-cost');
    const totalCoast = perPlayer + mngCost + coachCost;
    setValue('total-cost', totalCoast);

})