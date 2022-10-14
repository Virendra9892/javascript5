console.log("Hey virendra very good morning !");

// try{  
//     var a=2;  
//     if(a==2)  
//     console.log("ok");  
//     }  
//     catch(Error){  
//     console.log("Error found"+e.message);  
//     }  
//     finally{  
//     console.log("Value of a is 2 ");  
// }  

// try{  
//     var a=3;  
//     if(a==2)  
//     console.log("ok");  
//     }  
//     catch(e){  
//     console.log(e.message);  
//     }  
//     finally{  
//     console.log("Value of a is 2 ");  
//     }  



// let disp = () => {
//     setTimeout(() => {
//         console.log("This is first callback function.");

//         setTimeout(() => {
//             console.log("this is 2nd callback.");

//             setTimeout(() => {
//                 console.log("This is third callback.");
//             }, 2000)
//         }, 2000);
//     }, 2000);
// } 
// disp();


// function getname(name,callback){
//     console.log("This is first.");
//     setTimeout(()=>{
//         console.log("Inside Settimeout");
//         callback(name);
//     },2000);
// }
// function gethobbies(names,callback){
//     setTimeout(()=>{
//         console.log("Thiss is hobbies settimeout.");
//         callback(names);
//     },2000);
// }
// getname("Pathak",(nm)=>{
//     console.log("This is second.",nm);
//    gethobbies(["Cricket","Dancing","Singing"],(names)=>{
//     console.log("This is third",names);
//    });
// });

// const promiseObj = new Promise((resolve,reject)=>{
//     let req = true;
//     if(req==false){
//         resolve("Promise Sucess.");
//     }
//     else{
//         reject("Promise failed.");
//     }
// }).then(

//     (value)=>{
//         console.log(value);
//     },
//     (error)=>{
//         console.log(error);
//     }
// );

// let promise = new Promise((resolve,reject)=>{
//     let a = 10;
//     if(a==10){
//         resolve(a);
//     }
//     else{
//         reject("Promis failed");
//     }
// }).then(
//     (value)=>{
//         console.log(value);
//         return value + 10;
//     },
//     (error)=>{
//         console.log(error);
//     }
// ).then(
//     (value)=>{
//         console.log(value);
//         return value + 10;
//     },
//     (error)=>{
//         console.log(error);
//     }
// ).then(
//     (value)=>{
//         console.log(value);
//         return value + 10;
//     },
//     (error)=>{
//         console.log(error);
//     }
// );

let promiseObj = new Promise((resolve,reject)=>{
    let a = 10;
    resolve(a);
    reject("Prommise  failddd");
}).then(
    (value)=>{
        console.log(value);
        return value+10;
    }
).then(
    (value)=>{
        console.log(value);
        return value+10;
    }
).then(
    (value)=>{
        console.log(value);
        return value+10;
    }
).then(
    (value)=>{
        console.log(value);
        return value+10;
    }
).catch(
    ()=>{
        console.log("An error occur");
    }
).finally(
    ()=>{
        console.log("I am always execute.");
    }
);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 2, "Lemon", "Kiwi");
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1);
// console.log(citrus);

// function getname(name){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("This is first inside settimeout");
//             resolve(name);
//             reject("Promise failed");
//         },1000);
//     });

// }
// function gethobbie(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("This is second inside settimeout");
//             resolve(["Virendra","Shubhamm"]);
//             reject("Promise failed");
//         },1000);
//     });
// }

// function getdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("This is third inside settimeout");
//             resolve(["Virendra","Shubhamm","Arpit","Kinjal","Shwetank","Srishti"]);
//             reject("Promise failed");
//         },1000);
//     });
// }

// getname("Pathak")
// .then(value => console.log(value))
// .then(gethobbie)
// .then(value => console.log(value))
// .catch(err => console.log(err))
// .then(getdata)
// .then(value =>console.log(value))


// async function disp(){
//     let one = await getname("Virendra Pathak");
//     console.log(one);

//     let two = await gethobbie();
//     console.log(two);

//     let three = await getdata();
//     console.log(three);
// }
// disp();

// function disp1(){
//     console.log("This is first function.");
//     return 1;
// }

// function disp2(){
//     console.log("This is second function.");
//     return 2;
// }

// function disp3(){
//     console.log("This is third function.");
//     return 3;
// }

// function disp4(){
//     console.log("This is fourth function.");
//     return 4;
// }

// async function check(){
//     let one = await disp2();
//     console.log(one);

//     let two = await disp4();
//     console.log(two);

//     let three = await disp1();
//     console.log(three);

//     let four = await disp3();
//     console.log(four);
// }
// check();


// let promiseObj = new Promise((resolve,reject)=>{
//     let i = 3;
//     if(i==2){
//         resolve("i is equal 2.");
//     }
//     else{
//         reject("i is not equal to 2.");
//     }
// });

// let promiseObj1 = new Promise((resolve,reject)=>{
//     let j = 2;
//     if(j==2){
//         resolve("j is equal 2.");
//     }
//     else{
//         reject("j is not equal to 2.");
//     }
// });

// let promiseObj2 = new Promise((resolve,reject)=>{
//     let k = 2;
//     if(k==2){
//         resolve("k is equal to 2.");
//     }
//     else{
//         reject("k is not equal to 2.");
//     }
// });

// promiseObj.then(value=>console.log(value))
// .catch(error=>console.log(error));
// promiseObj1
// .then(value=>console.log(value))
// .catch(error=>console.log(error))


// function disp(names){
//     console.log("Hey ",names);
// }
// disp("Virendra",(a,b)=>{
//          console.log("Sum = ",a+b);
// });

let disp1 = ()=>{
    setTimeout(()=>{
        console.log("This is 1st callback");
        setTimeout(()=>{
            console.log("This is 2nd callbck.");
        },2000);
    },2000);
}
disp1();