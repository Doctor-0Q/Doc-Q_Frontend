const filterArr = [];
let data = [
    {
        id: 1,
        name: "Dr. Mike Morining",//Dr. Sheamus
        experience: "04 years",
        image: "./Images/Ellipse 40 (1).png",
    },
    {
        id: 2,
        name: "Dr. Sheamus",
        experience: "03 years",
        image: "./Images/Ellipse 40.png"
    },
    {
        id: 3,
        name: "Dr. Emily",//Dr. Sheamus
        experience: "05 years",
        image: "./Images/Ellipse 40 (2).png"
    },
    {
        id: 4,
        name: "Dr. Wang Doe",//Dr. Sheamus
        experience: "02 years",
        image: "./Images/Ellipse 40 (3).png"
    },
    {
        id: 5,
        name: "Dr. Micky Will",//Dr. Sheamus
        experience: "03 years",
        image: "./Images/Ellipse 40 (4).png"
    },
    {
        id: 6,
        name: "Dr. Shane Warn",//Dr. Sheamus
        experience: "04 years",
        image: "./Images/Ellipse 40 (5).png" //"./Images/Ellipse 40 (1).png"
    }
]

// This code is for appending the list dynamically in the main page 
const prelist=document.querySelector("#prelist");
 
const divv = document.getElementById("userList1");
data.map((user) => {
    const li = document.createElement("li");

    li.insertAdjacentHTML('afterbegin',
        `
        <div class="userData"> 
           <div class="inneruserData1">
              <img src="${user.image}" height="40px" width="40px">
              <h5>${user.name}</h5>
           </div>
           <div class="inneruserData2"> 
            <h4 style="color: black; margin: 0;"><span style="color: #4a6e93;">Experience: </span>${user.experience}</h4>
           </div>
       </div>

        `
    );
    divv.appendChild(li);
    filterArr.push(li);
});  


// This code is for searching  /^[A-Za-z]+$/

const doctorNameSearch = document.getElementById("userSearch");
doctorNameSearch.addEventListener("input", (e) => {
    let val = e.target.value.toLowerCase();
    if (!val.match(/^[A-Za-z]+$/)) {
      //we can show here some msg like Eneter valid name
      
        filterArr.filter((li) => {

            let dname = li.querySelector('h5').textContent.toLowerCase(); //search on the basis of doctor name
            if (dname.includes(val)) {
                li.classList.add("hide");
            } else {
                li.classList.add("hide");
            }
        })
    }

    
    filterArr.filter((li) => {

        let dname = li.querySelector('h5').textContent.toLowerCase(); //search on the basis of doctor name
        if (dname.includes(val)) {
            li.classList.remove("hide");
        } else {
            li.classList.add("hide");
        }
    })
     
})








 

