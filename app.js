const addButton = document.querySelector('#addbutton');
const itemToAdd = document.querySelector('#itemToAdd');
const ul = document.querySelector('.todo');

addButton.addEventListener('click', function(){
    const newItem = createItem(itemToAdd.value);
    ul.appendChild(newItem);
});

function createItem(val){
    const item = document.createElement('li');
    item.textContent = val;

    return item;
}

