$(function() {
    $(".pics").on("click", function(e) {
        $(this).toggleClass("show").siblings().toggleClass("hide");
    });
})