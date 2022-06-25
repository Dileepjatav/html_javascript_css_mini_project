const btn=document.querySelector('#button');
const url=document.querySelector('#url');
const namee=document.querySelector('#name');
const yearr=document.querySelector('#year');




function display(){
     
    if((namee.value=="") && (yearr.value=="")){
        
    }else if((namee.value=="") && (yearr.value!="")){
        url.textContent=`https://localhost:8080/?${"year="+yearr.value}`;
    }else if((namee.value!="") && (yearr.value=="")){
        url.textContent=`https://localhost:8080/?${"name="+namee.value}`;

    }else{
        url.textContent=`https://localhost:8080/?${"name="+namee.value}${"&year="+yearr.value}`;
    }
    
    
}


btn.addEventListener('click',(e)=>{
    e.preventDefault();
    display();
    namee.value="";
    yearr.value="";
    
})

