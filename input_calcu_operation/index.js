const btn=document.querySelector('#cal');
const num1=document.querySelector('#num1');
const num2=document.querySelector('#num2');
const res=document.querySelector('#result');
const operat=document.querySelector('#operation');



function calculate(){
    let val=operat.value;

    switch (val){
        case "-":{
            res.value=parseFloat(num1.value)-parseFloat(num2.value);
            break;
        }
        case "+":{
            res.value=parseFloat(num1.value)+parseFloat(num2.value);
            
            break;
        }
        case "*":{
            res.value=parseFloat(num1.value)*parseFloat(num2.value);
            break;
        }
    }


}
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    calculate();

    
    
    

})