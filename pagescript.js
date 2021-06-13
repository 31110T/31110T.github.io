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



//doesnt have to be a toggle?
$(document).ready(function() {
    $("#logo").css('display', 'block')
    $("#thesispg").css('display', 'none')
    $("#mirrorworldpg").css('display', 'none')
    $("#collabpg").css('display', 'none')
    $("#surfinpg").css('display', 'none')





    $("#thesis").click(function() {
        $("#thesispg").toggle();
        $("#logo").css('display', 'none')
        $("#thesispg").css('display', 'block')
        $("#mirrorpg").css('display', 'none')
        $("#collabpg").css('display', 'none')
        $("#surfinpg").css('display', 'none')
    });

    $("#mirror").click(function() {
        $("#mirrorpg").toggle();
        $("#logo").css('display', 'none')
        $("#thesispg").css('display', 'none')
        $("#mirrorpg").css('display', 'block')
        $("#collabpg").css('display', 'none')
        $("#surfinpg").css('display', 'none')
    });

    $("#collab").click(function() {
        $("#collabpg").toggle();
        $("#logo").css('display', 'none')
        $("#thesispg").css('display', 'none')
        $("#mirrorpg").css('display', 'none')
        $("#collabpg").css('display', 'block')
        $("#surfinpg").css('display', 'none')
    });

    $("#surfin").click(function() {
        $("#surfinpg").toggle();
        $("#logo").css('display', 'none')
        $("#thesispg").css('display', 'none')
        $("#mirrorpg").css('display', 'none')
        $("#collabpg").css('display', 'none')
        $("#surfinpg").css('display', 'block')
    });
});