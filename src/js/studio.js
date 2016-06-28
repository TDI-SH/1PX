(function studio()
{
    console.log('studio.js start');    
    
    var studioCards=document.querySelectorAll('.studio__card');
    var studioCardOvers=document.querySelectorAll('.studio__card_over');
    var num=studioCards.length;
    var btnOurWorks=document.querySelector('.studio__intro__ourworks');
    var btnLeft=document.querySelector('.studio__btnLeft');
    var studioIntro=document.querySelector('.studio>.studio__left');
    var studioOurWorks=document.querySelector('.studio__ourworks'); 
    
    addClickEvent(btnLeft,leaveOurWorks);
    addClickEvent(btnOurWorks,enterOurWorks);
    window.addEventListener('resize',handleResize,false);
    
    
    handleResize(null)
    
    
    function handleResize(e)
    {
        var studioCardWidth=getComputedStyle(studioCards[0]).width;
        var studioCardOverWidth=getComputedStyle(studioCardOvers[0]).width;
        for(var i=0;i<num;i++)
        {
            studioCards[i].style.height=studioCardWidth;
            //studioCardOvers[i].style.height=studioCardOverWidth;
        }               
    }
    
    function enterOurWorks(e)
    {
        TweenLite.to(studioIntro,0.5,{alpha:0,left:'-32%'});
        
        studioOurWorks.style.display='block';
        TweenLite.set(studioOurWorks,{alpha:0});
        TweenLite.to(studioOurWorks,0.5,{alpha:1});                
    }
    
    function leaveOurWorks(e)
    {
        TweenLite.set(studioIntro,{alpha:0});
        TweenLite.to(studioIntro,0.5,{alpha:1});       
        
        TweenLite.to(studioOurWorks,0.5,{alpha:0,onComplete:function(){studioOurWorks.style.display='none';}});        
    }
    
    function addClickEvent(dom,handler)
    {
        dom.addEventListener('click',handler,false);
        dom.addEventListener('touchstart',handler,false);        
    }
    
    
     
     
                 
})();