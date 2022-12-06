// CURD - Create, Read, Update, Delete 
// global variable
var row = null;

function Submit(){
    let dataEntered = retriveData();
    let readData = readingDataFromLocalStorage(dataEntered)
    if(dataEntered == false){
        msg.innerHTML = "Please Enter Data!"
    }else{
        if(row==null){
            insert(readData)
            msg.innerHTML = "Data Inserted!"
        }else{
            update();
            msg.innerHTML = "Data Updated!"
        }
    }
    document.getElementById("form").reset()
   
}
//CREATE
//Retriving data from form
function retriveData() {
    let name1 = document.getElementById("name").value;
    let job = document.getElementById("job").value;
    let exp = document.getElementById("exp").value;

    let arr = [name1, job, exp]
    if(arr.includes("")){
        return false;
    }else{
        return arr;
    }
    
}

// READ 
//Data in LocalStorage
function readingDataFromLocalStorage(dataEntered){
    let n = localStorage.setItem("Name",dataEntered[0])
    let j = localStorage.setItem("Job",dataEntered[1])
    let e = localStorage.setItem("Experience",dataEntered[2])

    //getting value from local to table
    let n1 = localStorage.getItem("Name",n)
    let j1 = localStorage.getItem("Job",j)
    let e1 = localStorage.getItem("Experience",e)

    let arr = [n1, j1, e1]
    return arr
}

//INSERT
function insert(readData){
    let row = table.insertRow()
    row.insertCell(0).innerHTML = readData[0]
    row.insertCell(1).innerHTML = readData[1]
    row.insertCell(2).innerHTML = readData[2]
    row.insertCell(3).innerHTML = `<button onclick=edit(this)>Edit</button>
                                   <button onclick=remove(this)>Delete</button>`
}

//EDIT
function edit(data) {
    row = data.parentElement.parentElement;
    document.getElementById("name").value = row.cells[0].innerHTML
    document.getElementById("job").value = row.cells[1].innerHTML
    document.getElementById("exp").value = row.cells[2].innerHTML
}

//UPDATE
function update(){
    row.cells[0].innerHTML = document.getElementById("name").value
    row.cells[1].innerHTML = document.getElementById("job").value
    row.cells[2].innerHTML = document.getElementById("exp").value
    row = null
}

//DELETE 
function remove(td){
    let ans = confirm("Are you sure you want delete this record?")
    if(ans == true){
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex)
    }
}

