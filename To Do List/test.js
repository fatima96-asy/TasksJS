var productName=document.getElementById("productName");
var productPrice=document.getElementById("productPrice");
var productCategory=document.getElementById("productCategory");
var productDesc=document.getElementById("productDesc");
var addProduct=document.getElementById("addProduct")
var currentIndex=0;
// var allProductAdd=[];
var allProductAdd;
if(localStorage.getItem('myProduct')==null){
     allProductAdd=[]
}
else{
   allProductAdd = JSON.parse(localStorage.getItem('myProduct'));
   addRow();
}


addProduct.addEventListener('click',function(e){
 
    if(addProduct.innerHTML='update'){
        
        saveData();
    }
    else{
        
        add();
    }
    // console.log(allProductAdd);

})

function addRow(){
    box='';
    for(i=0;i<allProductAdd.length;i++){
        box+=`<tr> 
        <td>${allProductAdd[i].name}</td>
        <td>${allProductAdd[i].price}</td>
        <td>${allProductAdd[i].category}</td>
        <td>${allProductAdd[i].desc}</td>
        <td><button onclick="deleteIndexItem(`+i+`)" class='btn btn-warning deleteProduct' >Delete</button></td>
        <td><button onclick=" updateItems(`+i+`)"   class='btn btn-warning'>Updete</button></td>
        </tr>`;
       

    }
    document.getElementById('addChild').innerHTML=box;
}

localStorage.setItem('header','AddNewProduct')
document.getElementById('header').innerHTML=localStorage.getItem('header')
//localStorage.clear();
/* -------------------------------------------------------------------------------------------*/
// search items 
document.getElementById('inputSearch').addEventListener('keyup',function(e){
    searchElements(this.value)
})
 
function searchElements(Items){
    var box2='';
    for(i=0;i<allProductAdd.length;i++){

        if(allProductAdd[i].name.includes(Items.trim())==true){
          var X =  allProductAdd[i].name.replace(Items,`<span style='color:red'>${Items}</span>`) 

          box2+=`<p class='form-control'>${X}</p>`
        }
        
    }
    document.getElementById('addTextSearch').innerHTML=box2;

}

//delete function 
function deleteIndexItem(index){
    allProductAdd.splice(index,1)
    localStorage.setItem('myProduct',JSON.stringify(allProductAdd));
    addRow()  
}

//update function
function updateItems(index){

    currentIndex=index;
    productName.value=allProductAdd[index].name
    productPrice.value=allProductAdd[index].price
    productCategory.value=allProductAdd[index].category
    productDesc.value=allProductAdd[index].desc
    addProduct.innerHTML='update'
    
}

//save data
function   saveData(){

  var  productSave ={
        name:productName.value,
        price:productPrice.value,
        category:productCategory.value,
        desc:productDesc.value,
    }
    
    allProductAdd[currentIndex]=productSave;
    localStorage.setItem('myProduct',JSON.stringify(allProductAdd))
    addRow()
    addProduct.innerHTML='add';

}
// add
function add(){
    productOpject={
        name:productName.value,
        price:productPrice.value,
        category:productCategory.value,
        desc:productDesc.value,
    }
    allProductAdd.push(productOpject)
    localStorage.setItem('myProduct',JSON.stringify(allProductAdd))
    addRow()
}