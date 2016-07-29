(function(){
	var departHoverId = $('#department section');
    function init(){
    	

		$('.section-4').click(function(){
			window.location.href='transcreation.html';
		})

		$('.section-3').click(function(){
			window.location.href='broadcast.html';
		})

		$('.section-2').click(function(){
			window.location.href='studio.html';
		})

		$('.section-1').click(function(){
			window.location.href='digital.html';
		})

	    resize();

    }
    function resize(){
    	var winHeight = $(window).height();
		var winWidth = $(window).width();
		var baseW = 640,baseH=397;
		var imgScale;

		var allw = winWidth/2, allh = (winHeight-78)/2;

		var _sx = allw/baseW;
		var _sy = allh/baseH;
		if(winWidth>480){
			$('#department').css({
		    	'width':allw*2,
		    	'height':allh*2
		    })
		    $('#department section').css({
		    	'width':allw,
		    	'height':allh
		    })

		    imgScale=(_sx>=_sy)?_sx:_sy;
		    $('#department section img').css({
		    	'width':baseW*imgScale,
		    	'height':baseH*imgScale,
		    	'margin-top':baseH*imgScale/-2,
		    	'margin-left':baseW*imgScale/-2,
		    	'top':'50%',
		    	'left':'50%'
		    })

	    	var hoverBg = $('.bgHover');
	    	var cTxt = $('.c-txt');
	    	var bgAni;

	    	var oriW = $('.bgHover').width(),oriH = $('.bgHover').height();
			departHoverId.each(function(index,item){
				$(this).bind('click mouseover',function(){

					cTxt.removeClass('txtHover');
					cTxt.eq(index).addClass('txtHover');
					departHoverId.find('img').show();
					$(this).find('img').eq(0).show();
					$(this).find('img').eq(1).hide();

					hoverBg.css({
						'width':oriW,
						'height':oriH,
						'margin-left':oriW/-2,
						'margin-top':oriH/-2
					})

					if(bgAni){
						TweenMax.killAll();
					}
					bgAni = TweenMax.to(hoverBg,0.3,{'width':oriW*1.03,ease:Linear.easeNone,onUpdate:function(){
						hoverBg.css({
							'height':hoverBg.width()/640*397,
							'margin-left':hoverBg.width()/-2,
							'margin-top':hoverBg.height()/-2
						})
					}})
				})
			})
		}else{
			$('#department').css({
		    	'width':allw*2,
		    	'height':(allw/640*397)*8
		    })

		    $('#department section').css({
		    	'width':allw*2,
		    	'height':(allw/640*397)*2
		    })

		    $('#department section img').css({
		    	'width':allw*2,
		    	'height':(allw/640*397)*2,
		    	'top':'0',
		    	'left':'0',
		    	'margin-top':'0',
		    	'margin-left':'0'
		    })
		}
    }


    init();

    $(window).resize(function(event) {
        resize();
    });
})();
window.onload=function(){
	$('#department').show();
}