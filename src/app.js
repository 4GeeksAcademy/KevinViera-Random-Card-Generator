import "bootstrap";
import "./style.css";

window.onload = function() {
    document.querySelector("#card-number").innerHTML = generateRandomNumber();
    document.querySelector("#top-icon","#bottom-icon").innerHTML = generateRandomIcon();

};

let generateRandomNumber = () => {
    let Numbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K',]
    let IndexNumbers = Math.floor(Math.random()*Numbers.length);
    return Numbers[IndexNumbers];
}
let generateRandomIcon = () => {
    let Icon = ['♦','♥','♠','♣']
    let IndexIcon = Math.floor(Math.random()*Icon.length);
    return Icon[IndexIcon];
}
