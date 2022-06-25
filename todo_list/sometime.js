let inputbox=document.querySelector('.todo-input');
let addbtn=document.querySelector('.todo-button');
let container=document.querySelector('.todo-container');




function createlist(){
    let ul=document.createElement('ul');
    let li=document.createElement('li');
    let btncom=document.createElement('button');
    let btndel=document.createElement('button');

    li.setAttribute("class","todo-item");
    ul.setAttribute("class","todo-list");
    btncom.setAttribute("class","completed-btn");
    btndel.setAttribute("class","trash-btn");

    btncom.innerText="Completed";
    btndel.innerText="deleted";

    let line=false;
    btncom.addEventListener('click',()=>{
        
        if(line==true){
            li.style.textDecoration="none";
            line=false;
        }else{
            li.style.textDecoration="line-through solid rgb(0, 0, 0)"
            line=true;
            
        }
        
    })

    btndel.addEventListener('click',()=>{
        if(line==true){
            container.removeChild(ul);
        }
        
    })
    

    li.innerText=inputbox.value;
    ul.appendChild(li);
    ul.appendChild(btncom);
    ul.appendChild(btndel);
    container.appendChild(ul); 
}

function check(){
    if(inputbox.value!=""){
        createlist();
    }
}

addbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    check();
})


