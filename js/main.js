jQuery(function($){
    var imgMan = {
        init:function(){            
            imgMan.scrollEvent();
            imgMan.startEvent();
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
                    $("#resetBtn").unbind();
                }
            });
        },
        animateImgs:function(d){
            var $el = $('#img2');
            $({degree: 0}).animate({degree: d}, {
                duration: 5000,
                start: function(){
                    $el.show(500);
                },
                step: function(now) {
                    $el.css({
                        transform: 'rotate(' + now + 'deg)'
                    });
                },
                complete: function(){
                    $("#img3").show(500);
                    imgMan.resetEvent();
                }
            });
        },
        scrollEvent:function(){
            var lastScrollPos = 0;
            var maxWidth = $("#imgContainer").width();
            var minWidth = maxWidth * .5;

            $(window).on({
                scroll:function(e){
                    var st= $(this).scrollTop();
                    var currWidth = $("#imgContainer").width();
                    
                    if(st > lastScrollPos && currWidth > minWidth){ //downscroll
                        imgMan.resizeImgs.call(this,"decrease");
                    }else if(st < lastScrollPos && currWidth < maxWidth){ //upscroll
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
                    width: w-15,
                    height: h-7
                });
            }else{
                $("#imgContainer").css({
                    width: w+15,
                    height: h+7
                });
            }
        }
    }
    imgMan.init();
});
