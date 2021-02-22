//The constant variable contains the possible options for each character in the hex code.

const colorCodes = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let hexNum = "#";

function changeColor() {
    let hexReset = document.getElementById("hex-code").innerHTML = "Hex: ";
    for (let i = 0; i < 6; i++) {
        hexNum += colorCodes[Math.floor(Math.random() * colorCodes.length)];
    }
    document.getElementById("backColor").style.backgroundColor = hexNum;
    document.getElementById("hex-code").innerHTML += hexNum;
    document.getElementById("hex-code").style.opacity = 100;
    hexNum = "#";
    hexReset;
}

//Function should access the body element by assigned id and then change its' background color.
//The color should be assigned randomly by randomly an item within the array containing the various characters that make up hex codes.
//This process should repeat until a six character code has been created.
//This code should be assigned as the page's new background color.