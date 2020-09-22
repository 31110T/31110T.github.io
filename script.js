/*var video = document.querySelector(".videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}
*/
var i = 1;
//var n = 0; //opacity transform: scale(${(i)/10}); opacity:${n};
var rando = 5;

//Math.floor(Math.random() * 11);

var append1Function = setInterval(function() {
    //var i = Math.floor(Math.im() * 10) + 1;
    console.log(i)
        //inserting
    var pic1 = `<div class="patternunit" style="
   "><img src="images/mirror/mb1.jpeg"></div>`;
    document.getElementById("box1").insertAdjacentHTML("beforeend", pic1);

    var pic2 = `<div class="patternunit" style="
   "><img src="images/neo/neo.jpg"></div>`;
    document.getElementById("box2").insertAdjacentHTML("beforeend", pic2);

    var pic3 = `<div class="patternunit" style="

   "><img src="images/b4/b43.jpeg"></div>`;
    document.getElementById("box3").insertAdjacentHTML("beforeend", pic3);

    var pic4 = `<div class="patternunit" style="

   "><img src="images/loser/d2.png"></div>`;
    document.getElementById("box4").insertAdjacentHTML("beforeend", pic4);

    var pic5 = `<div class="patternunit" style="

   "><img src="images/surfin/s1.png"></div>`;
    document.getElementById("box5").insertAdjacentHTML("beforeend", pic5);

    var pic6 = `<div class="patternunit" style="

   "><img src="images/turks/t2.jpg"></div>`;
    document.getElementById("box6").insertAdjacentHTML("beforeend", pic6);

    var pic7 = `<div class="patternunit" style="

   "><img src="images/cos/posters22.png"></div>`;
    document.getElementById("box7").insertAdjacentHTML("beforeend", pic7);

    var pic8 = `<div class="patternunit" style="

    "><img src="images/homepage.png"></div>`;
    document.getElementById("box8").insertAdjacentHTML("beforeend", pic8);

    if (i >= 1) {
        // defining the maximum amount of cycles
        clearInterval(append1Function);
    }
    i++;
}, 500); //speed in ms

$(document).ready(function() {
    $('#show').click(function() {
        $('.menu').toggle("slide");
    });
});