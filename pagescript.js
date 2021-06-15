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
        // $(".info").hide()

    // $(".projects").click(function() {
    //     // $("#wrapper").css({
    //     //     'grid-template-columns': '50px 400px 1fr'
    //     // })
    //     $("#link").css({
    //         'opacity': '1',
    //         // 'grid-column': '1'
    //     })
    //     $(".projects").css({
    //         'opacity': '0',
    //         // 'grid-column': '2'
    //     })
    // });

    // //reverses
    // $("#link").click(function() {

    //     $("#link").css({
    //         'opacity': '0',
    //         // 'grid-column': '2'
    //     })
    //     $(".projects").css({
    //         'opacity': '1',
    //         // 'grid-column': '1'
    //     })
    // });


    // $('#link').hide();
    // $('#link, .projects').click(function() {
    //     $('#link, .projects').toggle();
    //     // $("#wrapper").css({
    //     //     'grid-template-columns': '50px 50px 400px 1fr'
    //     // })
    // });
    // $(".projects").click(function() {
    //     $("#wrapper").css({
    //         'grid-template-columns': '0px 50px 400px 1fr'
    //     })

    // });



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

        // $("#wrapper").css({
        //     'grid-template-columns': '50px 400px 1fr',

        // })

        // $(".projects").css({

        //     'width': '50px',
        //     'justify-content': 'center',
        //     'transition': 'width .8s, justify-content .8s'
        // })

        // $(".proj").css('display', "none", )
        // $(".info").css({ 'display': "block", 'transition': 'display .8s,' })


        // $(".projects").text("arrow");

        // $("#.projects").toggleClass("info")
        // $('.projects').removeAttr('class');



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
});