const myLibrary = []
let newBook

const addBook = document.getElementById('add-book')
const closeModal = document.getElementById('close-modal')
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

function printLibrary(array) {
    library.innerHTML = ""
    for (i = 0; i < array.length; i++) {
        addBookCard(array[i])
    }
    setButtons()
}

function addBookCard(book) {
    const card = document.createElement("div")
    library.appendChild(card)
    let buttonText 

    if (book.read == "✔ Read") {
        buttonText = "Mark as Unread"
    } else {
        buttonText = "Mark as Read"
    }
       
    card.innerHTML = `<div class="status">${book.read}</div><p>${book.title}</p> <p>${book.author}</p> <p>${book.pages} pages </p>
    <button class="remove-book" id="${myLibrary.indexOf(book)}">remove</button>
    <button class="mark-read" id="${myLibrary.indexOf(book)}">${buttonText}</button>`
    card.classList.add("book-card")   
}

function setButtons() {

    const markReadArray = [...document.getElementsByClassName('mark-read')]
    const removeBookArray = [...document.getElementsByClassName('remove-book')]

    markReadArray.forEach((btn) => {
            btn.addEventListener("click", function() {
                if (myLibrary[btn.id].read == "✔ Read") {
                    myLibrary[btn.id].read = "✖ Not Read"
                    printLibrary(myLibrary)
                } else {
                    myLibrary[btn.id].read = "✔ Read"
                    printLibrary(myLibrary)
                }
            })
        })

    removeBookArray.forEach((btn) => {
        btn.addEventListener("click", function() {
            myLibrary.splice(btn.id, 1)
            printLibrary(myLibrary)
        })
    })
}

function formatString(string) {
    const words = string.split(" ")

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1)
    }

    return words.join(" ")
}

// show modal with form when newBook is clicked //

addBook.addEventListener('click', () => {
    modal.show()
})

closeModal.addEventListener('click', () => {
    modal.close()
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


    newBook = new Book(formatString(title.value), formatString(author.value), pages.value, status)

    addBookToLibrary(myLibrary, newBook)
    printLibrary(myLibrary)
    form.reset()
})







