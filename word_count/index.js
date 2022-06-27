function getQuotesFromApi(){
    return fetch('http://api.quotable.io/random')
    .then(myResponse => myResponse.json() )
    .then(receivedData => receivedData.content)
}
// {Promise: "To fly, we have to have resistance."}
async function triggergetQuotesFromApi(){
    var myData = await getQuotesFromApi()
}
//myData = "To fly, we have to have resistance."
document.getElementById("myId").innerHTML = myData
