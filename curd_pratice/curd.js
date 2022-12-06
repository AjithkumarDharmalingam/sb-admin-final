// let post = document.querySelector("#post")
// let save = document.querySelector("#save")
// let takinginputdata = document.querySelector('textarea[name="inputdata"]')

// // function dataadding(data){
// //     let child_data = document.createElement("div")
// //     child_data.setAttribute("class","sour-div")
// //     child_data.innerHTML =`
// //     <p class="text-value">${data.value}</p>
// //     <p class="actions">
// //       <span onclick ="edit_text(this)">Edit</span>
// //       <span onclick ="delete_text(this)">Delete</span>
// //     </p>
// //     `
// //     document.querySelector(".left-container").append(child_data)
// // }


// post.addEventListener("click",()=>{   
//    if(takinginputdata.value !=""){
//     let child_data = document.createElement("div")
//     child_data.setAttribute("class","sour-div")
//     child_data.innerHTML =`
//     <p class="text-value">${takinginputdata.value}</p>
//     <p class="actions">
//       <span onclick ="edit_text(this)">Edit</span>
//       <span onclick ="delete_text(this)">Delete</span>
//     </p>
//     `
//     document.querySelector(".left-container").append(child_data)
//    }
//    takinginputdata.value = " "
// })

// //edit
// function edit_text(e){
//    let data = e.parentElement.previousElementSibling
//    console.log(data.innerHTML);
//    takinginputdata.value = data.innerHTML
//    delete_text(e);
// }
// //delete
// function delete_text(e){
//    let data = e.parentElement.parentElement
//   data.remove();

//   //delete the entaire localstorage
//   let length_of_local = Object.keys(localStorage)
//   for(let i of length_of_local){
//     localStorage.removeItem(i)
//   }
//   //to save all the data after deletion
//   save_new_value();
//  }

//  //save localstorage
//  save.addEventListener("click",()=>{
//     save_new_value();
//  })
//  function save_new_value(){
//     let data = document.querySelectorAll(".text-value")
//     console.log(data);
//     for (let i=0; i<data.length; i++){
//         localStorage.setItem(i,data[i].innerHTML)
//     }
//  }

//  window.onload = function(){
//     // console.log("page loaded");
//     let local_keys = Object.keys(localStorage)
//     for (let i of local_keys){
//         let child_data = document.createElement("div")
//         child_data.setAttribute("class","sour-div")
//         child_data.innerHTML =`
//         <p class="text-value">${localStorage[i]}</p>
//         <p class="actions">
//           <span onclick ="edit_text(this)">Edit</span>
//           <span onclick ="delete_text(this)">Delete</span>
//         </p>
//         `
//         document.querySelector(".left-container").append(child_data)
//     }
//  }

let takinginputdata = document.querySelector('textarea[name="inputdata"]')
let post = document.querySelector("#post")
let save = document.querySelector("#save")
let reset = document.querySelector("#reset")



post.addEventListener("click",()=>{
   if(takinginputdata != 0){
      let child_data = document.createElement("div")
      child_data.setAttribute("class","sour-div")
      child_data.innerHTML = `
      <p class = 'text-value'>${takinginputdata.value}</p>
      <p class="actions">
            <span onclick ="edit_text(this)">Edit</span>
            <span onclick ="delete_text(this)">Delete</span>
     </p>
      `
      document.querySelector('.left-container').append(child_data)
   }
  takinginputdata.value = ""
})

//edit
function edit_text(e){
   let data = e.parentElement.previousElementSibling
   // console.log(data.innerHTML);
   takinginputdata.value = data.innerHTML;
   delete_text(e);
}

//delete
function delete_text(e){
  let data = e.parentElement.parentElement;
  console.log(data);
  data.remove();
  //delete  enteiar localstorage
  let length_of_local = Object.keys(localStorage)
for (let i of length_of_local){
   localStorage.removeItem(i)
}
//to save all data after deletion
save_new_value();
}



save.addEventListener('click',()=>{
   save_new_value();
})
function save_new_value(){
   let data = document.querySelectorAll('.text-value')
   console.log(data);
   for (let i=0; i<data.length; i++){
      localStorage.setItem(i,data[i].innerHTML)
   }
}

window.onload = function(){
   let local_keys = Object.keys(localStorage).sort();
   console.log(local_keys);
   for (let i of local_keys){
      let child_data = document.createElement("div")
      child_data.setAttribute("class","sour-div")
      child_data.innerHTML = `
      <p class = 'text-value'>${localStorage[i]}</p>
      <p class="actions">
            <span onclick ="edit_text(this)">Edit</span>
            <span onclick ="delete_text(this)">Delete</span>
     </p>
      `
      document.querySelector('.left-container').append(child_data)
   }
}

