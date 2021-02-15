var http=new XMLHttpRequest // call xml object to get APIs 
http.open('get','https://jsonplaceholder.typicode.com/posts')
http.send(); //send request to url to get data 
//need to know if http connected or not ,readystate if 0==>mean that not sended yet
// if 1=>this is stablish 
// if 2=>sended but not ready 
//if 3=> prossing to test if every thing is ok or not 
//if 4=> is ready yet 
//statue mean if 404 not found or 403 is forbiden or 200 is connected and ready to use it 
http.addEventListener('readystatechange',function(){
      if(http.readyState==4 && http.status==200){
       // http.response => carry all json data but this is string so convert to object by json parse 
     https = JSON.parse( http.response) //https array of object 
     displayItem()
      }
})


function displayItem(){
      box=''
    https.forEach(element => {

        console.log(element.title)
        box+=`<p>${element.title}</p> <br>`
        document.getElementById('http').classList.add("text-center","bg-light","mb-5");
        document.getElementById('http').innerHTML=box;
    });

}