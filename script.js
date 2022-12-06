// let time  = setTimeout(()=>{
//     document.querySelector("#container").innerText="welcome Ajith"
// },2000)

// // var a=201
// // var b=200
// // if(a>b){
// //     clearTimeout(time)
// // }

// // var s =1
// // var m =1
// // var h =1

// // var time1=setInterval(()=>{
// //     s=s+1
// //     m=m+1
// //     h=h+1
// //     if(s==60){
// //         clearInterval(time1)
// //     }
// //     console.log();
// // },100)


// // var reset = (e) =>{
// //     document.querySelector("#stopwatch").innerHTML = "00 : 00: 00"
// // }


// var userpressing = (e)=>{
//     console.log(e);
//     console.log("pressing")
//     console.log(document.querySelector("#gettinginput").value)
// }

// document.addEventListener("keydown", e =>{
//    console.log(`keydown`,e)
// })
// document.addEventListener("keyup", (event) =>{
//     // console.log(`keyup: key${e.key},code${e.code}`)
//     console.log(event);

//     switch (event.key){
//         case "ArrowUp":
//         alert("you have pressed ArrowUp key");
//         break;
//         case "ArrowDown":
//             alert("you have pressed ArrowDown key");
//             break; 
//             case "ArrowRight":
//                 alert("you have pressed ArrowRight key");
//                 break;
//                 case "ArrowLeft":
//                     alert("you have pressed ArrowLeft key");
//                     break;   
//      }
//  })

// var funct = function(a,b){
//     return(a+b)
// }
 
// var funct2 = function(a,b){
//     return(a+b)
// } 

// let result = funct2(10,funct(10,15))
// console.log(result)


// setTimeout(()=>{
//     document.body.style.backgroundColor = "red"
//     return setTimeout(()=>{
//         document.body.style.backgroundColor = "blue"
//         return setTimeout(()=>{
//             document.body.style.backgroundColor = "yellow"
//             return setTimeout(()=>{
//                 document.body.style.backgroundColor = "pink"
//                 return setTimeout(()=>{
//                     document.body.style.backgroundColor = "green"
//                     return think()
//                 },1000)
//             },1000)
//         },1000)
//     },2000)
// },1000)


// creating Promise
// variable = 5
// let promise_vari = new Promise((res,rej)=>{
//    if(variable){
//     console.log("promise created");
//    }
// })
// console.log(promise_vari)

// creating promise with res
// var variable =5
// let promise_vari = new Promise((res,rej)=>{
//     if(variable){
//         console.log("promise created");
//         res("it is resolved")
//     }
// })
// console.log(promise_vari)

// creating promise with rej
// var variable = 0
// let promise_vari = new Promise((res,rej)=>{
//     if(variable){
//         console.log("promise created");
//         res("it is resoved")
//     }else{
//         rej("it is rejected")
//     }
// })
// console.log(promise_vari)

// expection handling
// try{
//     console.log(10/0);
// }
// catch(e){
//     console.log(e)
// }

// consume with resolve
// var variable = 5
// var promise_vari = new Promise((res,rej)=>{
//     if(variable){
//         console.log("promise created");
//         res("it is resolved")
//     }
// })
// console.log(promise_vari)

// promise_vari
// .then((res)=>{
//     console.log(res)
// })

// consume with reject
// var variable =0
// var promise_vari = new Promise((res,rej)=>{
//     if(variable){
//         console.log("promise created")
//         res("it is resolved")
//     }else{
//         rej("it is rejected")
//     }
// })
// console.log(promise_vari)

// promise_vari
// .catch((rej)=>{
//     console.log("it is rejected")
// })

// var variable =7
// var promise_vari = new Promise((resolve,reject)=>{
//     if(variable){
//         console.log("promise created")
//         setTimeout(()=>{
//             resolve("it is resolved finally")
//         },3000)
//     }else{
//         setTimeout(()=>{
//             reject("it is reject finally")
//         },3000)
//     }
// })
// console.log(promise_vari)

// promise_vari
// .then((res)=>{
//     console.log(res)
//     // console.log(promise_vari)
// })
// .catch((vasanth)=>{
//     console.log(vasanth)
//     // console.log(promise_vari)
// })
// .finally(()=>{
//     console.log("it will always excuted")
// })

// var one = ()=> new Promise((res,rej)=>{
//     setTimeout(()=>{ rej("one")},3000)
// })
// var two = ()=> new Promise((res,rej)=>{
//     setTimeout(()=>{ rej("two")},3000)
// })
// var three = ()=> new Promise((res,rej)=>{
//     setTimeout(()=>{ rej("three")},3000)
// })

//diplay on all resolve 
// var pri = Promise.all([one(),two(),three()])
// pri.then((suc)=>{
//     console.log(suc);
//     console.log(pri)
// })
// .catch((suc)=>{
//     console.log(suc);
//     console.log(pri)
// })
//any first one resolve is diplay
// var pri = Promise.any([one(),two(),three()])
// pri.then((suc)=>{
//     console.log(suc);
//     console.log(pri)
// })
// .catch((suc)=>{
//     console.log(suc);
//     console.log(pri)
// })

// var pri = new Promise((res,rej)=>{
//     setTimeout(()=> res(5),2000)
// })

// .then((res)=>{
//     console.log(res);
//     return res;
// })
// .then((res)=>{
//     console.log(res*4)
//     return res*4
// })

// var ajith = (inp)=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             document.body.style.backgroundColor = inp
//             resolve();
//         },1000)
//     })
// }
// ajith("red")
// .then(()=>ajith("blue"))
// .then(()=>ajith("grey"))
// .then(()=>ajith("yellow"))
// .then(()=>ajith("pink"))

// var ajith = (inp,condi)=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             document.body.style.backgroundColor = inp
//             if(condi){
//                 resolve();
//             }else{
//                 reject();
//             }
//         },1000)
//     })
// }
// ajith("red",1)
// .then(()=>ajith("blue",1))
// .then(()=>ajith("grey",2))
// .then(()=>ajith("yellow",""))
// .then(()=>ajith("pink",4))
// .catch(()=>console.log("got error"))


// let fun = function(a,b){
//     return (a+b)
// }
// let fun2 = function(a,b){
//     return (a+b)
// }
// let result= fun2(10,fun(10,15))
// console.log(result);

// using function
// let s=41
// var prime_fun = function(s){
//     for(let i=2; i<s; i++){
//         if(s % i == 0){
//             console.log("it is not a prime number");
//             return "it is not a prime number"
//         }
//         console.log("it is a prime number");
//         return "it is a prime number"
//     }
// }
// prime_fun(s)

// without function to find prime number
// s=17
// prime = true
// for (let i=0; i < s; i++){
//     if(s%i ==0){
//         prime = false
//     }
// }
// if(prime){
//     console.log("it is a prime number");
// }else{
//     console.log("it is not a prime number");
// }
