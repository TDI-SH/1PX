(function contact()
{
    var _smax;
    function resize(){
        var winHeight = $(window).height();
        var winWidth = $(window).width();
        var menuHeight = $('.header').height();
        var contHeight = $('#contactus').height();
        var _contact = $('#contactus');
        var _bgPic = $('#contact-bg');
        var _iconl = $('#icon-location');
        var _iconp = $('#icon-phone');
        var _iconm = $('#icon-mail');
        var _iconb = $('#icon-btn');
        
        if(winWidth>480){
            var _sx=winWidth/1280;
            var _sy=winHeight/733;
            console.log(_sx,_sy)
            _smax=(_sx>=_sy)?_sx:_sy;

            $('html,body').css({'font-size':_smax*10})
            _contact.css({
                'width':winWidth,
                'height':winHeight-78
            });


            _bgPic.css({
                'width':1280*_smax,
                'height':655*_smax,
                'margin-top':-327.5*_smax,
                'margin-left':-640*_smax
            })
            _iconl.css({
                'width':22*_smax,
                'height':31*_smax
            })
            _iconp.css({
                'width':30*_smax,
                'height':30*_smax
            })
            _iconm.css({
                'width':30*_smax,
                'height':19*_smax
            })
            _iconb.css({
                'width':139*_smax,
                'height':37*_smax
            })

        }
    }

    resize();

    $(window).resize(function(event) {
        resize();
    });
})();