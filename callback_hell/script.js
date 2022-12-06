
let countdown = document.getElementById("countdown");
let time = 10;

countdown.innerHTML =10;
setTimeout(()=>{
    countdown.innerHTML = 9;
    setTimeout(()=>{
        countdown.innerHTML = 8;
        setTimeout(()=>{
            countdown.innerHTML = 7;
            setTimeout(()=>{
                countdown.innerHTML = 6;
                    setTimeout(()=>{
                        countdown.innerHTML = 5;
                        setTimeout(()=>{
                            countdown.innerHTML = 4;
                                setTimeout(()=>{
                                    countdown.innerHTML = 3;
                                       setTimeout(()=>{
                                          countdown.innerHTML = 2;
                                             setTimeout(()=>{
                                                countdown.innerHTML = 1;
                                                  setTimeout(()=>{
                                                    countdown.innerHTML = "Happy Independance Day"
                                                  },1000)
                                             },1000)
                                       },1000)
                                },1000)
                        },1000)
                    },1000)
            },1000)
        },1000)
    },1000)
},1000)


