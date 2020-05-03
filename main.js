
// video popup

$(".btn").click(function(){
    $('#video').css('display','block');
    }
);
$("#btn-1").click(function(){
   $('#video').css('display','none');
}); 

var modal = document.getElementById('video');
var clickBtn = document.getElementById('clickBtn');
var clickBtn1 = document.getElementById('clickBtn1');
    window.addEventListener('click',outsideclick);
    function outsideclick(e){
    if(e.target == modal || e.target == clickBtn || e.target == clickBtn1){
        modal.style.display = 'block';
    }else{
        modal.style.display = 'none';
    }
    }

// menu-btn
$('#menu-btn').click(function(){
    $('#nav').fadeToggle(10);
});

// counter
// function counter(){
//     var count =setInterval(function(){
//         var c = parseInt($('.counter').text());
//         $('.counter').text((++c).toString());
//         if (c == 100){
//             clearInterval(count);
//         }
//     },60)
// }
// counter()
// scroll
$(window).scroll(function () {
    let positiontop = $(document).scrollTop();
    console.log(positiontop);
    // nav-bar fix
    if (positiontop > 150 ){
        $(".main-nav").addClass('position');
       }
       if (positiontop < 150 ){
        $(".main-nav").removeClass('position');
       }
    // home
    if (positiontop > 0 && positiontop < 600){
        // $("#div-a").addClass('animated slideInUp');
        $(".nv1").addClass('nav-color');
       }
       if (positiontop > 600 || positiontop < 0){
           $(".nv1").removeClass('nav-color');
       }
    //    about
    if (positiontop > 600 && positiontop < 1400){
        // $("#div4").addClass('animated slideInUp');
        $(".nv2").addClass('nav-color');
       }
       if (positiontop > 1400 || positiontop < 600){
           $(".nv2").removeClass('nav-color');
       }
    //    skill
     if (positiontop > 1400 && positiontop < 2900){
    //  $("#div5a,#div5b").addClass('animated slideInUp');
     $(".nv3").addClass('nav-color');
    }
    if (positiontop > 2900 || positiontop < 1400){
        $(".nv3").removeClass('nav-color');
    }
    // projects
    if (positiontop > 2900 && positiontop < 4300){
        // $("#div7").addClass('animated slideInUp');
        $(".nv4").addClass('nav-color');
       }
       if (positiontop > 4300 || positiontop < 2900){
           $(".nv4").removeClass('nav-color');
       }
    //blog
    if (positiontop > 4300 && positiontop < 5100){
        // $("#div8").addClass('animated slideInUp');
        $(".nv5").addClass('nav-color');
       }
       if (positiontop > 5100 || positiontop < 4300){
           $(".nv5").removeClass('nav-color');
       }
    //    contact
    if (positiontop > 5100 && positiontop < 6376){
        // $("#div10b").addClass('animated slideInUp');
        $(".nv6").addClass('nav-color');
       }
       if (positiontop > 6376 || positiontop < 5100){
           $(".nv6").removeClass('nav-color');
       }
 });