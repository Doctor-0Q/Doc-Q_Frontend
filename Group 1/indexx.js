var toogle=false;
var div=document.getElementById("setIcons");
let ul=document.createElement("ul");

let list1=document.createElement("li");
list1.innerText="Home";

let list2=document.createElement("li");
list2.innerText= "Our Service";

let list3=document.createElement("li");
list3.innerText= "Find Doctors"

let list4=document.createElement("li");
list4.innerText= "Login\Register"

ul.appendChild(list1);
ul.appendChild(list2);
ul.appendChild(list3);
ul.appendChild(list4);

ul.style.listStyle="none";
div.appendChild(ul);

const handleMenu = ()=>{
    console.log("ho")
 
    if(toogle===true){
        div.style.display="block";
         
        div.style.alignItems="center"; 
       
        toogle=false;
    }else{
        div.removeAttribute(ul);
        div.style.display="none";
        console.log(div)
        toogle=true;
    } 
}