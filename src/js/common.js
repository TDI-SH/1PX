(function common()
{
    console.log('common.js start');
    
    var btnMenuOpen=document.querySelector('.menu__btnMenuOpen');
    var btnMenuClose=document.querySelector('.menu__btnMenuClose');
    var menuOpen=document.querySelector('.menu__open');
    
    btnMenuOpen.addEventListener('click',handleMenuOpen,false);
    btnMenuClose.addEventListener('click',handleMenuClose,false);
    
    function handleMenuOpen(e)
    {
        menuOpen.style.display='block';        
    }
    
    function handleMenuClose(e)
    {
        menuOpen.style.display='none';        
    }    
    
})();
