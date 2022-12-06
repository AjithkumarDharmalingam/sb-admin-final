
let dog_data = async ()=>{
    let api = 'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1' 
    let res = await fetch(
        api,
        {
            method : 'GET',
            Headers : {
                'content-type' : 'application/json',
                "x-api-key" : "live_AlAbD1nU30uz1pwWCUA0hPm9elJl1W64W9LJ9xBT9lwOwPUgnYmXJj6fOf1z3qdJ"
            }
        }
    )
  console.log(res);
  let data = await res.json();
  console.log(data);

  for (let i of data){
    let dataShowImage = i;
    console.log(dataShowImage.url);
    let createDiv = document.createElement("div")
    createDiv.setAttribute('class','dogdata')
    let create_image = document.createElement("img")
    create_image.src = dataShowImage.url
    createDiv.append(create_image)
    document.body.append(createDiv)
  }
    
}
dog_data();