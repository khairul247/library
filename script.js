
const myLibrary = [];

const form = document.querySelector(".my-form");
const showBtn = document.getElementById("show-dialog");
const container = document.querySelector(".container");

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
    dialog.showModal();
})


// functions **


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary(myLibrary) {
    let book = myLibrary[myLibrary.length-1];
    console.log(book)

    const card = document.createElement("ul");
    container.insertBefore(card,container.children[0])
    
    for (let key in book){
    console.log(key)
    console.log(book[key])
    const list = document.createElement('li');
    list.textContent = book[key];
    card.appendChild(list)
    }
}

