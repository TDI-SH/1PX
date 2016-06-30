(function studio()
{
    console.log('studio.js start');    
    
    var studioRight=document.querySelector('.studio__right');   
    var cardDetails=document.querySelector('.studio__card__details');
    
    var btnOurWorks=document.querySelector('.studio__intro__ourworks');
    var btnLeft=document.querySelector('.studio__btnLeft');
    var btnCloseDetail=document.querySelector('.studio__card__detail__btnClose');     
    
    var studioIntro=document.querySelector('.studio>.studio__left');
    var studioOurWorks=document.querySelector('.studio__ourworks');
    
    addClickEvent(btnLeft,leaveOurWorks);
    addClickEvent(btnOurWorks,enterOurWorks);
    addClickEvent(btnCloseDetail,closeCardDetails);
    studioRight.addEventListener('mouseover',handleOverCards,false);
    studioRight.addEventListener('mouseout',handleOutCards,false);
    studioRight.addEventListener('click',handleClickCards,false);
    window.addEventListener('resize',handleResize,false);
    
    handleResize(null);
    
    function enterOurWorks(e)
    {        
        //e.preventDefault();
        TweenLite.to(studioIntro,0.5,{alpha:0});
        
        studioOurWorks.style.display='block';
        TweenLite.set(studioOurWorks,{alpha:0});
        TweenLite.to(studioOurWorks,0.5,{alpha:1});                
    }
    
    function leaveOurWorks(e)
    {
        e.preventDefault();
        TweenLite.set(studioIntro,{alpha:0});
        TweenLite.to(studioIntro,0.5,{alpha:1});       
        
        TweenLite.to(studioOurWorks,0.5,{alpha:0,onComplete:function(){studioOurWorks.style.display='none';closeCardDetails(null)}});        
    }
    
    var lastCardWidth=-1;
    var isMobile;
    function handleResize(e)
    {
        if(e!==null)
            e.preventDefault();        
        var windowWidth=window.innerWidth;
        if(windowWidth<480)
            isMobile=true;
        else
            isMobile=false;
        if(windowWidth<960)
            windowWidth=960;
        var studioCardWidth=windowWidth*0.68*0.5-10;
        if(studioCardWidth!==lastCardWidth&&!isMobile)
        {
            var cards=document.querySelectorAll('.studio__card');
            var num=cards.length;           
            for(var i=0;i<num;i++)
            {
                var card=cards[i];
                card.style.width=card.style.height=studioCardWidth+'px';
            } 
            lastCardWidth=studioCardWidth;       
        }        
    }
    
    function handleOverCards(e)
    {
        e.preventDefault();
        var target=e.target;
        if(target.classList.contains('studio__card'))
        {
             var card=target;
             var cardOver=card.querySelector('.studio__card_over');
             cardOver.classList.add('studio__card_over_show');         
        }       
    }
    
    function handleOutCards(e)
    {
        e.preventDefault();
        var target=e.target;
        if(target.classList.contains('studio__card'))
        {
             var card=target;
             var cardOver=card.querySelector('.studio__card_over');
             cardOver.classList.remove('studio__card_over_show');         
        }       
    }
    
    function handleClickCards(e)
    {
        e.preventDefault();
        var target=e.target;
        if(target.classList.contains('studio__card'))
        {             
             var card=target;
             var cards=card.parentNode.querySelectorAll('.studio__card');
             var index=Array.prototype.indexOf.call(cards, card);//获得子div在父div中的索引
             
             cardDetails.style.display='block';
             
             var cardDetail=document.querySelectorAll('.studio__card__detail')[index];
                 cardDetail.style.display='block';
             
              
             if(isMobile)//弹出窗口时，禁止页面滚动
                document.body.classList.add('noscroll');               
        }
    }
    
    function closeCardDetails(e)
    {
        if(e!==null)
            e.preventDefault();
        cardDetails.style.display='none';
        
        Array.prototype.forEach.call(document.querySelectorAll('.studio__card__detail'), function(el, i){
            el.style.display='none';
        });
        
        
        document.body.classList.remove('noscroll');      
    }
    
    
    
    function addClickEvent(dom,handler)
    {
        dom.addEventListener('click',handler,false);
        dom.addEventListener('touchend',handler,false);        
    }
    
    
     
     
                 
})();