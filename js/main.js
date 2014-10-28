jQuery(function($){
    var imgMan = {
        init:function(){            
            imgMan.scrollEvent();
            imgMan.startEvent();
            imgMan.resetEvent();
        },
        startEvent:function(){
            $("#startBtn").on({
                click:function(){
                    imgMan.animateImgs(180);
                }
            });
        },
        resetEvent:function(){
            $("#resetBtn").on({
                click:function(){
                    $("#img2, #img3").hide();
                }
            });
        },
        animateImgs:function(d){
            var $el = $('#img2');

            $el.show(500);
            $({degree: 0}).animate({degree: d}, {
                duration: 5000,
                step: function(now) {
                    $el.css({
                        transform: 'rotate(' + now + 'deg)'
                    });
                },
                complete: function(){
                    $("#img3").show(500);
                }
            });
        },
        scrollEvent:function(){
            var lastScrollPos = 0;
            $(window).on({
                scroll:function(e){
                    var st= $(this).scrollTop();
                    if(st > lastScrollPos){ //downscroll
                        imgMan.resizeImgs.call(this,"decrease");
                    }else{ //upscroll
                        imgMan.resizeImgs.call(this,"increase");
                    }
                    lastScrollPos = st;
                }
            });
        },
        resizeImgs:function(){
            var w = $("#imgContainer").width();
            var h = $("#imgContainer").height();
            
            if(arguments[0] == "decrease"){
                $("#imgContainer").css({
                    width: w-10,
                    height: h-5
                });
            }else{
                $("#imgContainer").css({
                    width: w+10,
                    height: h+5
                });
            }
        }
    }
    imgMan.init();
});
