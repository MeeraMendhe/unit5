import { add } from "./check";
import("./index.css")
import images from "./images/line logo.jpg";
console.log(add(9,7));

const nav=document.getElementById("nav");
nav.classList.add("nav");
const div_img=document.createElement("div");
const img=document.createElement("img");
img.src=images;
div_img.append(img);

const container = document.getElementById("box");
container.classList.add("container");
const div_m = document.createElement("div");
div_m.classList.add("maindiv")
const h= document.createElement("h1");
const t=document.createElement("textarea");
t.classList.add("text")
let btn = document.createElement("button");
btn.classList.add("btn")
h.innerText="Note Making App"
btn.innerHTML="Submit";
nav.append(div_img,h);

container.append(t,btn,div_m);

btn.onclick =()=>{
    const li = document.createElement("li");
    li.classList.add("list");
    if(t.value!=""){
        li.innerText=t.value;
        t.value="";
        div_m.append(li);
    }
   
}
