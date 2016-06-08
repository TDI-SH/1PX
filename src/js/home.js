(function home()
{
    function iconInit(){
        $('.icon').each(function(index,item){
            $(this).click(function(event) {
                if($('.city-pop').eq(index).css('display')=='none'){
                    $('.city-pop').hide();
                    $('.city-pop').eq(index).fadeIn();
                }else{
                    $('.city-pop').fadeOut();
                }
            });
        })
        resize();
    }

    function resize(){
        var winHeight = $(window).height();
        var menuHeight = $('.header').height();
        var contHeight = $('.home').height();
        var topN = winHeight-contHeight-menuHeight;
        if(topN<=0){
            $('.home').css({'top':menuHeight})
        }else{
            $('.home').css({'top':topN/2+menuHeight})
        }
    }

    var mapId = document.getElementById('home-map');
    var moveId_1 = document.getElementById('move-1');
    var moveId_2 = document.getElementById('move-2');
    var isResizel = isResizer = false;
    var startX_1,startX_2;

    moveId_1.style.left = '-750px';
    moveId_2.style.left = '801px';

    var hammertime = new Hammer(mapId);

    hammertime.on('pan', function(ev) {
        startX_1 = parseInt(moveId_1.style.left);
        startX_2 = parseInt(moveId_2.style.left);
        var moveX = parseInt(ev.deltaX/20);

        if(moveX<0){
            if(startX_1<=-750){
                if(!isResizel){
                    moveId_2.style.left = 1551-Math.abs(parseInt(moveId_1.style.left))+'px';
                    isResizel = !isResizel
                }
                startX_1 = parseInt(moveId_1.style.left);
                moveId_1.style.left = startX_1+moveX+'px';
                startX_2 = parseInt(moveId_2.style.left);
                moveId_2.style.left = startX_2+moveX+'px';
            }else{
                startX_1 = parseInt(moveId_1.style.left);
                moveId_1.style.left = startX_1+moveX+'px';
                startX_2 = parseInt(moveId_2.style.left);
                moveId_2.style.left = startX_2+moveX+'px';
            }
            if(startX_2<=-750){
                if(isResizel){
                    moveId_1.style.left = 1551-Math.abs(parseInt(moveId_2.style.left))+'px';
                    isResizel = !isResizel
                }
                startX_2 = parseInt(moveId_2.style.left);
                moveId_2.style.left = startX_2+moveX+'px';
                startX_1 = parseInt(moveId_1.style.left);
                moveId_1.style.left = startX_1+moveX+'px';
            }else{
                startX_2 = parseInt(moveId_2.style.left);
                moveId_2.style.left = startX_2+moveX+'px';
                startX_1 = parseInt(moveId_1.style.left);
                moveId_1.style.left = startX_1+moveX+'px';
            }
        }



        if(moveX>0){
            if(startX_1>=0){
                if(!isResizer){
                    moveId_2.style.left = Math.abs(parseInt(moveId_1.style.left))-1551+'px';
                    isResizer = !isResizer
                }
                startX_1 = parseInt(moveId_1.style.left);
                moveId_1.style.left = startX_1+moveX+'px';
                startX_2 = parseInt(moveId_2.style.left);
                moveId_2.style.left = startX_2+moveX+'px';
            }else{
                startX_1 = parseInt(moveId_1.style.left);
                moveId_1.style.left = startX_1+moveX+'px';
                startX_2 = parseInt(moveId_2.style.left);
                moveId_2.style.left = startX_2+moveX+'px';
            }
            if(startX_2>=0){
                if(isResizer){
                    moveId_1.style.left = Math.abs(parseInt(moveId_2.style.left))-1551+'px';
                    isResizer = !isResizer
                }
                startX_2 = parseInt(moveId_2.style.left);
                moveId_2.style.left = startX_2+moveX+'px';
                startX_1 = parseInt(moveId_1.style.left);
                moveId_1.style.left = startX_1+moveX+'px';
            }else{
                startX_2 = parseInt(moveId_2.style.left);
                moveId_2.style.left = startX_2+moveX+'px';
                startX_1 = parseInt(moveId_1.style.left);
                moveId_1.style.left = startX_1+moveX+'px';
            }
        }
    });


    $(window).resize(function(event) {
        resize();
    });
    iconInit();
})();