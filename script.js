const circleOne = document.querySelector('#circle-one')
const circleTwo = document.querySelector('#circle-two')
const circleThree = document.querySelector('#circle-three')
const circleFour = document.querySelector('#circle-four')
const circleFive = document.querySelector('#circle-five')
const circle = document.querySelectorAll('.circle')
const valueDisplay = document.querySelector('.value-display')
const outcomeDisplay = document.querySelector('.outcome')

function changeOutput() {

}

function updateTip() {

}

const hexToRgb = hex =>
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))

function generateColors() {
    const colors = [];

    for (let i = 0; i < 5; i++) {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        colors.push('rgb(' + hexToRgb(randomColor) + ')');
    }
    return colors
}

randomColors = generateColors()
console.log(randomColors)

function updateCircles() {
    circleOne.setAttribute('style', `background-color:${randomColors[0]}`)
    circleTwo.setAttribute('style', `background-color:${randomColors[1]}`)
    circleThree.setAttribute('style', `background-color:${randomColors[2]}`)
    circleFour.setAttribute('style', `background-color:${randomColors[3]}`)
    circleFive.setAttribute('style', `background-color:${randomColors[4]}`)
}
updateCircles()

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const randomInt = randomIntFromInterval(0,4)

function displayValue() {
    const correctColor = randomColors[randomInt]
    valueDisplay.innerHTML = correctColor
    return correctColor
}

console.log(displayValue())

const correctClickOne = circleOne.addEventListener('click', () => {
        let circleColor = (circleOne.getAttribute('style'))
        if (circleColor === `background-color:${displayValue()}`) {
            outcomeDisplay.innerHTML = "you're right!"
        } else {
            outcomeDisplay.innerHTML = 'nope'
        }
    })

const correctClickTwo = circleTwo.addEventListener('click', () => {
        let circleColor = (circleTwo.getAttribute('style'))
        if (circleColor === `background-color:${displayValue()}`) {
            outcomeDisplay.innerHTML = "you're right!"
        } else {
            outcomeDisplay.innerHTML = 'nope'
        }
    })

const correctClickThree = circleThree.addEventListener('click', () => {
        let circleColor = (circleThree.getAttribute('style'))
        if (circleColor === `background-color:${displayValue()}`) {
            outcomeDisplay.innerHTML = "you're right!"
        } else {
            outcomeDisplay.innerHTML = 'nope'
        }
    })

const correctClickFour = circleFour.addEventListener('click', () => {
        let circleColor = (circleFour.getAttribute('style'))
        if (circleColor === `background-color:${displayValue()}`) {
            outcomeDisplay.innerHTML = "you're right!"
        } else {
            outcomeDisplay.innerHTML = 'nope'
        }
    })

const correctClickFive = circleFive.addEventListener('click', () => {
        let circleColor = (circleFive.getAttribute('style'))
        if (circleColor === `background-color:${displayValue()}`) {
            outcomeDisplay.innerHTML = "you're right!"
        } else {
            outcomeDisplay.innerHTML = 'nope'
        }
    })
