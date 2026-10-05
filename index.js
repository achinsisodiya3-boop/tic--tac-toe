// console.log("achin sisodiya");
// name="achin sisodiya";
// isfollow=true;
// console.log(isfollow);
// let age=24;
// let price=100;
// let student={
// age: 20,
// name: "achin",
// cgpa: 8.2,
// ispass: true,

// };
// student["age"] =student["age"]+1;
// student["name"]= "achin sisodiya";
// console.log(student["name"]);
// let a=5;
// let b=2;
// arithmatic expression
// console.log("a+b=",a+b);
// console.log("a=",a,"b=",b);
// console.log("a-b=",a-b);
// console.log("a*b=",a*b)
// console.log("a%b=",a%b)

// unary operator
// let a=5;
// let b=2;

// console.log("a=",a,"b=",b);
// a--;
// console.log("a=",a,);
// a**=4;

// console.log("5==",a=b);
// comparison operator
// let a=5;
// let b=5;

// console.log("a==b",a==b);

// conditional statement.

// let mode="light";
// let color;

// if (mode==="dark"){
//     color="black"
// }
// if (mode==="light"){
//     color="white"
// }
// console.log(color)
// 
// let num=6;
//  if (num%2===0) {
//     console.log("the given number is even");
//  }
//  else{
//     console.log("the given numberis odd");
//  }
// let name= prompt("hello wrold");
// console.log(name);

// let num= prompt(" enter a number");
// if (num%5==0){
//     console.log("number is multiple of 5");
// }
// else{
//     console.log("number is not multiple of 5");
// }

// for(let count=1;count<=100000;count++){
// console.log("achin sisodiya");
// }
// console.log("loop has ended")

// while-loop
// let i=1;
// while(i<=5){
//     console.log("i=",i);
//     i++;
// }

// do-while loop
// let i=1;
// do{
//     console.log("achin sisodiya");
//     i++;

// }while(i<=20);

// for-of loop
// let str="achin sisodiya";
// let size=0;
 
// for(let i of str){
//     console.log("i=",i);
//     size++;
// }
// console.log(size);

// practice question 

// for(let i=0;i<=100;i++){
//     // console.log("i=",i);
//     if(i%2===0){
//         console.log("i=",i);
//     }
// }
// strings
// let str= "achin sisodiya";
// console.log(str[0]);

// template literals
// let sentence= `i am a human `;
// console.log( typeof sentence);

// console.log("apna\ncollege")
// let str="jeson duvel";
// console.log(str.toUpperCase());

// practice question
// let fullname= prompt("guess my full name");
// let username= "@"+ fullname +fullname.length;
// console.log(username);

// array 
// let marks= [45,69,80,78,0];
// console.log(marks);

// for-of loop
// 

// practice questions
// let marks =[85,97,44,37,76,60];
// // console.log((marks[0]+marks[1]+marks[2]+marks[3]+marks[4])/6);

// let sum=0;
//  for( let value of marks){
//     sum+=value;

//  }
// //  console.log(sum);
// let avg=sum/6;
// console.log(avg);

// push
// let fooditems= ["chips","popcorn","muffin"];
//   fooditems.push=["cocacola"];
//   console.log(fooditems);
//   console.log(fooditems.toString());

// functions..
// function myfunction(){
//    console.log("welcme to home");
//    console.log("we are learning js");
// }
// myfunction();

// filter array 
// let arr=[1,2,3,4,5,6,];

// let evenarr=arr.filter((val)=>{
//    return val%2===0;
// });
// console.log(evenarr);

// practice
// let arr=[34,91,99,64];
// let newarr = arr.filter((val) => {
//    return val>=90;
// });
// console.log(newarr);

// q2
// let n= prompt("enter the number");
// let arr=[];

// for( let i=0;i<=n;i++){
//    arr[i]=i;

// };
// console.log(arr);

// console.log(document);

// document object model
//  let header=document.getElementById("heading");
//  console.dir(header);

// let btn1=document.querySelector("#btn1");
// btn1.onclick=()=>{
// console.log("btn was clicked");
// let a=24;
// a++;
// console.log(a);

// };


// let div=document.querySelector("div");
// div.onmousemove=()=>{
//     console.log("you are inside div ");
// };


// let btn1= document.queryselector("#btn1");
// btn1.onclick=(evt)=>{
//     console.log(evt);
//     console.log(evt,type);
// }


let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msgcontainer = document.querySelector(".msg-container");
let winner = document.querySelector("#winner");
let newgame = document.querySelector("#new-game");


let turn0 = true;

const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


const resetgame = () => {
    enableboxes();
    msgcontainer.classList.add("hide");
    turn0 = true;
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turn0){
            box.style.backgroundColor="blue";
        box.innerText="0";
        turn0= false;
        
    } else{
        box.style.backgroundColor="orange";
        box.innerText="x";
        turn0= true;
        

        
    }
    
    box.disabled=true;
    //  box.style.backgroundColor.disabled="";

    checkwinner();
    });
});

const disableboxes=()=>{
for(let box of boxes){
    box.disabled=true;
}
}


    const enableboxes=()=>{
for(let box of boxes){
    box.disabled=false;
    box.innerText="";
    box.style.backgroundColor="";

}

    };




const showWinner=(winner)=>{
    winner.innerText="congratulations you are the winner";
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkwinner=()=>{
    for(let pattern of winpatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);


        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!=""&& pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
}
};

reset.addEventListener("click",resetgame);
newgame.addEventListener("click",resetgame);
