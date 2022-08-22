
// PLAYER SELECTED PART


const array = [];

function game(array) {
    const list = document.getElementById('order-list');
    list.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        const field = array[i];
        const li = document.createElement('li');
        li.innerText = field;
        list.appendChild(li);
    }
}


function gameField(btn) {
    btn.disabled = true;
    const name = btn.parentNode.children[0].innerText;

    array.push(name);
    if (array.length <= 5) {
        game(array)
    }
    else {
        alert('only five players will be allowed');
    }
}

