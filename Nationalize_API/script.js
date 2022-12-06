//CREATING ELEMENT
document.body.innerHTML = `
<div class = "container-fluid">
<h1 class="name">Pridict Nationality !</h1>
<input type = "text" placeholder = "Enter the name" size ='30' id = "searchbox"><br><br>
<button type="button" id="searchbtn" class="btn btn-primary">Search</button>
<button type="button" id="resetbtn" class="btn btn-danger">Reset</button>
</div>
<div class = "container-fluid datastore">
<h4 class="country">Display The Top Two Countries And Propablities</h4>
<h5 id="tempdata"></h5><br></br>
</div>
`

let searchbox = document.querySelector("#searchbox")
let tempdatabase = document.querySelector("#tempdata") 
let searchbtn = document.querySelector("#searchbtn")
let resetbtn = document.querySelector("#resetbtn")

//RESET ALL ELEMENT
resetbtn.addEventListener("click",()=>{
    tempdatabase.innerHTML = ""
    searchbox.value= ""
})

searchbtn.addEventListener("click", async()=>{
    let inputdata = document.getElementById("searchbox").value;
    if(inputdata.length == 0 || inputdata.includes(" ")){
        alert('Name Required without any spaces');
    }
//FETCH API
    else{
        try {
            let res = await fetch(`https://api.nationalize.io?name=${inputdata}`);
            let output = await res.json();
            console.log(output);
            
            for(let i=0; i<2; i++){
                tempdatabase.innerHTML += `
                <div>
                 <p>${inputdata}<br>
                 countrycode:${output.country[i].country_id}<br>
                 probability:${output.country[i].probability}<br>
                 </p>
                </div> 
                ` 
            }
        } 
        catch (err) {
            console.log(err);
        }
    }
})




