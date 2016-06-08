(function common()
{
    console.log('common.js start');
    
    var headerHeight;
    handleResize(null);
    
    var btnMenu=document.querySelector('.menu__btnMenu');
    var menuOpen=document.querySelector('.menu');
    
    btnMenu.addEventListener('click',handleMenu,false);
    btnMenu.addEventListener('touchstart',handleMenu,false);
    
    window.addEventListener('resize',handleResize,false);
    
    var isOpen=false;
    
    
    function handleMenu(e)
    {
        e.preventDefault();//重要！
           
        isOpen=!isOpen;        
        
        if(isOpen)
        {            
            console.log(e.type+'menuOpen',e.target);
            btnMenu.classList.add('menu__btnMenuClose');
            menuOpen.style.display='block';
            TweenLite.set(menuOpen,{height:headerHeight});
            TweenLite.to(menuOpen,0.3,{height:'100%',ease:'Ease.easeOut'});             
        }
        else
        {
            console.log(e.type+'menuClose',e.target);
            btnMenu.classList.remove('menu__btnMenuClose');
            TweenLite.to(menuOpen,0.3,{height:headerHeight,ease:'Ease.easeIn'});                              
            
        }             
    }
    
    function handleResize(e)
    {
        var windowWidth=window.innerWidth;
        if(windowWidth<480)
        {
            headerHeight=40;            
        }
        else
        {
            headerHeight=78;            
        }
    }
        
})();
