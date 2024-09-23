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
        card.classList.add('read-yes')
    } else {
        buttonText = "Mark as Read"
        card.classList.add('read-no')
    }
       
    card.innerHTML = `<div id="status-bar">${book.read}</div>
    <div class="book-details">
        <p id="p-title">${book.title}</p> <p id="p-author">${book.author}</p> <p id="p-pages">${book.pages} pages</p>
    </div>
    <div class="actions">
        <button class="mark-read" id="${myLibrary.indexOf(book)}">${buttonText}</button>
        <button class="remove-book" id="${myLibrary.indexOf(book)}">Remove</button>
    </div>`
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

addBook.addEventListener('click', () => {
    modal.show()
})

closeModal.addEventListener('click', () => {
    modal.close()
})

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







