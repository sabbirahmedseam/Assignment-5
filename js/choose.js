
function exchangeName(one, two, three) {
    const btn = document.getElementById(one);
    btn.disabled = true;
    const title = document.getElementById(two);
    const titleText = title.innerText;
    const nameList = document.getElementById(three);
    nameList.innerText = titleText;
}
document.getElementById('select-one').addEventListener('click', function () {
    exchangeName('select-one', 'title-one', 'first-name');
})
document.getElementById('select-two').addEventListener('click', function () {
    exchangeName('select-two', 'title-two', 'second-name');
})

document.getElementById('select-three').addEventListener('click', function () {
    exchangeName('select-three', 'title-three', 'third-name');
})

document.getElementById('select-four').addEventListener('click', function () {
    exchangeName('select-four', 'title-four', 'fourth-name');
})

document.getElementById('select-five').addEventListener('click', function () {
    exchangeName('select-five', 'title-five', 'fifth-name');
})
document.getElementById('select-six').addEventListener('click', function () {
    exchangeName('select-six', 'title-six', 'fifth-name');
})


const lis = document.getElementById('order-list').childNodes;
console.log(lis);