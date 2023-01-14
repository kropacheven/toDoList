// 1) Capturing buttons:
const btnCreate = document.querySelector('.btn-main');
const btnToggle = document.querySelector('.btn-toggle');

const input  = document.querySelector('.input-main');
const containerAll = document.querySelector('.list-container');
const container = document.querySelector('.container');


// 1. Creating new list element (task) on click:

btnCreate.addEventListener('click', () => {
    const newItem = document.createElement('li');
    console.log(newItem)
    newItem.textContent = input.value;
    container.append(newItem);
});


// 2. Toggle button for show/hide list (task) items:

btnToggle.addEventListener('click', () => {
    if (containerAll.style.display === 'none') {
        containerAll.removeAttribute('style');
        btnToggle.textContent = 'Hide List';
    }
    else {
        containerAll.style.display = 'none';
        btnToggle.textContent = 'Show List';
    }
});