
const myLibrary = [];

const form = document.querySelector(".my-form");
const showBtn = document.getElementById("show-dialog");
const container = document.querySelector(".container");
const deleteBtn = document.querySelector(".delete-btn")
const addBook = document.querySelector(".add-book")

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
    const list = document.createElement('li');
    list.classList.add(key);
    list.textContent = book[key];
    card.appendChild(list)
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttributeNode(att);
    card.appendChild(deleteBtn);
    deleteBtn.addEventListener("click",(e) => {
        e.target.parentElement.remove();
    })

}
