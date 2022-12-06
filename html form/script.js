let submit = document.getElementById("submit")
submit.addEventListener("click",function(e){
    e.preventDefault();
    
    let gender = document.getElementsByName("gender")
    let gendervalue;
    for(let i=0; i < gender.length; i++){
        if(gender[i].checked){
            gendervalue = gender[i].value
        }
    }
   

    let food = document.getElementsByName("food")
    let foodmenu = [];
    let foodcount = 0;
    console.log(food);

    for(let i = 0; i < food.length; i++){
        if(food[i].checked){
            foodmenu.push(food[i].value)
            foodcount++;
        }
    }
    if(foodmenu.length >=2){
        final = foodmenu.join(",")
    }
    else{
        final = alert("Choose 2 options out of 5 in food")
    }

    createTable(firstname.value,lastname.value,address.value,pincode.value,gendervalue,final,state.value,country.value)
    firstname.value =""
    lastname.value = ""
    address.value = ""
    pincode.value = ""
    gender.value = ""
    foodmenu = []
    state.value = ""
    country.value = ""
 
})

let firstname = document.getElementById("firstname")
let lastname = document.getElementById("lastname")
let address = document.getElementById("address")
let pincode = document.getElementById("pincode")
let gender = document.getElementById("gender")
let food = document.getElementById("food")
let state = document.getElementById("state")
let country = document.getElementById("country")

function createTable(firstname,lastname,address,pincode,gender,food,state,country){
   
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    let td7 = document.createElement("td")
    let td8 = document.createElement("td")

    td1.innerHTML = firstname;
    td2.innerHTML = lastname;
    td3.innerHTML = address;
    td4.innerHTML = pincode;
    td5.innerHTML = gender;
    td6.innerHTML = food;
    td7.innerHTML = state;
    td8.innerHTML = country;

    tr.append(td1)
    tr.append(td2)
    tr.append(td3) 
    tr.append(td4)
    tr.append(td5)
    tr.append(td6)
    tr.append(td7)
    tr.append(td8)
    data.append(tr)
   
}


