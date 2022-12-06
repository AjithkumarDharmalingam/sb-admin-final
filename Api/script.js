fetch('https://fakestoreapi.com/products')
.then((data)=> data.json())
.then((completedata)=>{
    // console.log(completedata[2].title); 
    let data1 = "";
    completedata.map((value)=>{
         data1 = ` <div class="card">
        <h1 class="title">${value.title}</h1>
        <img src=${value.image}alt="img" class="images">
        <p>${value.description}</p>
        <p class="category">${value.category}</p>
        <p class="price">${value.price}</p>
    </div>`

    })
    document.getElementById("cards").innerHTML = data1;
})
.catch((err)=>{
    console.log(err);
})