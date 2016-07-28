(function(){
	console.log('service');

	
	

    function init(){
    	var departHoverId = $('#department section')
		departHoverId.each(function(index,item){
			$(this).bind('click mouseover',function(){
				departHoverId.removeClass('hover');
				$(this).addClass('hover');
			})
		})

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

		var allw = winWidth, allh = winHeight-78
		if(winWidth>480){
			$('#department').css({
		    	'width':allw,
		    	'height':allh
		    })


		    $('#department section').css({
		    	'width':allw/2,
		    	'height':allh/2
		    })
		}else{
			$('#department').css({
		    	'width':allw,
		    	'height':'auto'
		    })

		    $('#department section').css({
		    	'width':'100vw',
		    	'height':'75vw'
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