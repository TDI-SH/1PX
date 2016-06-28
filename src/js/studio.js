(function studio()
{
    console.log('studio.js start');    
    
    var studioCards=document.querySelectorAll('.studio__card');
    var num=studioCards.length;
    var btnOurWorks=document.querySelector('.studio__intro__ourworks');
    var studioIntro=document.querySelector('.studio>.studio__left');
    var studioOurWorks=document.querySelector('.studio__ourworks'); 
    
    
    addClickEvent(btnOurWorks,enterOurWorks);
    window.addEventListener('resize',handleResize,false);
    handleResize(null)
    
    
    function handleResize(e)
    {
        var studioCardWidth=getComputedStyle(studioCards[0]).width;
        for(var i=0;i<num;i++)
        {
            var studioCard=studioCards[i].style.height=studioCardWidth;
        }               
    }
    
    function enterOurWorks(e)
    {
        console.log(studioIntro,studioOurWorks);
        TweenLite.to(studioIntro,0.5,{alpha:0,left:'-32%'});
        
        studioOurWorks.style.display='block';
        
        TweenLite.from(studioOurWorks,0.5,{alpha:0});                
    }
    
    function addClickEvent(dom,handler)
    {
        dom.addEventListener('click',handler,false);
        dom.addEventListener('touchstart',handler,false);        
    }
    
    
     
     
                 
})();