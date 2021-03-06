

const request =new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();
request.onload = ()=>{
    if(request.status === 200){//now the status is 200 then only the onload function will work
        // console.log(JSON.parse(request.response));
    }else{
        // console.log(request.status);
        // console.log(request);
        // console.log(`error ${request.status}`)
    }
}

//fetch api

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response=>{//default promise is here
//     return response.json();
// }).then(json=>{
//     console.log(json);
// })


//fetch API second approch using async
async function getUsers(){
    let response = await fetch('https://jsonplaceholder.typicode.com/albums');
    let data = await response.json();
   // console.log(data)
    return data;
   
}
getUsers().then(response=>{
   // console.log(response);
   
})



//axios-third party javascript library
axios.get('https://jsonplaceholder.typicode.com/photos')
     .then(response=>{
        //console.log(response.data);
     }),err=>{
       // console.log(err)
     }


// using JQuery
//console.log(window)// check the console inthe webpage and check for the "$" symbol this is for jquery
$(document).ready(function(){
    $.ajax({
        url:'https://jsonplaceholder.typicode.com/posts',
        type:"GET",
        success:function(result){
            console.log(result)
        },
        error:function(err){
            console.log(err);
        }

    })
})


