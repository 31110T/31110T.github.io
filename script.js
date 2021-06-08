// collect all the divs
var divs = document.querySelectorAll('#image');
console.log(divs)
    // get window width and height

var winWidth = 900;
var winHeight = 1000;
// var winWidth = window.innerWidth;
// var winHeight = window.innerHeight;

// i stands for "index". you could also call this banana or haircut. it's a variable
for (var i = 0; i < divs.length; i++) {

    // shortcut! the current div in the list
    var thisDiv = divs[i];

    // get random numbers for each element
    randomTop = getRandomNumber(0, winHeight);
    randomLeft = getRandomNumber(0, winWidth);

    // update top and left position
    thisDiv.style.top = randomTop + "px";
    thisDiv.style.left = randomLeft + "px";

}

// function that returns a random number between a min and max
function getRandomNumber(min, max) {

    return Math.random() * (max - min) + min;


}



// var i = 1;
// var append1Function = setInterval(function() {
//     var rando = Math.floor(Math.random() * 10) + 1;

//     var pic1 = `<div class="image" style="
//         left:${rando*40}px;
//         top:${rando*30}px;
//         "><img src="images/mirror/m1.jpg"></div>`;
//     document.getElementById("work").insertAdjacentHTML("beforeend", pic1);

//     var pic2 = `<div class="patternunit" style="
//         left:${rando*50}px;
//         top:${rando*80}px;
//         transform: scale(2.5);
//         "><img src="images/2.jpg"></div>`;
//     document.getElementById("box1").insertAdjacentHTML("beforeend", pic2);

//     var pic3 = `<div class="patternunit" style="
//         right:${rando*5}px;
//         top:${rando*6}px;
//         transform: scale(2.5);
//         "><img src="images/3.jpg"></div>`;
//     document.getElementById("box1").insertAdjacentHTML("beforeend", pic3);

//     var pic4 = `<div class="patternunit" style="
//         right:${rando*80}px;
//         top:${rando*80}px;
//         transform: scale(2.5);
//         "><img src="images/favicon.jpg"></div>`;
//     document.getElementById("box1").insertAdjacentHTML("beforeend", pic4);

//     var pic5 = `<div class="patternunit" style="
//         right:${rando*50}px;
//         top:${rando*100}px;
//         transform: scale(2.5);
//         "><img src="images/Infinity_Mirror_Effect.jpg"></div>`;
//     document.getElementById("box1").insertAdjacentHTML("beforeend", pic5);

//     if (i >= 2) {
//         // defining the maximum amount of cycles
//         clearInterval(append1Function);
//     };
// }, 300);



// var i = 1;

// var rando = 5;

// //Math.floor(Math.random() * 11);

// var append1Function = setInterval(function() {
//     //var i = Math.floor(Math.im() * 10) + 1;
//     console.log(i)
//         //inserting
//     var pic1 = `<div class="patternunit" style="
//    "><img src="images/mirror/mb1.jpeg"></div>`;
//     document.getElementById("box1").insertAdjacentHTML("beforeend", pic1);

//     var pic2 = `<div class="patternunit" style="
//    "><img src="images/neo/neo.jpg"></div>`;
//     document.getElementById("box2").insertAdjacentHTML("beforeend", pic2);

//     var pic3 = `<div class="patternunit" style="

//    "><img src="images/b4/b43.jpeg"></div>`;
//     document.getElementById("box3").insertAdjacentHTML("beforeend", pic3);

//     var pic4 = `<div class="patternunit" style="

//    "><img src="images/loser/d2.png"></div>`;
//     document.getElementById("box4").insertAdjacentHTML("beforeend", pic4);

//     var pic5 = `<div class="patternunit" style="
//    "><img src="images/surfin/s1.png"></div>`;
//     document.getElementById("box5").insertAdjacentHTML("beforeend", pic5);

//     var pic6 = `<div class="patternunit" style="

//    "><img src="images/turks/t2.jpg"></div>`;
//     document.getElementById("box6").insertAdjacentHTML("beforeend", pic6);

//     var pic7 = `<div class="patternunit" style="

//    "><img src="images/cos/posters22.png"></div>`;
//     document.getElementById("box7").insertAdjacentHTML("beforeend", pic7);

//     var pic8 = `<div class="patternunit" style="

//     "><img src="images/homepage.png"></div>`;
//     document.getElementById("box8").insertAdjacentHTML("beforeend", pic8);

//     if (i >= 1) {
//         // defining the maximum amount of cycles
//         clearInterval(append1Function);
//     }
//     i++;
// }, 500); //speed in ms