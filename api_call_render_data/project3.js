
async function getdata(){
    try{
        const response=await fetch("https://inshorts.deta.dev/news?category=science");
        const data=await response.json();
        let arr=data.data;
        

        arr=arr.map((element)=>{
            const {author,content,date,title,url,imageUrl,readMoreUrl,time,id}=element;
            return {author,content,date,title,url,imageUrl,readMoreUrl,time,id};
        })
        return arr
        

    }catch(e){
        console.log(e);

    }
}
function displaydata(data){

    var html='';
    data.forEach(element => {
         html+=`<div>
         <br><br>
        <image style="width:400px; height:250px;" src="${element.imageUrl}"></image>
        <h3>${element.author}</h3> 
        <h4>${element.date}</h4>
        <h4>${element.time}</h4>
        <h2>${element.id}</h2>
        <h5>${element.title}</h5>
        <h6>${element.url}</h6>
        <p>${element.readMoreUrl}</p>
        <p>${element.content}</p>
    
        </div>`;
    
    });

    document.body.innerHTML=html;

}

getdata()
.then((data)=>{
    displaydata(data);

})