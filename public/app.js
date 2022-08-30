const input = document.getElementById("input")
const useKey = document.getElementById("useKey")
const removeButton = document.getElementById("remove")
const keyPress = document.getElementById("keyPress")
const diceNumber = document.getElementById("diceNumber")
const diceImage = document.getElementById("diceImage")
const gameStatus = document.getElementById("gameStatus")
const imageSource = ["./Dice/dice1.jpeg", "./Dice/dice2.jpeg", "./Dice/dice3.jpeg", "./Dice/dice4.jpeg", "./Dice/dice5.jpeg", "./Dice/dice6.jpeg"]

function replaceImage(diceRoll)
{
    for (let index = 1; index <= 6; index++) {
        if (diceRoll == index)
            {
                document.getElementById("diceImage").src = imageSource[index - 1]
            }
    }
}

function rollDice(diceRoll)
{
        diceRoll = Math.ceil(Math.random() * 6)
        replaceImage(diceRoll)

        return diceRoll
}


let diceTotal = 0
let diceRoll = 0
let actualRoll = 0
let diceTarget = 15 //prompt("Please Enter how many points to win:")

useKey.addEventListener("click", () => {

    actualRoll = rollDice(diceRoll)
    gameStatus.style.color = "black"


    if (diceTotal <= diceTarget)
    {
        diceTotal += actualRoll
        gameStatus.textContent = diceTotal

    }
    if (diceTotal > diceTarget)
    {
        gameStatus.textContent = `You have won the game with ${diceTotal} points. press Roll the Dice to start a new game`
        gameStatus.style.color = "darkgreen"
        diceTotal = 0

    }
    else if (actualRoll == 1)
    {
        diceTotal = 0
        gameStatus.textContent = "You have rolled a 1, you lost the game, press Roll the Dice to start a new game"
        gameStatus.style.color = "darkred"
    }
})