console.log("WELL COME");
const btnadd=document.querySelector('#button');
const textvalue1=document.querySelector('#text1');
const textvalue2=document.querySelector('#text2');
const textvalue3=document.querySelector('#text3');
const textvalue4=document.querySelector('#text4');
const box=document.querySelector('#box');
const p=document.querySelector('#para');



function newdata(){
    textvalue1.value="";
    textvalue2.value="";
    textvalue3.value="";
    textvalue4.value="";
}

function tablecr(){
    
    
    let table=document.createElement('table');
    let thead=document.createElement('thead');
    let tbody=document.createElement('tbody');

    let thead1=document.createElement('th');
    let thead2=document.createElement('th');
    thead1.innerText="NAME";
    thead2.innerText="CLASS";
    thead.appendChild(thead1);
    thead.appendChild(thead2);
    let tr1=document.createElement('tr');
    let tr2=document.createElement('tr');
    let td1=document.createElement('td');
    let td2=document.createElement('td');
    let td3=document.createElement('td');
    let td4=document.createElement('td');

    td1.innerHTML=textvalue1.value;
    td2.innerHTML=textvalue2.value;

    tr1.appendChild(td1);
    tr1.appendChild(td2);

    td3.innerHTML=textvalue3.value;
    td4.innerHTML=textvalue4.value;

    tr2.appendChild(td3);
    tr2.appendChild(td4);

    tbody.appendChild(tr1);
    tbody.appendChild(tr2);

    table.appendChild(thead);
    table.appendChild(tbody);

    box.appendChild(table);
    newdata();
   
    
}


function check(){
    if(textvalue1.value!=""){
        tablecr();
    }else{
        p.textContent="Enter name please";
    }
}
function displayvalue(){
    
    

    console.log("dileep");

}


textvalue1.addEventListener('click',()=>{
    p.textContent='';
})

btnadd.addEventListener('click',check);



