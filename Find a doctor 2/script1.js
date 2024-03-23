

var toogle = false;
var div = document.getElementById("setIcons");

// Hide the sidebar initially
div.style.display = "none";

// div.style.height = "100%";
div.style.width = "100%";
div.style.boxShadow="box-shadow: 5px 5px 4px #aac8e9;"
div.style.backgroundColor = "#5284b5";
div.style.zIndex = "1";
div.style.paddingBottom = "70px";
div.style.position = "fixed";
div.style.marginLeft = "-200px";
div.style.marginTop = "20px";
div.style.transition="all ease-in-out 0.5s"
div.style.borderRadius="10px"

let ul = document.createElement("ul");

let list1 = document.createElement("li");
list1.innerText = "Home";
list1.style.color = "white";
list1.style.paddingTop = "40px";

let list2 = document.createElement("li");
list2.innerText = "Our Service";
list2.style.color = "white";
list2.style.paddingTop = "40px";

let list3 = document.createElement("li");
list3.innerText = "Find Doctors";
list3.style.color = "white";
list3.style.paddingTop = "40px";

let list4 = document.createElement("li");
list4.innerText = "Login\\Register";
list4.style.color = "white";
list4.style.paddingTop = "40px";

ul.appendChild(list1);
ul.appendChild(list2);
ul.appendChild(list3);
ul.appendChild(list4);

ul.style.listStyle = "none";
ul.style.display = "flex";
ul.style.margin = "0px";

ul.style.flexDirection = "column";
ul.style.paddingLeft = "50px";

div.appendChild(ul);

const handleMenu = (event) => {
     
    if (toogle === false) {
        div.style.display = "block";
        div.style.alignItems = "center";
        toogle = true;
    } else {
        div.style.display = "none";
        toogle = false;
    }
} 
