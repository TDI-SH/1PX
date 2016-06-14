(function digital()
{
    console.log('digital.js start!');
    
    var sliderImgs=document.querySelectorAll('.slider__img');
    var indicatorOvers=document.querySelectorAll('.slider__indicator__over');
    var indicatorBtns=document.querySelectorAll('.slider__indicator__circle');
    var indicatorCircles=document.querySelectorAll('.slider__indicator__circle>div');
    
    var num=sliderImgs.length;
    var id=0;
    //add event listeners
    for(var i=0;i<num;i++)
    {
        var btn=indicatorBtns[i];
        addClickEvent(btn,handleClick);
    } 
    
    function handleClick(e)
    {        
        e.preventDefault();        
        console.log('click');                   
    }
    
    function slide()
    {
        var delay=20000;
    }   
    
    function addClickEvent(dom,handler)
    {
        dom.addEventListener('click',handler,false);
        dom.addEventListener('touchstart',handler,false);        
    }   
})();