// console.log("Ajith");

// var a=[
//     {
//       "url": "https://api.github.com/repos/pandas-dev/pandas/issues/48911",
//       "repository_url": "https://api.github.com/repos/pandas-dev/pandas",
//       "labels_url": "https://api.github.com/repos/pandas-dev/pandas/issues/48911/labels{/name}",
//       "comments_url": "https://api.github.com/repos/pandas-dev/pandas/issues/48911/comments",
//       "events_url": "https://api.github.com/repos/pandas-dev/pandas/issues/48911/events",
//       "html_url": "https://github.com/pandas-dev/pandas/issues/48911",
//       "id": 1393613306,
//       "node_id": "I_kwDOAA0YD85TENn6",
//       "number": 48911,
//       "title": "DOC: IntervalIndex.from_arrays() and IntervalIndex.from_breaks() and IntervalIndex.from_tuples() missing description of name parameter",
//       "user": {
//         "login": "Dr-Irv",
//         "id": 15113894,
//         "node_id": "MDQ6VXNlcjE1MTEzODk0",
//         "avatar_url": "https://avatars.githubusercontent.com/u/15113894?v=4",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/Dr-Irv",
//         "html_url": "https://github.com/Dr-Irv",
//         "followers_url": "https://api.github.com/users/Dr-Irv/followers",
//         "following_url": "https://api.github.com/users/Dr-Irv/following{/other_user}",}}
//       ]

// var response = new XMLHttpRequest()
// response.open("GET","https://api.github.com/repos/pandas-dev/pandas/issues")
// response.send()

// response.onload = function() {
//     var res = this.responseText
//     var out =JSON.parse(res);
//     console.log(out);
//     for(let i of out){
//         console.log(i.labels_url);
//         console.log(i.events_url);
//         console.log(i.title);
//         console.log(i.user.login);
//         console.log(i.user.id);
//         console.log("-".repeat(50));

//         // var data_to_added = `
//         // <p>${i.labels_url}</p>
//         // <p>${i.events_url}</p>
//         // <p>${i.title}</p>
//         // <p>${i.user.login}</p>
//         // <p>${i.user.id}</p>
//         // `
//         // var parent_variable = document.createElement("div")
//         // parent_variable.innerHTML = data_to_added
//         // document.body.append(parent_variable)


//     let parent = document.createElement("div")
//     var para1 = document.createElement("p")
//     var para2 = document.createElement("p")
//     var para3 = document.createElement("p")
//     var para4 = document.createElement("p")
//     var para5 = document.createElement("p")
      
//     para1.innerText = i.labels_url
//     para2.innerText = i.events_url
//     para3.innerText = i.title
//     para4.innerText = i.user.login
//     para5.innerText = i.user.id
//     parent.append(para1)
//     parent.append(para2)
//     parent.append(para3)
//     parent.append(para4)
//     parent.append(para5)
//     document.body.append(parent)
//     break;
//     }
// }

// let to_check_data = fetch("https://api.github.com/repos/pandas-dev/pandas/issues")
// .then((res)=>res.json())
//   .then((out)=>{
//     for (let i of out){
//             let parent = document.createElement("div")
//     var para1 = document.createElement("p")
//     var para2 = document.createElement("p")
//     var para3 = document.createElement("p")
//     var para4 = document.createElement("p")
//     var para5 = document.createElement("p")
      
//     para1.innerText = i.labels_url
//     para2.innerText = i.events_url
//     para3.innerText = i.title
//     para4.innerText = i.user.login
//     para5.innerText = i.user.id
//     parent.append(para1)
//     parent.append(para2)
//     parent.append(para3)
//     parent.append(para4)
//     parent.append(para5)
//     document.body.append(parent)
//     break;
//     }
//   })


// let to_check_data = fetch("https://api.github.com/repos/pandas-dev/pandas/issues")
// .then((res)=>res.json())
//   .then((out)=>{
//     // console.log(out[0].number);
//     fetch((out[0].number.user.url))
//     .then((res2)=>{
//         console.log(res2);
//         fetch((out[0].user.url.followers_url))
//         .then((res3)=>{
//             console.log(res3);
//         })
       
//     })
//   })


// console.log("Ajith");

// var superone = async function(){
//     console.log("async");
//     return Promise.resolve()
// }
// superone();
// console.log("Ajith2");

// console.log("Ajith");
// let prom1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("promise intiated");
//         resolve()
//     },2000)
// })

// let prom = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("promise created");
//         resolve()
//     },5000)
// })
// console.log("Ajith2");

// console.log("Ajith");

// async function whete(){
//     console.log(prom);
//     prom
//       .then((out)=>{
//         console.log("Ajith3");
//       })
// }
// whete();
// console.log("Ajith2");

// async function whete(){
//     console.log("AJITH");
//     console.log(prom);
//     let per =  prom1
//     console.log("AJITH 2");
// }
// whete()

// async function resData(){
//     var res = await fetch("https://api.github.com/repos/pandas-dev/pandas/issues")
//     return res.json()
// }
// resData()
// .then((res)=>{
//     console.log(res);
// })


// async function resData(url){
//     var res = await fetch(url)
//     return res.json()
// }
// resData("https://api.github.com/repos/pandas-dev/pandas/issues")
// .then((res)=>{
//     // console.log(res[0].user.url);
//     resData(res[0].user.url)
//     .then((res)=>{
//         console.log(res["followers_url"]);
//          resData(res["followers_url"])
//           .then((res)=>{
//             console.log(object.keys(res));
//         })
//     })
// })



// var a=[
//     {
//       "url": "https://api.github.com/repos/pandas-dev/pandas/issues/48911",
//       "repository_url": "https://api.github.com/repos/pandas-dev/pandas",
//       "labels_url": "https://api.github.com/repos/pandas-dev/pandas/issues/48911/labels{/name}",
//       "comments_url": "https://api.github.com/repos/pandas-dev/pandas/issues/48911/comments",
//       "events_url": "https://api.github.com/repos/pandas-dev/pandas/issues/48911/events",
//       "html_url": "https://github.com/pandas-dev/pandas/issues/48911",
//       "id": 1393613306,
//       "node_id": "I_kwDOAA0YD85TENn6",
//       "number": 48911,
//       "title": "DOC: IntervalIndex.from_arrays() and IntervalIndex.from_breaks() and IntervalIndex.from_tuples() missing description of name parameter",
//       "user": {
//         "login": "Dr-Irv",
//         "id": 15113894,
//         "node_id": "MDQ6VXNlcjE1MTEzODk0",
//         "avatar_url": "https://avatars.githubusercontent.com/u/15113894?v=4",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/Dr-Irv",
//         "html_url": "https://github.com/Dr-Irv",
//         "followers_url": "https://api.github.com/users/Dr-Irv/followers",
//         "following_url": "https://api.github.com/users/Dr-Irv/following{/other_user}",}}
//       ]

// var response = new XMLHttpRequest()
// response.open("GET","https://api.github.com/repos/pandas-dev/pandas/issues")
// response.send()

// response.onload = function(){
//     var res = this.responseText
//     var out = JSON.parse(res)
//     console.log(out);
    
//     for (let i of out){
//         // console.log(i.labels_url);
        // console.log(i.events_url);
        // console.log(i.title);
        // console.log(i.user.login);
        // console.log(i.user.id);

        // var data_to_added = `
        // <p>${i.labels_url}</p>
        // <p>${i.events_url}</p>
        // <p>${i.title}</p>
        // <p>${i.user.login}</p>
        // <p>${i.user.id}</p>
        // `
        // var parent_variable = document.createElement("div")
        // parent_variable.innerHTML = data_to_added
        // document.body.append(parent_variable)
        

    // let parent = document.createElement("div")
    // let para1 = document.createElement("p")
    // let para2 = document.createElement("p")
    // let para3 = document.createElement("p")
    // let para4 = document.createElement("p")
    // let para5 = document.createElement("p")

    // para1.innerText = i.labels_url
    // para2.innerText = i.events_url
    // para3.innerText = i.title
    // para4.innerText = i.user.login
    // para5.innerText = i.user.id

    // parent.append(para1)
    // parent.append(para2)
    // parent.append(para3)
    // parent.append(para4)
    // parent.append(para5)

    // document.body.append(parent)
    // break;
// }
// }

// let to_check_data = fetch("https://api.github.com/repos/pandas-dev/pandas/issues")
// .then((res)=>res.json())
//   .then((out)=>{
//    for ()
// //   })


// async function whete(){
//   console.log("Ajith");
//   console.log(prom);
//   let per = await prom1
//    console.log("Ajith 2");
// }
// whete()

// async function resData(url){
//   let res = await fetch(url)
//   return res.json()
// }
// resData("https://api.github.com/repos/pandas-dev/pandas/issues")
// .then((res)=>{
//   resData(res[24].user.url)
//    .then((res)=>{
//     console.log(res["followers_url"]);
//     resData(res["followers_url"]);
//       .then((res)=>{
//         console.log(Object.keys(res))
//       })
//    })
// })

// let response = fetch("https://jsonplaceholder.typicode.com/users")
// .then((res)=>{
//   if(res.status === 200) return res.json();
//   else{
//     throw new Error("somthing failed...");
//   }
// })
// .then((data)=>{
//   console.log(data);
// })
// .catch((err)=>{
//   console.log(err.message);
// })

// async function resData(){
//   let response = await fetch("https://jsonplaceholder.typicode.com/users")
//   let data = await response.json()
//   console.log(data);
// }
// resData()



// fetch("https://api.github.com/repos/pandas-dev/pandas/issues")
// .then((res)=>res.json())
// .then((data)=>{
//     // console.log(data[0].user.url);
//     fetch(data[0].user.url)
//     .then((res2)=>res2.json())
//     .then((out)=>{
//         // console.log(out["followers_url"]);
//         fetch(out["followers_url"])
//         .then((res3)=>res3.json())
//         .then((out2)=>{
//             console.log((out2));
//         })
//     })
// })
// async function readData(){
// await fetch("https://api.github.com/repos/pandas-dev/pandas/issues")
// .then((res)=>res.json())
// .then((out)=>{
//     console.log(out[4].user.url)
//     await fetch(out[4].user.url)
//     .then((res2)=>res2.json())
//     .then((out2)=>{
//         console.log(out2["followers_url"]);
//         await fetch(out2["followers_url"])
//         .then((res3)=>res3.json())
//         .then((out3)=>{
//             console.log(out3.length);
//             var arr = [];
//             for(let i=0; i<out3.length; i++){
//                 arr.push(out3[i].followers_url)
//                 var div = document.createElement("div")
//                 var h5 = document.createElement("h5")
//                 h5.innerText = out3[i].followers_url
//                 document.body.appendChild(div)
//             }
//             console.log(arr);
//         })
//     })
// })
// }
// readData();

// fetch("https://unsplash.com/search/photos")
// .then((res)=>res.json())
// .catch((rej)=>{
//     console.log(rej);
// })

// let YOUR_ACCESS_KEY = "JL1TZAI6mOdqokzCwSvum29O4QUNMgdt3a4edl0t374"

// let page = 1
// let unsplash_data = async ()=>{
// try{
//     let api = `https://api.unsplash.com/photos/?client_id=${YOUR_ACCESS_KEY}&page=${page}&per_page=75`  
//     let res = await fetch(
//           api,
//           {
//              method : "GET",
//              Headers : {
//                  "content-type" : "aplication/json()"
//              }
//           }
//     )
 //    return res.json()
//  console.log(res);
//  let data = await res.json()
//  console.log(data);
//  for (let i of data){
//         let dataShowImage = i
//         console.log(dataShowImage.urls.thumb);
//         let create_image = document.createElement("img")
//         create_image.setAttribute("class","ajith")
//         create_image.src = dataShowImage.urls.thumb
//         document.body.append(create_image)
//      }
// }
// catch(err){
//     console.log(err);
// }
// }
// unsplash_data()
// // .then((res)=>{
// //     console.log(res);
// // })

// window.addEventListener("scroll",()=>{
//     if(window.innerHeight + window.scrollY > document.body.offsetHeight-200){
//     console.log("scrolling");
//     console.log(page);
//     page++
//     unsplash_data();
//     }
// })
// curl --location --request GET 'https://api.thecatapi.com/v1/images/search?format=json&limit=10' \
// --header 'Content-Type: application/json' \
// --header 'x-api-key: example-api-key'


// let cat_data = async ()=>{
//     let api = 'https://api.thecatapi.com/v1/images/search?format=json&limit=10'
//     let res = await fetch(
//         api,
//         {
//             method: "GET",
//             Headers :{
//                 "content-type" : "aplication/json()",
//                 "x-api-key": "live_PxHM0J65jYY2EIbyLo5yl1MhD0M0qMY9eQ6vmny85jdFy8Sg4JgJjzSitNvvPaaW"
//             }
//         }
//     )
//     console.log(res);
//     let data = await res.json()
//     console.log(data);

//     for (let i of data){
//         let dataShowImage = i;
//         console.log(dataShowImage.url);
//         let create_image = document.createElement("img")
//         create_image.setAttribute("class","image")
//         create_image.src = dataShowImage.url;
//         document.body.append(create_image)
//     }
// }
// cat_data();

// let s =2

// let prime_fun = function (s){
//     for(let i=0; i<s ;i++){
//         if(s % 2 == 0){
//             console.log("it is not a prime number");
//             return "it is not a prime number"
//         }
//             console.log("it is prime number");
//             return "it is a prime number"
//     }
// }
// prime_fun(s);
// /api.php?api_key='9884776c8545d31cbc6bf229d8735f1ae47f116fd5488306fec9baba14382baa'&action=getlist
// 9884776c8545d31cbc6bf229d8735f1ae47f116fd5488306fec9baba14382baa"
// let mal_share = async ()=>{
//     let api = "/api.php?api_key=[9884776c8545d31cbc6bf229d8735f1ae47f116fd5488306fec9baba14382baa]&action=getlist"
//     let res = await fetch(
//         api,
//         {
//             method : 'GET',
//             Headers : {
//                 'content-type' : 'application/json '
//             }
//         }
//     )
//   console.log(res); 
    
// }
// mal_share();


// curl --location --request GET 'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1' \
// --header 'Content-Type: application/json' \
// --header 'x-api-key: YOUR-API-KEY'
// live_AlAbD1nU30uz1pwWCUA0hPm9elJl1W64W9LJ9xBT9lwOwPUgnYmXJj6fOf1z3qdJ

// let dog_data = async ()=>{
//     let api = 'https://api.ebird.org/v2/data/obs/KZ/recent' 
//     let res = await fetch(
//         api,
//         {
//             method : 'GET',
//             Headers : {
//                 'content-type' : 'application/json'
//                 // 'X-eBirdApiToken': '{{x-ebirdapitoken}}'
//             }
//         }
//     )
//   console.log(res);
//   let out = await res.json();
//   console.log(out);

//   for (let i of out){
//     let outShowImage = i;
//     console.log(outShowImage.url);
//     let create_image = document.createElement("img")
//     create_image.setAttribute('class','image')
//     create_image.src = outShowImage.url;
//     document.body.append(create_image)
//   }
    
// }
// dog_data();



// curl --location --request GET 'https://api.ebird.org/v2/data/obs/KZ/recent' \
// --header 'X-eBirdApiToken: {{x-ebirdapitoken}}'


// let a= 45
// let check = "true"
// for(let i=2;i<a;i++){
//     if(a%i==0){
//         check = "false"
//         console.log('It Is Not a Prime Number');
//         break;
//     }
// }
// if(check === "true"){
//     console.log('It Is Prime Number');
// }
// else{
//     console.log('It Is Not a Prime Number');
// }

// let a =11
// let check = true
// for (i=2;i<parseInt(a/2)+1;i++){
//     if(a%i === 0){
//         check = false
//     }
// }
// if(check){
//     console.log("it is prime number");
// }else{
//     console.log("it is not a prime number");
// }
// let a=45
// for (j=2;j<=a;j++){
//     check = true
//     if(j%2==0 && j!=2){
//         continue;
//     }
//     for(i=2;i<j/2;i++){
//         if(j%i==0){
//             check = false
//             break;
//         }
//     }
//     if(check == true){
//         console.log(j,'primenumber');
//     }
// }

// let a = 0
// let b = 1
// let out = 10
// console.log(a);
// console.log(b);
// while(out > 2){
//     out--
//     var c = a+b
//     console.log(c);
//     a = b
//     b = c
// }

// let a = 0
// let b = 1
// let out = 10
// console.log(a);
// console.log(b);
// while(out > 2){
//     out--
//     var c = a+b
//     a = b
//     b = c
// }
// console.log(c);

// 0 - a
// 1 - b - a
// 1 - c - b - a
// 2 - c - b - a 
// 3 - c - b - a
// 5 - c - b - a
// 8 - c - b
// 13 - c


// for(i=1;i<=5;i++){
//     console.log('*'.repeat(i));
// }

// let a = 1
// let n = 5
// while(n>0){
//     n--;
//     console.log('*'.repeat(a));
//     a++;
// }
// let a = [1,1,1,2,2,3,3,3,1,6,6,6,2]
// for(let i of a){
//     let c = a.filter((x)=>x==i).length
//     console.log(i,'repeted for',c);
// }
//repeted element in array
// let a = [1,1,1,2,2,3,3,3,1,6,6,6,2]
// b = {}
// for(let i of a){
//     let c = a.filter((x)=>x==i).length
//     b[i] = c
// }
// console.log(b);

// let a = [1,1,1,2,2,3,3,3,1,6,6,6,2]
// for (let i of a){
//     c =[];
//     for (let j of a){
//         if(i == j){
//             c.push(i)
//         }
//     }
//     console.log(c.length);
// }


//

//LCM
// let a= [1,2,3,4]
// let count = 1
// while(true){
//     let lcm = a.every((i)=>count%i==0)
//     if(lcm){
//         console.log(count);
//         break
//     }
//     count++;
// }
// LCM usinf for loop
// let a = [11,15,17]
// let count = 1
// while(true){
//     let lcm = []
//     for(let i of a){
//         if(count % i == 0){
//             lcm.push(i)
//         }
//         }
//         if(lcm.length == a.length){
//             console.log(count);
//             break;
//         }
//     count++;
// }
// let a = [160,275]
// let count = 1
// let maxi_ele =Math.max(...a)
// while(true){
//     let values_check = count*maxi_ele
//     let lcm = a.every((i)=> values_check % i ==0)
//     if(lcm){
//         console.log(values_check);
//         break;
//     }
//     count++;
// }

// let a = [1,2,3,4]
// let check = 0
// for(let i of a){
//     if(i > check){
//         check = i
//     }
//     console.log(i);
// }

// a = [1,1,1,2,2,3,3,3,3,3,1,6,6,6,2]
// b={}
// for(let i of a){
//     let c = a.filter((x)=>x==i).length
//     b[i] = c
// }
// console.log(b);
// maxi = 0
// mini = 50
// for(let i of Object.keys(b)){
//     if(b[i]>maxi){
//         maxi = b[i]
//         var maxi_ele  = i
//     }
//     if(b[i]<mini){
//         mini = b[i]
//         var mini_ele = i
//     }
// }
// console.log('maximum count',maxi);
// console.log('maximum element',maxi_ele);
// console.log('*'.repeat(10));
// console.log('minimam count',mini);
// console.log('minimum element',mini_ele);


// a= [160,275]
// let maxi_ele = Math.max(...a)
// let count = 1
// while(true){
//     var values_check = count*maxi_ele
//     lcm = a.every((x)=>values_check%x==0)

//     if(lcm){
//         console.log(values_check);
//         break
//     }
//     count++;
// }

// let a = 5
// let check = 'ajith'
// for(let i = 2; i < a; i++){
//     if(a%i==0){
//         check = 'rose'
//         console.log('It Is Not a Prime Number');
//         break;
//     }
// }
// if(check === 'ajith'){
//     console.log('It Is Prime');
// }

// let a = 7
// let check = true
// for(let i=2;i<parseInt(a/2)+1;i++){
//     if(a%i==0){
//         check = false
//     }
// }
// if(check){
//     console.log('It Is Prime');
// }
// else{
//     console.log('It Is Not a Prime Number');
// }

// let a = 45
// for(j=2;j<=a;j++){
//     if(j%2==0 && j!=2){
//         continue;
//     }
//     let check = 'ajith'
//     for(i=2;i<j;i++){
//         if(j%i==0){
//             check = 'rose'
//             break;
//         }
//     }
//     if(check === 'ajith'){
//         console.log(j,'Prime Number');
//     }
// }

// a = 1
// n = 5
// while(n>0){
//     n--
//     console.log('*'.repeat(a));
//     a++;
// }

// a = [1,2,3,4,5,6,7,8]

// let c = a.filter((x)=>x%2==0)
// console.log(c);

