




//menu

$(function () {

 

    $("#nopen").click(function(){
        $(".menudiv").addClass("menudivs");
    });

    $(".nclose").click(function(){
        $(".menudiv").removeClass("menudivs");
    });


    $(".btt").click(function(){

        $('html, body').animate({scrollTop:0}, '5s');
    });


//form valid

    $("#sb").click(function(e){
        e.preventDefault();

        var ema = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/;
      

    
        if($(".comn").val().length<10){
            $(".cm").addClass("cms")
        }
        else{
            $(".cm").removeClass("cms")
        }


        if($(".youn").val().length<10){
            $(".yn").addClass("yns")
        }
        else{
            $(".yn").removeClass("yns")
        }

        
        if($(".mobn").val().length<10){
            $(".nu").addClass("nus")
        }
        else{
            $(".nu").removeClass("nus")
        }

        if(!ema.test($(".eml").val())){
            $(".em").addClass("ems")
        }
        else{
            $(".em").removeClass("ems")
        }


        $(".opt").each(function() {
            var seli = $(this).val();
            var m = 'Select The Service';
        
            if (seli == m) {
                $(".sele").addClass("seles");
            } else {
                $(".sele").removeClass("seles");
            }
        });


    });



//play
    $("#playclic > a").click(function (e) {
        e.preventDefault();

         $("#opacity").addClass("vedos");
         $(".pause").addClass("pauses");
         $("#pl").trigger('play');   

    });
    $(".pause > a").click(function (e) {
        e.preventDefault();

         $("#opacity").removeClass("vedos");
         $(".pause").removeClass("pauses");
         $("#pl").trigger('pause');   

    });


    $("#playclick > a").click(function (e) {
        e.preventDefault();

         $("#opacit").addClass("vdos");
         $(".pause2").addClass("pauses2");
           

    });
    $(".pause2 > a").click(function (e) {
        e.preventDefault();

         $("#opacit").removeClass("vdos");
         $(".pause2").removeClass("pauses2");
          

    });


});

//head

$(window).scroll(function(){
    
    if($(this).scrollTop()>200){
$("#hea").addClass("heads");
}
else{
$("#hea").removeClass("heads");
}
if($(this).scrollTop()>700){
    $(".btt").addClass("btts");
    }
    else{
    $(".btt").removeClass("btts");
    }
});

//scroll
window.sr = ScrollReveal({
    reset: true
});
window.sr = new ScrollReveal({
    mobile: true
});
sr.reveal('.ani,.litext,.quot,.quote,.name,.vedo2,.p7p,.p7p1,.nm,.up', {
    origin: 'bottom',
    duration: 500,
    distance: '100px',
    delay: 200,
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(.12,.69,.85,.84)',
    viewFactor: 0.2
});
sr.reveal('.prove', {
    origin: 'top',
    duration: 500,
    distance: '100px',
    delay: 200,
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(.12,.69,.85,.84)',
    viewFactor: 0.2
});
sr.reveal('.lph', {
    origin: 'top',
    duration: 500,
    distance: '200px',
    delay: 400,
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(.12,.69,.85,.84)',
    viewFactor: 0.2
});
sr.reveal('.casestudy', {
    origin: 'left',
    duration: 600,
    distance: '100px',
    delay: 100,
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(.12,.69,.85,.84)',
    viewFactor: 0.2
});
sr.reveal('.frontvedio', {
    origin: 'right',
    duration: 600,
    distance: '100px',
    delay: 100,
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(.12,.69,.85,.84)',
    viewFactor: 0.2
});
sr.reveal('.bg1,.bg2,.bg3,.bg4,.lo1,.lor,.red,.build,.cup', {
    origin: 'fade-out',
    duration: 600,
    distance: '100px',
    delay: 100,
    opacity: 0,
    scale: 0.2,
    easing: 'cubic-bezier(.12,.69,.85,.84)',
    viewFactor: 0.2
});
