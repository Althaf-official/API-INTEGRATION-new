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

console.log(window)