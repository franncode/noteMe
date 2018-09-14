// Cached relevant objects to create notes
let newNoteTitle = document.querySelector('#newNoteTitle');
let newNoteBody = document.querySelector('#newNoteBody');
let newNoteButton = document.querySelector('#newNoteButton');



// Choose a animation from "Animate CSS" to set
let animationCSS = 'bounce'

// Post new note
newNoteButton.addEventListener('click', noteCreator)

// Note creator
function noteCreator() {


    if (document.getElementsByClassName('card').length % 3 === 0) {
        // Create new Row
        var newRow = document.createElement('div')
        newRow.classList.add('row', 'row-notes')
        document.querySelector('#notes').appendChild(newRow)
        // Create new Col and put on new Row
        var newCol = document.createElement('div')
        newCol.classList.add('col-lg-4', 'col-md-12', 'mb-lg-0', 'mb-4', 'col-notes')
        newRow.appendChild(newCol)
    } else {
        // Create new Col and put on exists Row
        var newCol = document.createElement('div')
        newCol.classList.add('col-lg-4', 'col-md-12', 'mb-lg-0', 'mb-4')
        //  This save the actual empty Row
        let rowEmpty = 0
        while (document.getElementsByClassName('row-notes')[rowEmpty].getElementsByClassName('col-notes').length === 3) {
            rowEmpty++
        }
        document.getElementsByClassName('row-notes')[rowEmpty].appendChild(newCol)
    }

    // Create new Card
    let newCard = document.createElement('div')
    newCard.classList.add('card')
    newCol.appendChild(newCard)
    let newCardBody = document.createElement('div')
    newCardBody.classList.add('card-body')
    newCard.appendChild(newCardBody)

    // Create new Title-Text-Card
    let newTitleTextCard = document.createElement('h2')
    newTitleTextCard.appendChild(document.createTextNode(newNoteTitle.value))
    newTitleTextCard.classList.add('font-weight-bold', 'my-4')
    newCardBody.appendChild(newTitleTextCard)

    // Create new Body-Text-Card
    let newBodyTextCard = document.createElement('p')
    newBodyTextCard.appendChild(document.createTextNode(newNoteBody.value))
    newBodyTextCard.classList.add('grey-text')
    newCardBody.appendChild(newBodyTextCard)

    // Reset text from form "Add some notes"
    document.querySelector('#newNoteTitle').value = ''
    document.querySelector('#newNoteBody').value = ''

    // Animate the button
    function animationClick() {
        newNoteButton.classList.add('animated', animationCSS)
        setTimeout(() => {
            newNoteButton.classList.remove('animated', animationCSS)
        }, 1250)
    }
    // Call func for animate the button
    animationClick()
}