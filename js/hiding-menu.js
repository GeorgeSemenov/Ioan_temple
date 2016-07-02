var clicked = false;
$(document).ready(function(){
    var hm = $('.hidden-menu');
    $(".fa-bars").click(function(){
        if (clicked == false) {
            clicked = true;
            hm.css({display:"inherit", opacity: "1"});
            $('#hiding_menu_inner').css({display: "inherit", height: "auto"});
        } else {
            clicked = false;
            hm.css({display:"none",opacity:"0"});
            $('#hiding_menu_inner').css("height", "0px");
    }})
});