// Cached relevant objects to create notes
let newNoteTitle = document.querySelector('#newNoteTitle');
let newNoteBody = document.querySelector('#newNoteBody');
let newNoteButton = document.querySelector('#newNoteButton');

// Cards counter
let cardNumber = 1

// Last Row without 3 cards
let rowSelectedIndex = 0

// Choose a animation from "Animate CSS" to set
let animationCSS = 'bounce'

// Post new note
newNoteButton.addEventListener('click', noteCreator)
newNoteTitle.addEventListener('keypress', function (event) {
    // Check that keypressed is Enter 
    if (event.keyCode === 13) {
        noteCreator()
    }
})
newNoteBody.addEventListener('keypress', function (event) {
    // Check that keypressed is Enter 
    if (event.keyCode === 13) {
        noteCreator()
    }
})

// Delete note
// newButtonCard.addEventListener('click', noteRemover)

// Note creator
function noteCreator() {

    // Check text input is not empty
    if ((document.querySelector('#newNoteTitle').value.length > 0) && (document.querySelector('#newNoteBody').value.length > 0)) {

        if (document.getElementsByClassName('card').length % 3 === 0) {
            // Create new Row
            var newRow = document.createElement('div')
            newRow.classList.add('row', `row-notes-${rowSelectedIndex}`)
            document.querySelector('#notes').appendChild(newRow)
            rowSelectedIndex++
        }

        // Create new Col and put on exists Row
        var newCol = document.createElement('div')
        newCol.classList.add('col-lg-4', 'col-md-12', 'mb-lg-0', 'mb-4', 'col-notes')
        newCol.id = `card-${cardNumber}`
        document.getElementsByClassName(`row-notes-${rowSelectedIndex-1}`)[0].appendChild(newCol)


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

        // Create new Button-Card and insider Icon
        let newButtonCard = document.createElement('a')
        newButtonCard.classList.add('btn', 'second-color', 'btn-rounded')
        newButtonCard.id = `button-${cardNumber}`
        newCardBody.appendChild(newButtonCard)
        let newIconButton = document.createElement('i')
        newIconButton.classList.add('fas', 'fa-check', 'fa-lg')
        newButtonCard.appendChild(newIconButton)

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
        cardNumber++
    }
}

function noteRemover() {
    let cardNumberId = newButtonCard.id
    document.removeChild(document.getElementById(`card-${parseInt(cardNumberId)}`))
    // Add method remove to a button?
}

function hermosuraDeAlpaca(iteracionSecuenciasAdn, cantTiposDeHermosura) {

    // Check argumentos iteracionSecuenciasAdn y cantTiposDeHermosura
    if ((1 <= iteracionSecuenciasAdn && iteracionSecuenciasAdn <= 10 ^ 15) && (2 <= cantTiposDeHermosura && cantTiposDeHermosura <= 10 ^ 9)) {

        // Inicio secuencia ADN de alpaca
        let secuenciaAdn = 'A'
        for (let i = 0; i < iteracionSecuenciasAdn; i++) {
            // split secuenciaAdn
            let arraySecuencia = secuenciaAdn.split('')
            // recorrer arreglo y map cada indice
            let arraySecuenciaMapeado = arraySecuencia.map(function (letra) {
                switch (letra) {
                    case 'A':
                        return 'AL'
                    case 'L':
                        return 'PACA'
                    case 'P':
                        return 'CP'
                    case 'C':
                        return 'PC'
                }
            })
            // join arraySecuenciaMapeado
            secuenciaAdn = arraySecuenciaMapeado.join('')
        }

        // Busqueda de subcadenas ALPACA
        let subcadenasAlpaca = 0
        let position = 0
        while (position < secuenciaAdn.length && position !== -1) {
            if (secuenciaAdn.indexOf('ALPACA', position) !== -1) {
                subcadenasAlpaca++
                position = secuenciaAdn.indexOf('ALPACA', position) + 5
            } else {
                position = -1
            }
        }

        return subcadenasAlpaca % cantTiposDeHermosura

    } else {
        return 'datos ingresados incorrectos'
    }
}

document.getElementById('test').innerHTML = hermosuraDeAlpaca(234612846789231, 123456789)