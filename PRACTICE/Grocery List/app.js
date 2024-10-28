const alert = document.querySelector(".alert");
const container = document.querySelector('.grocery-container');
const submitBtn = document.querySelector(".grocery-form");
const groceryList = document.querySelector(".grocery-list");
const groceryItem = document.querySelector(".grocery-item");
const input = document.getElementById("grocery");
const clearBtn = document.querySelector(".clear-btn");

// GROCERY ITEMS BOX
let groceryBox = [];

// DISPLAY ALERT
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    setTimeout(() => {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}

function addItems(e) {
    // el.preventDefault();

    const editFlag = false;

    const value = input.value;
    const id = new Date().getTime().toString();

    if (value && !editFlag) {
        const element = document.createElement("article");
        const attr = document.createAttribute("data-id");
        attr.value = id;
        element.setAttribute(attr);

        element.classList.add("grocery-item");
        element.innerHTML = `<p>${value}</p><div class="btn-container"><button class="edit-btn" type="button"><i class="fa-solid fa-pen-to-square"></i></button><button class="delete-btn" type="button"><i class="fa-solid fa-trash"></i></button></div>`;
    };

    const editBtn = element.querySelector('.edit-btn');
    const deleteBtn = element.querySelector('.delete-btn');
    editBtn.addEventListener('click', editItem);
    deleteBtn.addEventListener('click', deleteItem);

    list.append(element);

    displayAlert('Item added to the list!', 'success')

    container.classList.add('show-container');

    addToLocalStorage(id, value);


    // const newPar = document.createElement("p");
    // const groceryItem = document.createTextNode(input.value);
    // newPar.appendChild(groceryItem);
    // newArticle.classList.add("grocery-item");
    // Creating dataset and attending ID;
    // newArticle.dataset.id = randomNum;
    // newArticle.appendChild(newPar);

    // groceryList.appendChild(newArticle)
    // groceryBox.push(newArticle);
    // for (elem of groceryBox) {
    //     groceryList.appendChild(elem)};

    // // Creating Button container;
    // const div = document.createElement("div");
    // div.classList.add("btn-container");
    // // Creating Edit Button container;
    // const btnEdit = document.createElement("button");
    // btnEdit.classList.add("edit-btn");
    // btnEdit.setAttribute("type", "button");
    // btnEdit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    // // Creating Delete Button container;
    // const btnDelete = document.createElement("button");
    // btnDelete.classList.add("delete-btn");
    // btnDelete.setAttribute("type", "button");
    // btnDelete.innerHTML = '<i class="fa-solid fa-trash"></i>';
    // // Appending Buttons to
    // div.appendChild(btnEdit);
    // div.appendChild(btnDelete);

}

submitBtn.addEventListener("submit", addItems());

clearBtn.addEventListener("delete", () => {
    console.log("from clearbtn");
    while (groceryBox.firstChild) {
        groceryList.removeChild(groceryBox.firstChild);
    }
    groceryBox = [];
});
