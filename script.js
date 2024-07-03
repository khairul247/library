
const myLibrary = [];
console.log(myLibrary)

const form = document.querySelector(".my-form");
const showBtn = document.getElementById("show-dialog");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;


    let newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    console.log(myLibrary)
    dialog.close();
})

showBtn.addEventListener("click", () => {
    dialog.showModal();
})


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary() {
}
