const myLibrary = []
let newBook

const addBook = document.getElementById('add-book')
const modal = document.getElementById('modal')
const form = document.getElementById('form')
const library = document.getElementById('library')

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(array, book) {
  array.push(book)
}

function addBookCard(book) {
    const card = document.createElement("div")
    library.appendChild(card)
       
    
    card.innerHTML = `<div class="status">${book.read}</div><p>${book.title}</p> <p>${book.author}</p> <p>${book.pages} pages </p>
    <button class="remove-book" id="${myLibrary.indexOf(book)}">remove</button>
    <button class="mark-read" id="${myLibrary.indexOf(book)}">mark as unread</button>`
    card.classList.add("book-card")
    
}

function setButtons() {

    const markReadArray = [...document.getElementsByClassName('mark-read')]
    const removeBookArray = [...document.getElementsByClassName('remove-book')]

    markReadArray.forEach((btn) => {
            btn.addEventListener("click", function() {
                console.log(myLibrary[btn.id].read)
            })
        })

    removeBookArray.forEach((btn) => {
        btn.addEventListener("click", function() {
            console.log(myLibrary[btn.id])
        })
    })
}

// Print out library //

for (i = 0; i < myLibrary.length; i++) {
    addBookCard(myLibrary[i])
}

// show modal with form when newBook is clicked //

addBook.addEventListener('click', () => {
    modal.show()
})

// create new book and add it to library

form.addEventListener('submit', () => {

    let title = document.getElementById('title')
    let author = document.getElementById('author')
    let pages = document.getElementById('pages')
    let read = document.getElementById('read')
    let status
 
    if (read.checked == true) {
        status = "✔ Read"
    } else {
        status = "✖ Not Read"
    }

    newBook = new Book(title.value, author.value, pages.value, status)

    addBookToLibrary(myLibrary, newBook)
    addBookCard(newBook)
    setButtons()

})







