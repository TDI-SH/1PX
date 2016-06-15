(function home()
{
    var moveInterval;
    function iconInit(){
        $('.icon').each(function(index,item){
            $(this).click(function(event) {
                if($('.city-pop').eq(index).css('display')=='none'){
                    $('.city-pop').hide();
                    $('.city-pop').eq(index).fadeIn();
                }else{
                     $('.city-pop').hide();
                }
            });
        })
        $('.city-pop').each(function(index,item){
            $(this).mouseleave(function(event) {
                $('.city-pop').fadeOut();
            });
        })
        resize();
        moveAuto();
        mouseSet();
    }

    function resize(){
        var winHeight = $(window).height();
        var winWidth = $(window).width();
        var menuHeight = $('.header').height();
        var contHeight = $('.home').height();

        if(winWidth>480){
            var _sx=winWidth/1280;
            var _sy=winHeight/1080;
            var _smax=(_sx<=_sy)?_sx:_sy;
            $('.home').css({
                '-webkit-transform-origin':'50% 0',
                '-ms-transform-origin':'50% 0',
                'transform-origin':'50% 0',
                '-webkit-transform':'scale('+_smax+')',
                '-ms-transform': 'scale('+_smax+')',
                'transform': 'scale('+_smax+')'
            })
            contHeight = contHeight*_smax;
        }
        
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


    function mapMove(ev){
        var moveX = 0;
        if(ev){
            moveX = parseInt(ev.deltaX/20);
        }else{
            moveX -=1;
        }
        startX_1 = parseInt(moveId_1.style.left);
        startX_2 = parseInt(moveId_2.style.left);
        

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
    }
    
    function moveAuto(){
        moveInterval = self.setInterval(function(){
            mapMove();
        },30);
    }
    
    function mouseSet(){
        mapId.addEventListener('mouseenter',function(){
            earthReset();
        },false);

        mapId.addEventListener('mouseleave',function(){
            moveInterval = null;
            moveAuto();
        },false);

        function earthReset(){
            moveId_2.style.opacity = 1;
            moveId_1.style.opacity = 1;
            window.clearInterval(moveInterval);
            var map1_l = parseInt(moveId_1.style.left);
            var map2_l = parseInt(moveId_2.style.left);
            console.log(map1_l,map2_l);
            if(map1_l<=0&&map1_l>=-1551){
                moveId_2.style.opacity = 0;
                TweenLite.to(moveId_1,1,{left:-750,ease:'Cubic.easeOut'});
                TweenLite.to(moveId_2,1,{left:801,ease:'Cubic.easeOut',onComplete:function(){
                    moveId_2.style.opacity = 1;
                }});
            }
            if(map2_l<=0&&map2_l>=-1551){
                moveId_1.style.opacity = 0;
                TweenLite.to(moveId_2,1,{left:-750,ease:'Cubic.easeOut'});
                TweenLite.to(moveId_1,1,{left:801,ease:'Cubic.easeOut',onComplete:function(){
                    moveId_1.style.opacity = 1;
                }});
            }
        }
    }
    

    var hammertime = new Hammer(mapId);


    hammertime.on('pan', function(ev) {
        mapMove(ev);
    });

    var planetId_1 = document.getElementById('planet_1');
    var planetId_2 = document.getElementById('planet_2');
    var planetId_3 = document.getElementById('planet_3');
    var maxl = document.body.clientWidth;
    var planetData = [
        {'id':planetId_1,'width':100,'height':126,'left':260,'time_1':4,'time_2':5,'orw':50,'orh':63},
        {'id':planetId_2,'width':100,'height':74,'left':856,'time_1':4,'time_2':5,'orw':66,'orh':49},
        {'id':planetId_3,'width':100,'height':74,'left':856,'time_1':4,'time_2':5,'orw':66,'orh':49}
    ]
    function planetAni1(){
        TweenLite.fromTo(planetId_1,3,{'left':(1280-maxl)/2-25,'width':50,'height':63},{'left':260,ease:'Cubic.easeIn',onComplete:function(){
            TweenLite.to(planetId_1,4,{'left':maxl,'width':100,'height':126,ease:'Cubic.easeOut',onComplete:function(){
                planetAni1();
            }})
        }})
    }
    function planetAni3(){
        TweenLite.fromTo(planetId_3,4,{'left':856,'width':100,'height':74},{'left':maxl,'width':0,'height':0,ease:'Cubic.easeOut',onComplete:function(){
            TweenLite.fromTo(planetId_3,5,{'left':(1280-maxl)/2-66,'width':66,'height':49},{'left':856,'width':100,'height':74,ease:'Cubic.easeOut',onComplete:function(){
                planetAni3();
            }})
        }})
    }

    $(window).resize(function(event) {
        resize();
    });
    iconInit();
    planetAni3();
    planetAni1();
})();