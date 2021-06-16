//doesnt have to be a toggle?

document.querySelector(".projects").addEventListener("click", resize);
document.querySelector(".projects").addEventListener("click", visibility);


function resize() {
    $("#arrow").toggle()
    $(".work").toggle()
        // $("#logo").toggle()

    var proj = document.querySelector(".projects");
    var info = document.querySelector(".info");
    var imgs = document.querySelector(".work");
    // var logo = document.querySelector("#logo");

    // var work = document.querySelector(".work");
    proj.classList.toggle("changewidth");
    info.classList.toggle('infovis');
    imgs.classList.toggle('infovis');

    // work.classList.toggle('infovis');

    // projname.classList.toggle("projvis")
}

// function visibility() {
//     console.log("hello")
//     document.querySelectorAll('.proj').forEach(function(element) {
//         element.style.display = 'none';
//     });
// };

function visibility() {
    //deleting titles
    $('.proj').each(
        function() {
            $(this).toggleClass('projvis');
        }
    );
};

// $("#logo").toggle()
$(document).ready(function() {

    $("#logo").css('display', 'block')
    $("#thesispg").css('display', 'none')
    $("#mirrorpg").css('display', 'none')
    $("#collabpg").css('display', 'none')
    $("#surfinpg").css('display', 'none')
    $("#thesisdesc").css('display', 'none')
    $("#mirrordesc").css('display', 'none')
    $("#collabdesc").css('display', 'none')
    $("#surfindesc").css('display', 'none')

    // other 
    $("#logo").css('display', 'block')
    $("#turkspg").css('display', 'none')
    $("#cosmicpg").css('display', 'none')
    $("#carolpg").css('display', 'none')
    $("#alexpg").css('display', 'none')
    $("#loosepg").css('display', 'none')
    $("#turksdesc").css('display', 'none')
    $("#cosmicdesc").css('display', 'none')
    $("#caroldesc").css('display', 'none')
    $("#alexdesc").css('display', 'none')
    $("#loosedesc").css('display', 'none')



    $("#thesis").click(function() {
        $("#thesispg").toggle();
        $("#logo").css('display', 'none')
        $("#thesispg").css('display', 'block')
        $("#thesisdesc").css('display', 'block')
        $("#mirrorpg").css('display', 'none')
        $("#mirrordesc").css('display', 'none')
        $("#collabpg").css('display', 'none')
        $("#collabdesc").css('display', 'none')
        $("#surfinpg").css('display', 'none')
        $("#surfindesc").css('display', 'none')
    });

    $("#mirror").click(function() {
        $("#mirrorpg").toggle();
        $("#logo").css('display', 'none')
        $("#thesispg").css('display', 'none')
        $("#thesisdesc").css('display', 'none')
        $("#mirrorpg").css('display', 'block')
        $("#mirrordesc").css('display', 'block')
        $("#collabpg").css('display', 'none')
        $("#collabdesc").css('display', 'none')
        $("#surfinpg").css('display', 'none')
        $("#surfindesc").css('display', 'none')
    });

    $("#collab").click(function() {
        $("#collabpg").toggle();
        $("#logo").css('display', 'none')
        $("#thesispg").css('display', 'none')
        $("#thesisdesc").css('display', 'none')
        $("#mirrorpg").css('display', 'none')
        $("#mirrordesc").css('display', 'none')
        $("#collabpg").css('display', 'block')
        $("#collabdesc").css('display', 'block')
        $("#surfinpg").css('display', 'none')

    });

    $("#surfin").click(function() {
        $("#surfinpg").toggle();
        $("#logo").css('display', 'none')
        $("#thesispg").css('display', 'none')
        $("#thesisdesc").css('display', 'none')
        $("#mirrorpg").css('display', 'none')
        $("#mirrordesc").css('display', 'none')
        $("#collabpg").css('display', 'none')
        $("#collabdesc").css('display', 'none')
        $("#surfinpg").css('display', 'block')
        $("#surfindesc").css('display', 'block')
    });


    // OTHER ONES


    $("#turks").click(function() {
        $("#turkspg").toggle();
        $("#turkspg").css('display', 'block')
        $("#turksdesc").css('display', 'block')

        $("#logo").css('display', 'none')
        $("#cosmicpg").css('display', 'none')
        $("#cosmicdesc").css('display', 'none')
        $("#carolpg").css('display', 'none')
        $("#caroldesc").css('display', 'none')
        $("#alexpg").css('display', 'none')
        $("#alexdesc").css('display', 'none')
        $("#loosepg").css('display', 'none')
        $("#loosedesc").css('display', 'none')

    });

    $("#cosmic").click(function() {
        $("#cosmicpg").toggle();
        $("#cosmicpg").css('display', 'block')
        $("#cosmicdesc").css('display', 'block')

        $("#logo").css('display', 'none')
        $("#turkspg").css('display', 'none')
        $("#turksdesc").css('display', 'none')
        $("#carolpg").css('display', 'none')
        $("#caroldesc").css('display', 'none')
        $("#alexpg").css('display', 'none')
        $("#alexdesc").css('display', 'none')
        $("#loosepg").css('display', 'none')
        $("#loosedesc").css('display', 'none')

    });

    $("#carol").click(function() {
        $("#carolpg").toggle();
        $("#carolpg").css('display', 'block')
        $("#caroldesc").css('display', 'block')

        $("#logo").css('display', 'none')
        $("#turkspg").css('display', 'none')
        $("#turksdesc").css('display', 'none')
        $("#cosmicpg").css('display', 'none')
        $("#cosmicdesc").css('display', 'none')
        $("#alexpg").css('display', 'none')
        $("#alexdesc").css('display', 'none')
        $("#loosepg").css('display', 'none')
        $("#loosedesc").css('display', 'none')

    });

    $("#alex").click(function() {
        $("#alexpg").toggle();
        $("#alexpg").css('display', 'block')
        $("#alexdesc").css('display', 'block')

        $("#logo").css('display', 'none')
        $("#turkspg").css('display', 'none')
        $("#turksdesc").css('display', 'none')
        $("#cosmicpg").css('display', 'none')
        $("#cosmicdesc").css('display', 'none')
        $("#carolpg").css('display', 'none')
        $("#caroldesc").css('display', 'none')
        $("#loosepg").css('display', 'none')
        $("#loosedesc").css('display', 'none')

    });

    $("#loose").click(function() {
        $("#loosepg").toggle();
        $("#loosepg").css('display', 'block')
        $("#loosedesc").css('display', 'block')

        $("#logo").css('display', 'none')
        $("#turkspg").css('display', 'none')
        $("#turksdesc").css('display', 'none')
        $("#cosmicpg").css('display', 'none')
        $("#cosmicdesc").css('display', 'none')
        $("#carolpg").css('display', 'none')
        $("#caroldesc").css('display', 'none')
        $("#alexpg").css('display', 'none')
        $("#alexdesc").css('display', 'none')

    });

});