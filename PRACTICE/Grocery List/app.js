const alert = document.querySelector(".alert");
const submitBtn = document.forms["grocery-form"];
const groceryList = document.querySelector(".grocery-list");
const groceryItem = document.querySelector(".grocery-item");
const input = document.getElementById("grocery");

submitBtn.addEventListener("submit", (event) => {
    event.preventDefault();
    // Generate random number for ID
    const randomNum = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    // Creating new 'article' tag;
    const newArticle = document.createElement("article");
    // Creating new 'p' tag;
    const newPar = document.createElement("p");
    const groceryItem = document.createTextNode(input.value);
    newPar.appendChild(groceryItem);
    newArticle.classList.add("grocery-item");
    // Creating dataset and attending ID;
    newArticle.dataset.id = randomNum;
    newArticle.appendChild(newPar);
    groceryList.appendChild(newArticle);
    // Creating Button container;
    const div = document.createElement("div");
    div.classList.add("btn-container");
    // Creating Edit Button container;
    const btnEdit = document.createElement("button");
    btnEdit.classList.add("edit-btn");
    btnEdit.setAttribute("type", "button");
    btnEdit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    // Creating Delete Button container;
    const btnDelete = document.createElement("button");
    btnDelete.classList.add("delete-btn");
    btnDelete.setAttribute("type", "button");
    btnDelete.innerHTML = '<i class="fa-solid fa-trash"></i>';
    // Appending Buttons to
    div.appendChild(btnEdit);
    div.appendChild(btnDelete);

    newArticle.appendChild(div);
    //////////////////////////////////////
    input.value = "";

    // JUST WORKING ON ALERTS, WHEN YOU COME, LOOK THE ORIGINAL ALERT CODE

    console.log(newArticle);
});
