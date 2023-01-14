// 1) Capturing buttons:
const btnCreate = document.querySelector('.btn-main');
const btnToggle = document.querySelector('.btn-toggle');
const btnRemove = document.querySelector('.btn-remove');

const input  = document.querySelector('.input-main');
const containerAll = document.querySelector('.list-container');
const container = document.querySelector('.container');


// 1. Creating new list element (task) on click:

btnCreate.addEventListener('click', () => {
    //const newItem = document.createElement('li');
    //newItem.textContent = input.value;
    //container.append(newItem);
    container.insertAdjacentHTML('afterbegin', `<li>${input.value}</li>`);
    input.value = '';
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

// 3. Remove last Item (task) button:
btnRemove.addEventListener('click', () => {
 const lastItem = document.querySelector('li:last-child');
 lastItem.remove();
})


// 4. Hover over list Items functionallity (tyrning list items to UpperCase when mouse over):

containerAll.addEventListener('mouseover', (event) => {
    console.log(event.target)
    if (event.target.tagName === 'LI') {
     event.target.textContent = event.target.textContent.toUpperCase();
}   
});