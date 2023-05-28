var myUserInput = document.querySelector('.input')

var checkButton = document.querySelector('.check')
var modalButton = document.querySelector('.rules')
var score = document.querySelector('.score')
var highScore = document.querySelector('.highScore')
var again = document.querySelector('.again')
const body = document.querySelector('body')
const box = document.querySelector('.box')




again.addEventListener('click', () => { location.reload() })



checkButton.addEventListener('click', () => {

    if (score.textContent > 0) {



        var myNumber = Math.round(Math.random() * 5) + 1;
        console.log(myNumber)
        console.log(myUserInput.value)
        //console.log(score.textContent)
        box.innerHTML = myNumber

        if (myUserInput.value == myNumber) {
            alert("You win")
            box.innerHTML == myUserInput.value
            score.textContent = +score.textContent + 1
            if (highScore.textContent < score.textContent) {
                highScore.textContent = score.textContent
                box.innerHTML == myUserInput.value
            }

        } else {

            score.textContent = +score.textContent - 1
            box.innerHTML == myUserInput.value
        }
    } else {
        alert("sorry aap game nai khel saktey, please try again")
    }

})