$(function(){
////////////////start////////////////



$("#myWeb").fullpage({
    anchors:['m01', 'm02', 'm03', 'm04', 'm05', 'm07','m08','m09'],
	//navigation: true,
    afterLoad: function(origin, destination, direction){
        //console.log(destination.index);
        var idx=destination.index;
        $(".section").eq(idx).addClass("on").siblings().removeClass("on");
        $("nav li").eq(idx).addClass("on").siblings().removeClass("on");
    },
});



//포플동영상제어
$("#portpolio01").YTPlayer({
    containment:'.portpolio01',
    autoPlay:true, 
    mute:true, 
    showControls:false,
    playOnlyIfVisible:true,
    optimizeDisplay:false,
});

$(".m02 .xi-play").on("click", function(){
    $("#portpolio01").YTPPlay();
});

$(".m02 .xi-pause").on("click", function(){
    $("#portpolio01").YTPPause();
});


//포폴 동영상제어
$("#portpolio02").YTPlayer({
    containment:'.portpolio02',
    autoPlay:true, 
    mute:true, 
    showControls:false,
    playOnlyIfVisible:true,
    optimizeDisplay:false,
});

$(".m03 .xi-play").on("click", function(){
    $("#portpolio02").YTPPlay();
});

$(".m03 .xi-pause").on("click", function(){
    $("#portpolio02").YTPPause();
});

//포플동영상제어
$("#portpolio03").YTPlayer({
    containment:'.portpolio03',
    autoPlay:true, 
    mute:true, 
    showControls:false,
    playOnlyIfVisible:true,
    optimizeDisplay:false,
});

$(".m04 .xi-play").on("click", function(){
    $("#portpolio03").YTPPlay();
});

$(".m04 .xi-pause").on("click", function(){
    $("#portpolio03").YTPPause();
});

//포플동영상제어
$("#portpolio04").YTPlayer({
    containment:'.portpolio04',
    autoPlay:true, 
    mute:true,
    showControls:false,
    playOnlyIfVisible:true,
    optimizeDisplay:false,
});

$(".m05 .xi-play").on("click", function(){
    $("#portpolio04").YTPPlay();
});

$(".m05 .xi-pause").on("click", function(){
    $("#portpolio04").YTPPause();
});





//photo_slider
$(".photo_slider").slick({
    arrows:false,
    dots:true,
    slidesToShow: 3,
    autoPlay:4000,
});
$(".m07 i.xi-angle-left-thin").on("click",function(){
    $(".photo_slider").slick("slickPrev");
})

$(".m07 i.xi-angle-right-thin").on("click",function(){
    $(".photo_slider").slick("slickNext");
})

//full open
$("#header i").on("click",function(){
    $("#full").addClass("on")
})

$("#full i,#full a").on("click",function(){
    $("#full").removeClass("on")
})
////////////////end///////////////
});