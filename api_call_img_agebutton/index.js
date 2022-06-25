// function test_divisors(low, high) {
//     var string="";
    

//     for(var i=low;i<high+1;i++){
//         string =string.concat(i+" ");
//         if(i%3==0){
            
//             string =string.concat("div3 ");
//         }    
//     }
//     return console.log(string);

// }
// var text="";
// text=text.concat(10);
// text=text.concat("Dileep");
// console.log(text);
// test_divisors(1,6)
// let doday=new Date();

// let day=doday.getDay();
// let dayst="";

// switch(day){
//     case 1:
//         dayst="one"
//         break;
//     case 2:
//         dayst="two"
//         break;
//     case 3:
//         dayst="three"
//         break;
//     case 4:
//         dayst="four"
//         break;
//     case 5:
//         dayst="five"
//         break;
//     case 6:
//         dayst="six"
//         break;
//     case 7:
//         dayst="seven"
//         break;

// }
// let str="it is "
// let str2="day of week";

// let xdat=new Date("2022","1","2");
// console.log(xdat.)

// let obj1={
//     name:"dileep",
//     age:24

// }


// function person(name,age){
//     this.name=name
//     this.age=age
    
// }

// let dileep= new person("Dileep",24)


// let x=[1,2,3]
// let y=[4,5,6]
// x=x.concat(y)
// console.log(x)
// let n=10
// var display=function(){
//     console.log(n)
// }

// let paragraph=document.getElementById('useless-paragraph');
// let hide=true
// function toggleVisibility(){
//     if(hide===false){
//         paragraph.style.visibility="hidden";
//         hide=true;
//     }
//     else{
//         paragraph.style.visibility="visible";
//         hide=false;
//     }
// }

// }

// let Biodata={
//     name:"dilep",
//     DOB:"02/05/1997"
// }

// let address={
//     country:"india",
//     state:"MP"
// }

// Object.setPrototypeOf(Biodata,address);
// console.log(Biodata.state)


// console.log(Biodata.DOB)


// function life(love,hate){
//     this.love=love;
//     this.hate=hate;

// }

// let circut=new life("nancy","manshi");


// console.log(circut.hate)

// var arrow=(num1,num2)=> num1+num2;
// console.log(arrow(2,4))




const refresh=document.querySelector('#getUser');
const lable=document.querySelector('#name');
const imge=document.querySelector('img');
const fullname=document.querySelector('h2');
const num=document.querySelector('#num');
const email=document.querySelector('#email');
const age=document.querySelector('#age');

const buttonall=document.querySelectorAll('button');
console.log(buttonall);




class getdata{
        
    async namee(){
        try{
            let response=await fetch("https://randomuser.me/api/");
            let data=await response.json();
            let data2=data.results;
    
            
            
            data=data2.map((element)=>{
                
                let name=element.name.first;
                let lastname=element.name.last;
                let img=element.picture.large;
                let email=element.email;
                let phone=element.phone;
                let age=element.dob.age;
                return {email,name,lastname,img,age,phone};   
                
            });
            
         
            return data;
            

        }catch(e){
            document.write(e);

        }   

    }
}



function newdata(){
    lable.innerText="additional info";
    let info=new getdata();

    info.namee()
        .then((data)=>{
            let url=data[0].img;
            imge.setAttribute('src',url);
            fullname.innerText=data[0].name+data[0].lastname;

            num.addEventListener('click',()=>{
                lable.innerText=data[0].phone;

            })
            email.addEventListener('click',()=>{
                lable.innerText=data[0].email;

            })

            age.addEventListener('click',()=>{
                lable.innerText=data[0].age;

            })


        })
            
        
}
window.addEventListener('load', newdata);


refresh.addEventListener('click',newdata);


