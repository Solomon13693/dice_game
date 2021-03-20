let firstRandomDice = Math.floor(Math.random()*6)+1;
let firstRandonImage = "images/dice" + firstRandomDice + ".png";
document.querySelectorAll("img")[0].setAttribute("src", firstRandonImage);

let secondRandomDice = Math.floor(Math.random()*6)+1;
let secondRandonImage = "images/dice" + secondRandomDice + ".png";
document.querySelectorAll("img")[1].setAttribute("src", secondRandonImage);

let h1 = document.querySelector("h1");

if(firstRandomDice > secondRandomDice){
    h1.innerHTML = "The winner is player 1"
} else if(firstRandomDice < secondRandomDice){
    h1.innerHTML = "The winner is player 2"
} else {
    h1.innerHTML = "The game is draw, try again"
}