var is_clicked_hidden_menu = false;
var is_open_droppdown_menu = false;
$(document).ready(function(){
    var hm = $('.hidden-menu');
    var him = $('.hidden-menu>li>ul');
    var his = $('.hidden-menu>li>span');
    $(".fa-bars").click(function(){
        if (is_clicked_hidden_menu == false) {
            is_clicked_hidden_menu = true;
            hm.css({display:"inherit", opacity: "1"});
        } else {
            is_clicked_hidden_menu = false;
            hm.css({display:"none",opacity:"0"});
            his.css('text-decoration','none');
            him.css('display','none');
    }})
    $(".hidden-menu>li>span").click(function(){
        if (is_open_droppdown_menu == false){
            is_open_droppdown_menu = true;
            $(this).css({textDecoration:"underline"});
            $(this).siblings().css("display","inherit");
        } else if ((is_clicked_hidden_menu == true) && !($(this).css('textDecoration')=="underline")){
            //alert('miscelenious');
            his.css('text-decoration','none');
            him.css('display','none');
            $(this).css('text-decoration','underline');
            $(this).siblings().css('display', 'inherit');
        }else{
            is_open_droppdown_menu = false;
            $(this).css({textDecoration:"none"});
            $(this).siblings().css('display','none');
        }
    })
});
