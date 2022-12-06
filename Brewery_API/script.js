let breweries = async ()=>{
    let res = await fetch('https://api.openbrewerydb.org/breweries')
    // console.log(res);
    let data = await res.json()
    console.log(data);

    for(let i of data){
       let data_to_added = `
       <div class="design">
       <h5 class="name">Name: ${i.name}</h5>
       <h5 class="type">Brewery_type: ${i.brewery_type}</h5>
       <p>City: ${i.city}</p>
       <p>State: ${i.state}</p>
       <p>Country: ${i.country}</p>
       <a href="#" class="btn btn-primary">${i.website_url}</a>
       <a href="#" class="btn btn-primary">Call:${i.phone ===null? "NA":i.phone}</a>
       <hr>
       </div>
       `
       var parent_variable = document.createElement("div")
       parent_variable.innerHTML = data_to_added
       document.body.append(parent_variable)

    }
}
breweries();

