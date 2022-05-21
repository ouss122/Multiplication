let input=document.querySelector(".input");
let result=document.querySelector(".res");
let ques=document.querySelector(".qs");
let co=document.querySelector(".show");
let chose=document.querySelector(".chose");
let s="";

let r=[1];
function delet(k,i){
    return k.slice(0,i).concat(k.slice(i+1));
}

chose.addEventListener("click",event =>{
    console.log(event.target);
    if (event.target.className !== "chose" && event.target.className !== "select"){
        r.push(Number(event.target.textContent));
        event.target.classList.toggle("select");
    }else if (event.target.className !== "chose"){
        r= delet(r,r.indexOf(Number(event.target.textContent)))
        event.target.classList.toggle("select");
    }
 })

let i=r.length +1;
function gene(){
let y=Math.floor((Math.random() *10));
while (y > r.length -1){
    y=Math.floor((Math.random() *10));
}
return y;
}
function question(){


let x=r[gene()];
let y=Math.floor((Math.random() *10)) +1;
let z = y*x;
ques.textContent=x+"x"+y
return z;
}
function press(event) {  
     
    if (event.target.textContent==="Check"){
        input.removeEventListener("click",press);
        checkans();
    }  
    else if (event.target.textContent==="CLR"){
      s=s.slice(0,s.length -1);
      result.textContent=s;

    }
   else if (event.target.className !== "input" ){
    s=s+ event.target.textContent;
    result.textContent=s;
    } 
}
function checkans(){
    if (result.textContent==answer){
        let a=0;
        let ba=  "rgb(54, 54, 54)";
        co.style.backgroundColor=ba;
        let op= setInterval(function win(){
          
           if (co.style.backgroundColor===ba){
           co.style.backgroundColor="rgb(56, 128, 27)"}
           else{
             co.style.backgroundColor=ba;
           }
           if (a===5){ 
               co.style.backgroundColor=ba;
               clearInterval(op);  
               answer=question();
               result.textContent=""; 
                s="";
                input.addEventListener("click", press);
           }
            a++;
        },500)
     
    }else{
        let a=0;
        let ba=  "rgb(54, 54, 54)";
        co.style.backgroundColor=ba;
        let op= setInterval(function win(){
          
           if (co.style.backgroundColor===ba){
           co.style.backgroundColor="rgb(165, 13, 51)"}
           else{
             co.style.backgroundColor=ba;
           }
           if (a===5){ 
               co.style.backgroundColor=ba;
               clearInterval(op);
               result.textContent=""; 
               s="";
               input.addEventListener("click", press);

           }
            a++;
        },500)

    }

}
let answer=question();
input.addEventListener("click",press)

document.addEventListener("keydown",function press(event){
    if (event.key==="Enter"){
        event.preventDefault(); 
        checkans();
    }
    else if (event.key ==="Backspace"){
        s=s.slice(0,s.length -1);
        result.textContent=s;
  
    }
   
})
