const bgc=document.querySelector('#bgcolor');
const fc=document.querySelector('#fontcolor');
const btn=document.querySelector('#btn');
const padding=document.querySelector('#padding');
const border=document.querySelector('#border');




btn.addEventListener('click',(e)=>{
    e.preventDefault();
    document.body.style.backgroundColor=bgc.value;
    document.body.style.color=fc.value;
    document.body.style.padding=(padding.value+"px");
    document.body.style.border=border.value;
    
})




