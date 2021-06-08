// console.log("working")
// var myIndex = 0;
// carousel();

// function carousel() {
//     var i;
//     var x = document.getElementsByClassName("projimages");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     myIndex++;
//     if (myIndex > x.length) {
//         myIndex = 1
//     }
//     x[myIndex - 1].style.display = "block";
//     setTimeout(carousel, 400); // Change image every 2 seconds

// }
window.onload = function() {
    // your code 

    document.querySelector("#thesislink").onclick = function() { myFunction() };

    function myFunction() {
        console.log("hello")
            // document.getElementById("thesis");
        document.getElementById("thesis").classList.toggle("projsec");

    }

    document.getElementById('mirrorlink').onclick = function() {
        document.getElementById('thesis')[0].classList.toggle("projsec");
    }
};