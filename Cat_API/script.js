let cat_data = async ()=>{
    let api = 'https://api.thecatapi.com/v1/images/search?format=json&limit=10'
    let res = await fetch(
        api,
        {
            method : "GET",
            Headers :{
                "content-type" : "application/json",
                "x-api-key" : "live_PxHM0J65jYY2EIbyLo5yl1MhD0M0qMY9eQ6vmny85jdFy8Sg4JgJjzSitNvvPaaW"
            }
        }
    )
    // console.log(res);
    let data = await res.json()
    console.log(data);

    for(let i of data){
        let dataShowImage = i;
        // console.log(dataShowImage.url);
        let createDiv = document.createElement("div")
        createDiv.setAttribute('class','catdata')
        let create_image = document.createElement("img")
        create_image.src = dataShowImage.url
        createDiv.append(create_image)
        document.body.append(createDiv)
    }
}
cat_data()