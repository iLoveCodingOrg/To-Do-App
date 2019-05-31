const addButton = document.querySelector('#addbutton');
const itemToAdd = document.querySelector('#itemToAdd');
const ul = document.querySelector('.todo');

addButton.addEventListener('click', function(){
    const newItem = createItem(itemToAdd.value);
    ul.appendChild(newItem);
});

function createItem(val){
    const item = document.createElement('li');
    const span = document.createElement('span');
    const delBtn = document.createElement('button');

    span.textContent = val;
    delBtn.textContent = 'Delete';
    delBtn.classList.add('btn-link');

    item.appendChild(span);
    item.appendChild(delBtn);

    delBtn.addEventListener('click', function(){
        item.parentNode.removeChild(item);
      })
    

    return item;
}

