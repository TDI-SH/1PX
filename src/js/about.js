(function about()
{
    console.log('about.js start');
    
    var btnLeft=document.querySelector('.about__btnLeft');
    var btnRight=document.querySelector('.about__btnRight');
    
    var cards=document.querySelectorAll('.about__card');
    var num=cards.length;
    
    var cardsContainer=document.querySelector('.about__cards');
    //当前居中的卡片的id
    var id=1;
    centerCard(id);
    
    //添加事件侦听
    btnLeft.addEventListener('click',handleClickLeft,false);
    btnRight.addEventListener('click',handleClickRight,false);
    //添加滚轮事件侦听器
    document.addEventListener('mousewheel',handleWheel,false);
    window.addEventListener('DOMMouseScroll',handleWheel,false);//for firefox
    
    //让该id的卡片居中
    function centerCard(id)
    {
        var card=cards[id];
        TweenLite.set(card,{scale:1.15});        
    }
    //让该id的卡片非居中
    function unCenterCard(id) 
    {
        var card=cards[id];        
        TweenLite.set(card,{scale:1});        
    }
    //根据id的值计算cardsContainer的left的值
    function getX(id)
    {
        var delta=370;
        return -(id-1)*delta;
    }
    //根据oldId和id切换卡片
    function switchCards(oldId,id)
    {
        if(id!==oldId)
        {
            var endX=getX(id);
            var oldCard=cards[oldId];
            var card=cards[id];
            TweenLite.to(cardsContainer,0.4,{left:endX,ease:'Ease.easeOut'});
            TweenLite.to(oldCard,0.4,{scale:1,ease:'Back.easeOut'});
            TweenLite.to(card,0.4,{scale:1.15,ease:'Back.easeOut'});        
        }        
    }  
    
    function handleClickLeft(e)
    {
        e.preventDefault();
        var oldId=id;
        id++;
        if(id>=num)
            id=num-1; 
        switchCards(oldId,id);                              
    }
    
    function handleClickRight(e)
    {
        e.preventDefault();
        var oldId=id;
        id--;
        if(id<0)
            id=0;
        switchCards(oldId,id);
    }
    
    var minX=getX(num-1);
    function handleWheel(e)
    {
        e.preventDefault();
        console.log(e.wheelDelta,e.delta);
        var delta=(e.wheelDelta/3)||(-e.detail*6);
        
        var oldLeft=getComputedStyle(cardsContainer).getPropertyValue('left');
        var oldX=parseInt(oldLeft.substring(0,oldLeft.length-2));
        
        var endX=oldX+delta;
                
        if(endX<minX)
            endX=minX;
        else if(endX>0)
            endX=0;
                    
        TweenLite.set(cardsContainer,{left:endX})
        
        
        
        console.log(e.wheelDelta,e.detail);
        
        
    }
    
      
    
    
})();