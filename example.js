
const html=document.getElementById('apidata');

class api_call{
    
    async fun_to_get_api_data(){
        try{
            
            const response= await fetch("https://api.publicapis.org/entries");
            const data= await response.json();
            let dataarr=data.entries;
            dataarr=dataarr.map((items)=>{
                const {API,Description,Auth,Link,Category}=items
                return {API,Description,Auth,Link,Category};

            });

            localStorage.setItem("Data",JSON.stringify(dataarr));
            return dataarr;
            
        }catch(e){
            console.log(e)
            
        }
    }
}

class user_interface{
        
    add_html_to_interface(data){
        let result="";

        data.forEach((element) => {
            result+=`<div>
            <li>
                <h3>${element.API}</h3>
                <h3>${element.Auth}</h3>
                <h3>${element.Category}</h3>
                <p>${element.Description}</p>
                <p>${element.Link}</p> 

            </li>
            

            </div>`

            
        });
        html.innerHTML=result;

    }
}


document.addEventListener("DOMContentLoaded",()=>{
    const api=new api_call();
    const screen=new user_interface();


    api.fun_to_get_api_data()
        .then((file)=>{
            
            screen.add_html_to_interface(file);
        });
});




const newpromises=new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        resolve("Success");
        
    },3000);
    
});

newpromises.then((value)=>{
    console.log(value);
});














