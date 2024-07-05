
const myLibrary = [];

const form = document.querySelector(".my-form");
const showBtn = document.getElementById("show-dialog");
const container = document.querySelector(".container");
const deleteBtn = document.querySelector(".delete-btn");
const addBook = document.querySelector(".add-book");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    let newBook = new Book(title,author,pages,read);

    myLibrary.push(newBook);
    addBookToLibrary(myLibrary);
    dialog.close();
})

showBtn.addEventListener("click", () => {
    dialog.show();
})




// functions **


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages + " pages";
    this.read = read;
}

Book.prototype.toggleReadStatus = function () {
    if (this.read === "Finished") {
        this.read = "In Progress";
    } else if (this.read === "In Progress") { 
        this.read = "Not Yet";
    } else {
        this.read = "Finished";
    }
};



function addBookToLibrary(myLibrary) {
    let book = myLibrary[myLibrary.length-1];
    createCard(book)
}

function createCard(book) {

    const card = document.createElement("ul");
    container.insertBefore(card,addBook)

    const att = document.createAttribute("class");
    att.value = "delete-btn";
    
    for (let key in book){

        if (typeof book[key] === 'function') continue;
        const list = document.createElement('li');
        list.classList.add(key);
        list.textContent = book[key];
        card.appendChild(list)
    }

    const readElement = card.querySelector(".read");
    updateReadColor(readElement,book.read)

    createDeleteBtn(card,att)
    createToggleBtn (card,book,readElement)

}

function createDeleteBtn (card,att) {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttributeNode(att);
    card.appendChild(deleteBtn);
    deleteBtn.addEventListener("click",(e) => {
        e.target.parentElement.remove();
    })
}

function createToggleBtn (card,book,readElement) {
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Toggle Read Status";
card.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
    book.toggleReadStatus();
    readElement.textContent = book.read;
    updateReadColor(readElement,book.read)
})

}

function updateReadColor (element,status) {
    if (status === "Finished") {
        element.style.color = "green";
    } else if (status === "In Progress") {
        element.style.color = "orange";
    } else {
        element.style.color = "red";
    }
}