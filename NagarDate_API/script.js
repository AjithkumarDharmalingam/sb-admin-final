let holiday = async()=>{
    let res = await fetch("https://date.nager.at/api/v3/publicholidays/2022/FR")
    console.log(res);
    let data = await res.json();
    console.log(data);

    for(let i of data){
        let data_to_added = `
        <div class="design">
        <h5 class="Countrycode">Countrycode: ${i.countryCode}</h5>
        <p>Date: ${i.date}</p>
        <p>LocalName: ${i.localName}</p>
        <p>Name: ${i.name}</p>
        <hr>
        </div>
        `
         let parent_variable = document.createElement("div")
        parent_variable.innerHTML = data_to_added
        document.body.append(parent_variable) 
    }
}

holiday();