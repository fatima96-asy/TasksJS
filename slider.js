// class img-Items -select all div-img -put this not array 
var imgItems=document.getElementsByClassName('img-Items');
var arrayImgItems=[];
var nextItem=0;

// _________________________________________________________________
for(i=0;i<imgItems.length;i++){
    arrayImgItems.push(imgItems[i])
}
// _________________________________________________________________
//display
arrayImgItems.forEach(item=>{
    item.addEventListener('click',function(e){
       nextItem=  arrayImgItems.indexOf(item)
       document.getElementById('hidDiv').classList.remove("d-none");
       var ImgSelect=e.target.getAttribute("src");
       document.getElementById('slideImage').style.backgroundImage=`url(${ImgSelect})`
    })
})
// ___________________________________________________________________
//close tap
document.getElementById('close').addEventListener('click',function(e){
    document.getElementById('hidDiv').classList.add('d-none');
})
//______________________________________________________________
//display next image  when click on arrow 
document.getElementById('next').addEventListener('click',e=>{
    nextItem++
    if(nextItem==arrayImgItems.length){
        nextItem=0;
    }
    document.getElementById('slideImage').style.backgroundImage=
    `url(${arrayImgItems[nextItem].getAttribute("src")})`

})
// ___________________________________________________________________
//display back
document.getElementById('back').addEventListener('click',e=>{
    nextItem--
    if(nextItem < 0){
        nextItem=arrayImgItems.length-1;
    }
    
    document.getElementById('slideImage').style.backgroundImage=
    `url(${arrayImgItems[nextItem].getAttribute("src")})`

})
//_________________________________________________-





