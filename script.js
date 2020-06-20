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

var append1Function = setInterval(function(){
  //var i = Math.floor(Math.im() * 10) + 1;
  console.log(i)
  //inserting
 var pic1 = `<div class="patternunit" style="
   left:${rando * 40}px;
   top:${i * 40}px;
   "><img src="images/mirror/m1.jpg"></div>`;
 document.getElementById("box1").insertAdjacentHTML("beforeend", pic1);

 var pic2 = `<div class="patternunit" style="
   right:${i * 20}px;
   top:${rando * 30}px;
   "><img src="images/neo/neo.jpg"></div>`;
 document.getElementById("box2").insertAdjacentHTML("beforeend", pic2);

 var pic3 = `<div class="patternunit" style="
   right:${rando * 20}px;
   top:${rando * 20}px;
   "><img src="images/b4/b43.jpeg"></div>`;
 document.getElementById("box3").insertAdjacentHTML("beforeend", pic3);

 var pic4 = `<div class="patternunit" style="
   left:${rando * 20}px;
   top:${i * 50}px;
   "><img src="images/adv/d2.png"></div>`;
 document.getElementById("box4").insertAdjacentHTML("beforeend", pic4);

 var pic5 = `<div class="patternunit" style="
   right:${i * 10}px;
   top:${rando * 20}px;
   "><img src="images/surfin/s1.png"></div>`;
 document.getElementById("box5").insertAdjacentHTML("beforeend", pic5);

 var pic6 = `<div class="patternunit" style="
   left:${rando * 20}px;
   top:${i * 20}px;
   "><img src="images/turks/t2.jpg"></div>`;
 document.getElementById("box6").insertAdjacentHTML("beforeend", pic6);

 var pic7 = `<div class="patternunit" style="
   left:${i * 20}px;
   top:${i * 20}px;
   "><img src="images/cos/posters22.png"></div>`;
 document.getElementById("box7").insertAdjacentHTML("beforeend", pic7);

 if (i >= 1) {
   // defining the maximum amount of cycles
  clearInterval(append1Function);
 }
 i++;
},500); //speed in ms

 $(document).ready(function(){
     $('#show').click(function() {
       $('.menu').toggle("slide");
     });
 });
