(function common()
{
    console.log('common.js start');
    
    var headerHeight;
    handleResize(null);
    
    var btnMenu=document.querySelector('.menu__btnMenu');
    var menu=document.querySelector('.menu');
    var headerLogo=document.querySelector('.header__logo');
    
    btnMenu.addEventListener('click',handleClick,false);
    btnMenu.addEventListener('touchstart',handleClick,false);
    
    btnMenu.addEventListener('mouseenter',handleMouseEnter,false);
    menu.addEventListener('mouseleave',handleMouseLeave,false);
    
    window.addEventListener('resize',handleResize,false);      
    
    var isOpen=false;
    
    function handleMouseEnter(e)
    {
        e.preventDefault();
        
        if(!isOpen)
        {
            console.log('mouseover');
            isOpen=true;       
            openMenu();
        }                       
    }
    
    function handleMouseLeave(e)
    {
        e.preventDefault();
        
        if(isOpen)
        {
            console.log('mouseleave');
            isOpen=false;
            closeMenu();
        }
    }
    
    function handleClick(e)
    {
        e.preventDefault();
        console.log('click');
        isOpen=!isOpen;
        if(isOpen)
        {
            openMenu();
        }              
        else
        {
            closeMenu();
        }  
    }
    
    function openMenu()
    {
        btnMenu.classList.add('menu__btnMenuClose');
        
        var windowWidth=window.innerWidth;
        if(windowWidth<480)
        {
            changeBg(headerLogo,'url(./images/common/logoWhite.png)');
        }
        
        menu.style.backgroundColor='#002e61';
        TweenLite.set(menu,{height:headerHeight});
        
        if(menu.classList.contains('menu__transparent'))
        {
            menu.style.backgroundColor='#ed871b';
        }
        TweenLite.to(menu,0.3,{height:'100%',ease:'Ease.easeOut'});        
    }
    
    function closeMenu()
    {
        btnMenu.classList.remove('menu__btnMenuClose');
        
                        
        TweenLite.to(menu,0.3,{height:headerHeight,ease:'Ease.easeIn',onComplete:changeMenuColor});        
    }
    
    function changeMenuColor()
    {
        menu.style.backgroundColor='transparent';
        changeBg(headerLogo,'url(./images/common/logo.png)');             
    }
    
    function changeBg(dom,src)
    {
        dom.style.backgroundImage=src;       
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
