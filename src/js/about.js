(function about()
{
    console.log('about.js start');
    
    var btnLeft=document.querySelector('.about__btnLeft');
    var btnRight=document.querySelector('.about__btnRight');
    
    var cards=document.querySelectorAll('.about__card');    
    var cardsContainer=document.querySelector('.about__cards');
    
    var cardsWrapper=document.querySelector('.about__cards__wrapper');
    
    var num=cards.length;
    var unitwidth=370;
    var unitScale=1.15;
    var unitTime=0.4;
    //当前居中的卡片的id
    var id=1;
    centerCard(id);
    //添加事件侦听
    btnLeft.addEventListener('click',handleClickLeft,false);
    btnRight.addEventListener('click',handleClickRight,false);
        
    cardsWrapper.addEventListener('mousewheel',handleWheel,false);
    cardsWrapper.addEventListener('DOMMouseScroll',handleWheel,false);//for firefox
    
    document.addEventListener('touchstart',handleDown,false);
    document.addEventListener('touchmove',handleMove,false);
    document.addEventListener('touchend',handleUp,false);
    document.addEventListener('mousedown',handleDown,false);
    document.addEventListener('mousemove',handleMove,false);
    document.addEventListener('mouseup',handleUp,false);
     
    //让该id的卡片居中
    function centerCard(id)
    {
        var card=cards[id];
        TweenLite.set(card,{scale:unitScale});        
    }    
    //根据id的值计算cardsContainer的left的值
    function getX(id)
    {
        return (1-id)*unitwidth;
    }
    //根据cardsContainer的left的值，计算最接近的id的值,
    function getId(x,isCeil)
    {   
        var value=1-x/unitwidth;   
        return isCeil?Math.ceil(value):Math.floor(value);        
    }
    //根据oldId和id切换卡片
    function switchCards(oldId,id)
    {
        if(id!==oldId)
        {
            var endX=getX(id);
            var oldCard=cards[oldId];
            var card=cards[id];
            TweenLite.to(cardsContainer,unitTime,{left:endX,ease:'Ease.easeOut'});
            TweenLite.to(oldCard,unitTime,{scale:1,ease:'Back.easeOut'});
            TweenLite.to(card,unitTime,{scale:unitScale,ease:'Back.easeOut'});        
        }        
    }    
    //根据cardsContainer的left的值,计算编号为id的卡片的缩放值
    function scaleCard(id,x,tweenArgs)
    {
        var cardCenterX=getX(id);
        var offsetX=Math.abs(x-cardCenterX);        
        var scale=unitScale-(unitScale-1)*(offsetX/unitwidth)
        var card=cards[id];       
        if(scale<1)
            scale=1;
        if(tweenArgs.isTween)
        {
            TweenLite.to(card,tweenArgs.duration,{scale:scale});                        
        }
        else
        {
            TweenLite.set(card,{scale:scale});            
        }                                                               
    }
    
    
    function handleClickLeft(e)
    {
        console.log('left click');      
        
        e.preventDefault();
        var oldId=id;
        id++;
        if(id>=num)
            id=num-1;
            
        switchCards(oldId,id);                              
    }
    
    function handleClickRight(e)
    {
        console.log('right click');
        
        e.preventDefault();
        var oldId=id;
        id--;
        if(id<0)
            id=0;
        switchCards(oldId,id);
    }
    
    var minX=getX(num-1);
    function moveCrads(deltaX)
    {
        var oldLeft=getComputedStyle(cardsContainer).getPropertyValue('left');
        var oldX=parseInt(oldLeft.substring(0,oldLeft.length-2));
        
        var endX=oldX+deltaX;
                
        if(endX<minX)
            endX=minX;
        else if(endX>unitwidth)
            endX=unitwidth;
                    
        TweenLite.set(cardsContainer,{left:endX})     
        for(var i=0;i<num;i++)
        {
            scaleCard(i,endX,{isTween:false});                       
        }
        
        return endX;        
    }
    
    function autoMoveCards(endX,dir)
    {
        var nearestId=getId(endX,dir);
        var nearestX=getX(nearestId);               
        var duration=unitTime;
        
        id=nearestId;
        
        TweenLite.to(cardsContainer,duration,{left:nearestX,ease:'Sine.easeOut'});
        for(var i=0;i<num;i++)
        {
            scaleCard(i,nearestX,{isTween:true,duration:duration,ease:'Sine.easeOut'});                       
        }
        
    }
    
    
    var scrollEndId;
    var lastDelta;//滚轮事件检测左右
    function handleWheel(e)
    {
        e.preventDefault();        
        if(!isDown)
        {
            console.log('mouse scrolling');       
            var delta=(e.wheelDelta/3)||(-e.detail*6);                
            var endX=moveCrads(delta);
                                
            //检测滚轮事件停止
            clearTimeout(scrollEndId);
            var dir=lastDelta>0?false:true;
            scrollEndId=setTimeout
            (
                function()
                {
                    autoMoveCards(endX,dir);                
                    console.log('scroll end');                                             
                },
                35
            )
                                            
            lastDelta=delta;            
        }              
    }
    
    
    
    var isDown=false;
    var lastX;
    var endX=null;
    var dir=null;
    function handleDown(e)
    {
        e.preventDefault();
        
        console.log('mouse down');
        isDown=true;
        lastX=getPosition(e).x;   
    }
    
    function handleMove(e)
    {
        e.preventDefault();        
        if(isDown)
        {
            var nowX=getPosition(e).x;
            var offsetX=nowX-lastX;                        
            endX=moveCrads(offsetX);
            dir=offsetX>0?false:true;
            
            lastX=nowX;                               
        }       
    }
    
    function handleUp(e)
    {
        e.preventDefault(); 
       
        console.log('mouseup');
        
        if(endX!==null&&dir!==null)
        {
            autoMoveCards(endX,dir);
            endX=null;
            dir=null;            
        }        
        isDown=false;                             
    }
    
    function getPosition(e)
    {
        var posX=e.pageX||e.targetTouches[0].clientX;
        var posY=e.pageY||e.targetTouches[0].clientY; 
                
        return {x:posX,y:posY}           
    }  
    
})();