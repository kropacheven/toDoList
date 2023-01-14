// Capturing buttons and elements as selectors:
const btnCreate = document.querySelector('.btn-main');
const btnToggle = document.querySelector('.btn-toggle');
const btnRemove = document.querySelector('.btn-remove');

const input  = document.querySelector('.input-main');
const containerAll = document.querySelector('.list-container');
const container = document.querySelector('.container');


// Attach button to every list element function:
function attachRemoveButton(li) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Remove';
    button.className = 'remove';
    //console.log(button);
    li.append(button);

}

//Capturing list items as container children, then looping over to attach remove button:
const taskItems = container.children;
for (let i = 0; i<taskItems.length; i++ ) {
    attachRemoveButton(taskItems[i]);

}




// 1. Creating new list element (task) on click:

btnCreate.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = input.value;
    container.append(newItem);
    attachRemoveButton(newItem); //attaching remove button for every new element
    //container.insertAdjacentHTML('afterbegin', `<li>${input.value}</li>`);
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

// 3. Remove last Item (task) button at the end:
// btnRemove.addEventListener('click', () => {
//  const lastItem = document.querySelector('li:last-child');
//  lastItem.remove();
// })

// 4. Hover over list Items functionallity (tyrning list items to UpperCase when mouse over):

//containerAll.addEventListener('mouseover', (event) => {
//    console.log(event.target)
//    if (event.target.tagName === 'LI') {
//     event.target.textContent = event.target.textContent.toUpperCase();
//}   
//});

// 5. Programming every small remove button for every list item:

container.addEventListener('click', (event) => {
   if (event.target.tagName === 'BUTTON') {
    const button = event.target;
    const li = button.parentNode;
    console.log (li);
    li.remove();
}   
});
