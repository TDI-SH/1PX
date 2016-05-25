(function common()
{
    console.log('common.js start');
    
    var headerHeight=78;
    
    var btnMenuOpen=document.querySelector('.menu__btnMenuOpen');
    var btnMenuClose=document.querySelector('.menu__btnMenuClose');
    var menuOpen=document.querySelector('.menu__open');
    
    btnMenuOpen.addEventListener('click',handleMenuOpen,false);
    btnMenuClose.addEventListener('click',handleMenuClose,false);
    
    function handleMenuOpen(e)
    {
        menuOpen.style.display='block';
        TweenLite.set(menuOpen,{height:headerHeight});
        TweenLite.to(menuOpen,0.3,{height:'100%',ease:'Ease.easeOut'});       
    }
    
    function handleMenuClose(e)
    {
        TweenLite.to(menuOpen,0.3,{height:headerHeight,ease:'Ease.easeIn',onComplete:handleComplete});                              
    }
    
    function handleComplete()
    {
        menuOpen.style.display='none';        
    }    
})();
