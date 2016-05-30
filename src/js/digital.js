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
var copyRight=parseInt($(".bottomNav__itemCopy").css('right'));
var arrowRight=parseInt($(".bottomNav__itemArrow").css('right'));
var step=52;
var pictureBefore;
var isRedirected=false;
if(width<=1024){
	step=33;
}
var copys=["Taiwan Spring <br/>Fashion Campaign","HongKong Spring <br/>Fashion Campaign","Korea Spring <br/>Fashion Campaign","Japan Spring <br/>Fashion Campaign"]
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
	if(isRedirected==false){
		$(".content__bg1").animate({'left':a[0]},1500);
		$(".content__bg2").animate({'left':a[1]},1500);
		$(".content__bg3").animate({'left':a[2]},1500);
		$(".content__bg4").animate({'left':a[3]},1500);
		$(".bottomNav__itemCircle div").removeClass('active');
		$(".bottomNav__itemCircle").children().eq(currentPot-1).addClass('active');
		changeCopy(currentPot);
		$(".bottomNav__itemArrow").css({'right':arrowRight-(currentPot-1)*step});
	}
	isRedirected=false;


},7000);
	 

$(function(){
	$(".coverBtn").each(function(index,item){
		$(this).click(function(){
			isRedirected=true;
			pictureBefore=currentPot;
			currentPot=index+1;
			$(".circle").removeClass('active');
			$(".bottomNav__itemCircle").children().eq(currentPot-1).addClass('active');
			changeCopy(currentPot);
			$(".bottomNav__itemArrow").css({'right':arrowRight-(currentPot-1)*step});
			
			modifyBgPosition(currentPot,width);
			
		})
	})
});

	
window.addEventListener("resize", function(){
	
	width=$(window).width();
	step=52;
	if(width<=1024){
		step=33;
		copyRight=50;
		arrowRight=93;
		console.log("qqqq");
	}else{
		copyRight=106;
		arrowRight=145;
	}
	
	console.log(copyRight);
	modifyBgPosition(currentPot,width);
});	
	
	
	
	
	
	
	
	
	
	
	
	
	
//函数***************************************************************************************************************************************************************		
	
function changeCopy(index){
	$(".bottomNav__itemCopy").css({'right':copyRight-(index-1)*step});
	$(".bottomNav__itemCopy").html(copys[index-1]);
}
		
		
function modifyBgPosition(currentPot,windowWidth){
	switch(currentPot){
		case 1:
			a=[0,windowWidth,-2*windowWidth,-1*windowWidth];	
			break;
		case 2:
			a=[-1*windowWidth,0,windowWidth,-2*windowWidth];	
			break;
		case 3:
			a=[-2*windowWidth,-1*windowWidth,0,windowWidth];
			break;
		case 4:
			a=[windowWidth,-2*windowWidth,-1*windowWidth,0];
			break;
	}
	$(".content__bg1").stop(true,true);
	$(".content__bg2").stop(true,true);
	$(".content__bg3").stop(true,true);
	$(".content__bg4").stop(true,true);
	$("[class^=content__bg]").show();
	$(".content__bg1").css({'left':a[0]});
	$(".content__bg2").css({'left':a[1]});
	$(".content__bg3").css({'left':a[2]});
	$(".content__bg4").css({'left':a[3]});
}	
	
	
	
	
	
	
});
