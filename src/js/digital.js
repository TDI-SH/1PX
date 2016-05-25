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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//函数***************************************************************************************************************************************************************		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
