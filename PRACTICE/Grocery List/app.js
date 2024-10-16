// const submitBtn = document.querySelector('.submit-btn');
const alert = document.querySelector('.alert');
const groceryForm = document.forms['grocery-form'];
const groceryList = document.querySelector('.grocery-list');
const groceryItem = document.querySelector('.grocery-item');


groceryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let list = [];
    let input = document.getElementById('grocery').value;
    list += input;
    // Creating new 'article' tag; ///////
    const newArticle = document.createElement('article');
    const childArticle = document.createTextNode('example');
    newArticle.classList.add('grocery-item');
    newArticle.appendChild(childArticle);
    groceryList.appendChild(newArticle);
    /////// //////////////////////////////
    groceryItem.textContent = list;
    console.log(list);
});
