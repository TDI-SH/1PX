(function about()
{
    console.log('about.js start');
    
    var btnLeft=document.querySelector('.about__btnLeft');
    var btnRight=document.querySelector('.about__btnRight');
    var btnReadMores=document.querySelectorAll('.about__card__content__btnReadMore');
    
    var cards=document.querySelectorAll('.about__card');    
    var cardsContainer=document.querySelector('.about__cards');    
    var cardsWrapper=document.querySelector('.about__cards__wrapper');
    var cardImgs=document.querySelectorAll('.about__card__content__img');
    var cardHeadlines=document.querySelectorAll('.about__card__content__headline');
    
    
    var details=document.querySelectorAll('.about__detail');
    var detailsContainer=document.querySelector('.about__details');
    var detailsWrapper=document.querySelector('.about__details__wrapper');
    var btnDetailClose=document.querySelector('.about__detail__btnClose');
    
    
    
    
    
    var num=cards.length;
    var unitScale=1.15;
    var unitTime=0.4;
    var isCard=true;
    
    var unitWidthDetail;
    var unitwidth; 
    var offsetX;
    var isPc;
    var maxX;
    var id;
    
            
    handleResize(null);
    sateRightLeft(id);   
    //居中当前卡片       
    centerCard(id);
    //添加事件侦听
    window.addEventListener('resize',handleResize,false);
    
    btnLeft.addEventListener('click',handleClickLeft,false);
    btnLeft.addEventListener('touchstart',handleClickLeft,false);
    
    btnRight.addEventListener('click',handleClickRight,false);
    btnRight.addEventListener('touchstart',handleClickRight,false);
        
    cardsWrapper.addEventListener('mousewheel',handleWheel,false);
    cardsWrapper.addEventListener('DOMMouseScroll',handleWheel,false);//for firefox
    
    freezeCrads(false);
    
    for(var i=0;i<num;i++)
    {
        var btnReadMore=btnReadMores[i];
        btnReadMore.data_id=i;
        
        btnReadMore.addEventListener('click',handleClickReadMore,false);
        btnReadMore.addEventListener('touchend',handleClickReadMore,false);
    }
    
    btnDetailClose.addEventListener('click',handleClickDetailClose,false);
    btnDetailClose.addEventListener('touchstart',handleClickDetailClose,false);
    
    
     
    //让该id的卡片居中
    function centerCard(id)
    {
        var card=cards[id];
        TweenLite.set(card,{scale:unitScale});        
    }    
    //根据id的值计算cardsContainer的left的值
    function getX(id)
    {
        return (1-id)*unitwidth+offsetX;
    }
    //根据cardsContainer的left的值，计算最接近的id的值,
    function getId(x,isCeil)
    {
        var value=1-((x-offsetX)/unitwidth);   
        return isCeil?Math.ceil(value):Math.floor(value);        
    }
    //根据oldId和id切换卡片
    function switchCards(oldId,id,isTween)
    {
        if(id!==oldId)
        {            
            var endX=getX(id);
            var oldCard=cards[oldId];
            var card=cards[id];
            if(isTween===undefined||isTween===true)
            {
                TweenLite.to(cardsContainer,unitTime,{left:endX,ease:'Ease.easeOut'});
                TweenLite.to(oldCard,unitTime,{scale:1,ease:'Back.easeOut'});
                TweenLite.to(card,unitTime,{scale:unitScale,ease:'Back.easeOut'});                
            }
            else if(isTween===false)
            {
                TweenLite.set(cardsContainer,{left:endX});
                TweenLite.set(oldCard,{scale:1});
                TweenLite.set(card,{scale:unitScale});                
            }              
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
    
    function swicthDetails(oldId,id)
    {
        
        if(oldId!=id)
        {
            var endLeft=-id*unitWidthDetail;
            TweenLite.to(detailsContainer,unitTime,{left:endLeft});            
        }        
    }
    
    function sateRightLeft(id)
    {
        if(id==0)
        {
            btnRight.style.display='none';
            btnLeft.style.display='block';
        }        
        else if(id==num-1)
        {
            btnLeft.style.display='none';
            btnRight.style.display='block';
        }
        else
        {
            btnLeft.style.display='block';
            btnRight.style.display='block';
        }  
    }
    
    function handleResize(e)
    {
        console.log('resize');
                
        var windowWidth=window.innerWidth;
        var windowHeight=window.innerHeight;
        
        if(windowWidth<480)
        {
            isPC=false;
            
            unitWidthDetail=windowWidth*0.805;
            unitwidth=windowWidth;
            offsetX=-(1-0.15)*windowWidth;
            maxX=0.15*windowWidth;      
            id=0;            
            
            cardsContainer.style.left=windowWidth*0.15+'px';
            
            setFontSize(cardsContainer,unitwidth);
            setFontSize(detailsContainer,unitWidthDetail);
        }
        else
        {
            isPC=true;    
            
            unitWidthDetail=windowWidth*0.66*0.83;
            unitwidth=windowWidth*0.66*0.83*0.35;
            offsetX=0;
            maxX=unitwidth;
            
            setFontSize(cardsContainer,unitwidth);
            setFontSize(detailsContainer,unitWidthDetail);
            
            if(id===undefined)
            {
                id=1;
            }          
        }
               
        
        betweenDo(0.19*windowHeight,0.1*windowWidth,function(){addClass(cardImgs,'about__card__content__img_byHeight')},function(){removeClass(cardImgs,'about__card__content__img_byHeight')})
        betweenDo(0.02*windowHeight,0.01*windowWidth,function(){addClass(cardHeadlines,'about__card__content__headline_byHeight')},function(){removeClass(cardHeadlines,'about__card__content__headline_byHeight')});
        betweenDo(0.05*windowHeight,0.03*windowWidth,function(){addClass(btnReadMores,'bout__card__content__btnReadMoreb_byHeight')},function(){removeClass(btnReadMores,'bout__card__content__btnReadMoreb_byHeight')});    
          
    }
    
    function setFontSize(dom,size)
    {
        dom.style.fontSize=size+'px';
    }
    
    function handleClickReadMore(e)
    {
        console.log('click readMore');
        
        isCard=false;
        freezeCrads();
        
        var btnReadMore=e.target;
        var wantId=btnReadMore.data_id;
        var delay=wantId===id?0:unitTime;
        
        switchCards(id,wantId);        
        id=wantId;  
        
        var wantLeft=-wantId*unitWidthDetail;        
        TweenLite.set(detailsContainer,{delay:delay,left:wantLeft});        
        TweenLite.set(detailsWrapper,{delay:delay,display:'block',alpha:0,scale:0.8});
        TweenLite.to(detailsWrapper,unitTime,{delay:delay,alpha:1,scale:1,ease:'Back.easeOut'});       
    }
    
    function handleClickDetailClose(e)
    {
        console.log('click detailClose');
        
        isCard=true;
        freezeCrads(false);
        
        TweenLite.to(detailsWrapper,unitTime,{alpha:0,scale:0.8,ease:'Back.easeIn',onComplete:displayNoneObj,onCompleteParams:[detailsWrapper]});        
    }
    
    function displayNoneObj(obj)
    {
        obj.style.display='none';
    }
    
    
    function handleClickLeft(e)
    {
        console.log('left click');      
        
        e.preventDefault();
        var oldId=id;
        id++;
        if(id>=num)
            id=num-1;
        
        if(isCard)   
            switchCards(oldId,id);
        else
        {
            switchCards(oldId,id,false);
            swicthDetails(oldId,id);            
        }
        
        sateRightLeft(id);
    }
    
    function handleClickRight(e)
    {
        console.log('right click');
        
        e.preventDefault();
        var oldId=id;
        id--;
        if(id<0)
            id=0;
            
        if(isCard)
            switchCards(oldId,id);
        else
        {
            switchCards(oldId,id,false);
            swicthDetails(oldId,id);          
        }
        
        sateRightLeft(id);
    }
    
    var minX=getX(num-1);
    function moveCrads(deltaX)
    {
        var oldLeft=getComputedStyle(cardsContainer).getPropertyValue('left');
        var oldX=parseInt(oldLeft.substring(0,oldLeft.length-2));
        
        var endX=oldX+deltaX;
                
        if(endX<minX)
            endX=minX;
        else if(endX>maxX)
            endX=maxX;
                    
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
        
        sateRightLeft(id);      
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
        //console.log('mouse down',e.target);
        
        if(e.type=='mousedown')
            e.preventDefault();
                    
        isDown=true;
        lastX=getPosition(e).x;   
    }
    
    function handleMove(e)
    {
        if(e.type=='mousemove')
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
        //console.log('mouseup',e.target);
        
        if(e.type=='mouseup')            
            e.preventDefault();
                   
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
    
    function freezeCrads(freeze)
    {
        if(freeze===undefined||freeze===true)
        {
            document.removeEventListener('touchstart',handleDown,false);
            document.removeEventListener('touchmove',handleMove,false);
            document.removeEventListener('touchend',handleUp,false);
            document.removeEventListener('mousedown',handleDown,false);
            document.removeEventListener('mousemove',handleMove,false);
            document.removeEventListener('mouseup',handleUp,false);                         
        }
        else if(freeze===false)
        {
            document.addEventListener('touchstart',handleDown,false);
            document.addEventListener('touchmove',handleMove,false);
            document.addEventListener('touchend',handleUp,false);
            document.addEventListener('mousedown',handleDown,false);
            document.addEventListener('mousemove',handleMove,false);
            document.addEventListener('mouseup',handleUp,false);                        
        }       
    }
    
    function addClass(doms,className)
    {
        var len=doms.length;
        for(var i=0;i<len;i++)
        {
            var dom=doms[i];
            dom.classList.add(className);            
        }
    }
    
    function removeClass(doms,className)
    {
        var len=doms.length;
        for(var i=0;i<len;i++)
        {
            var dom=doms[i];
            dom.classList.remove(className);            
        } 
    }
    
    
    function betweenDo(min,max,minHandler,maxHandler)
    {
        if(min<=max)
        {
            minHandler();
        }        
        else
        {
            maxHandler();
        }
    }
   
})();