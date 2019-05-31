const addButton = document.querySelector('#addbutton');
const itemToAdd = document.querySelector('#itemToAdd');

addButton.addEventListener('click', function(){
    console.log(itemToAdd.value);
})
