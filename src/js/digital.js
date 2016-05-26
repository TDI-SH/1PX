$(document).ready(function(){
	
////image preload
//	var the_images = ["img/loading/loading_bg.jpg", 
//	"img/remind_01.gif","img/remind_bg.jpg",
//	"img/homepage/finger.png","img/homepage/gift_01.png"
//	];
//	 var imagesNum=0;
//	jQuery.imgpreload(the_images,//开始运行预加载；
//      {
//              each: function()
//              {
//                  var status = $(this).data('loaded')?'success':'error';
//                  	imagesNum++;
//                  	console.log(	imagesNum);
//                  	var width = (imagesNum/142)*125;  
//					$('.percentage').css({width:width});
//
// 					
//              },
//              all: function()
//              {
//			 		console.log(imagesNum);
//
//
//				}
//       });


$('.content__leftBtn').mouseover(function(){
	$(".content__cover").css({'left':'32%','right':'auto'});
	$(".content__cover").show();
});

$('.content__leftBtn').mouseout(function(){
	$(".content__cover").hide();
});
	
$('.content__rightBtn').mouseover(function(){
	$(".content__cover").css({'right':'32%','left':'auto'});
	$(".content__cover").show();
});

$('.content__rightBtn').mouseout(function(){
	$(".content__cover").hide();
});	

var a = new Array();
var currentPot;
var width=$(window).width();
setInterval(function(){
	width=$(window).width();
	$("[class^=content__bg]").show();
	for(var i=1;i<5;i++){
		a[i-1]=parseInt($("."+"content__bg"+i).css('left'));
		if(a[i-1]==-2*width){
			a[i-1]=width;
			$("."+"content__bg"+i).hide();
		}else{
			a[i-1]=a[i-1]-width;
		}		
		if(a[i-1]==0){
			currentPot=i;
		}
	}
	console.log(a[0]+"--"+a[1]+"--"+a[2]+"--"+a[3]);
	$(".content__bg1").animate({'left':a[0]},1500);
	$(".content__bg2").animate({'left':a[1]},1500);
	$(".content__bg3").animate({'left':a[2]},1500);
	$(".content__bg4").animate({'left':a[3]},1500,function(){

		$(".bottomNav__itemCopy").css({'right':56-(currentPot-1)*36});
		$(".bottomNav__itemArrow").css({'right':95-(currentPot-1)*36});
	});
	
	$(".bottomNav__itemCircle div").removeClass('active');
	$(".bottomNav__itemCircle").children().eq(currentPot-1).addClass('active');

},7000);
	 
//$("#circle1").click(function(){
//	$(".bottomNav__itemCircle div").removeClass();
//	$(".bottomNav__itemCircle").children().eq(0).addClass('active');
//	$(".bottomNav__itemCopy").css({'right':56});
//	$(".bottomNav__itemArrow").css({'right':95});
//	$(".content__bg1").css({'left':0});
//	$(".content__bg2").css({'left':width});
//	$(".content__bg3").css({'left':-2*width});
//	$(".content__bg4").css({'left':-1*width});
//});

$(function(){
	$(".circle").each(function(index,item){
		$(this).click(function(){
			var j=index+1;
			$(".circle").removeClass('active');
			$(this).addClass('active');
			$(".bottomNav__itemCopy").css({'right':56-index*36});
			$(".bottomNav__itemArrow").css({'right':95-index*36});
			
			switch(j){
				case 1:
					a=[0,width,-2*width,-1*width];	
					break;
				case 2:
					a=[-1*width,0,width,-2*width];	
					break;
				case 3:
					a=[-2*width,-1*width,0,width];
					break;
				case 4:
					a=[width,-2*width,-1*width,0];
					break;
			}
			
			$(".content__bg1").css({'left':a[0]});
			$(".content__bg2").css({'left':a[1]});
			$(".content__bg3").css({'left':a[2]});
			$(".content__bg4").css({'left':a[3]});
			
			
		})
	})
});

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//函数***************************************************************************************************************************************************************		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
