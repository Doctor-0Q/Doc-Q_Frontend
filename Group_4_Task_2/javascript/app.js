import { data } from "./data.js";
const nextBtn=document.getElementById('next-btn')
const prevBtn=document.getElementById('prev-btn')
const startPage=document.getElementById('start-page')
const endPage=document.getElementById('end-page')
const searchInput=document.getElementById('name')
const patientEmail=document.getElementById('patientEmail')
const patientNo=document.getElementById('patientNo')
const patientdate=document.getElementById('patientdate')
const pationStatus=document.getElementById('pationStatus')
const patientId=document.getElementById('patientId')
const wholeSerch = document.getElementById('wholeSerch');
// const searchInput = document.querySelector('.search-input');
// --------------------------------------------->AADHI CODE START HERE ----------------------------------------------------->
let pageNo=0
let newData;

let numberDropdown = document.getElementById("number-dropdown");
function populateDropdown(maxValue) {
  for (let i = 1; i <= maxValue; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.id = i;
    option.textContent = i;
    numberDropdown.appendChild(option);
  }
}
numberDropdown.selectedIndex = 0;
var pagelength = 10;
numberDropdown.addEventListener("change", function () {
  pagelength = this.value;
  console.log(pagelength);
  renderfun(pageNo)
  paginate(data);
});
function paginate(pat) {
  const itemsPerPage = pagelength;
  const pages = Math.ceil(pat.length / itemsPerPage);

  const newPatients = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return pat.slice(start, start + itemsPerPage);
  });
  // console.log(newPatients[0]);
  return newPatients;
}


nextBtn.addEventListener('click', () => {
    console.log('clicked');
    pageNo++;
    if (pageNo >= newData.length) {
        pageNo = 0; // Reset to the first page if the maximum length is reached
    }
    renderfun(pageNo);
    // endPage.innerText=newData.length
  });
  // endPage.innerText=newData.length
  // console.log(newData.length);
  prevBtn.addEventListener('click', () => {
    console.log('clicked');
    pageNo--;
    if (pageNo < 0) {
      pageNo = newData.length - 1; 
    }
    renderfun(pageNo);
  });
  const renderfun = (pageNo, filter = '',elem='') => {
    newData = paginate(data); //  newData here
    let filteredData;
    
    let pagelength=10;
    switch(elem){
      case 'name':
        filteredData = data.filter(patient => {
          return patient.name?.toLowerCase().includes(filter?.toLowerCase())
        });
        newData = paginate(filteredData);
        break;
      case 'all':
        filteredData = data.filter(patient => {
          const filterLowerCase = filter.toLowerCase();
          return (patient.name?.toLowerCase().startsWith(filterLowerCase) ||
                 patient.email?.toLowerCase().startsWith(filterLowerCase) ||
                 patient.id.toString().startsWith(filter) ||
                 patient.mobile?.toString().startsWith(filter))
        });
         console.log(filteredData)
        newData = paginate(filteredData);
        break;
      case 'email':
        filteredData = data.filter(patient => {
          return  patient.email?.toLowerCase().includes(filter?.toLowerCase())
                 
        });
        newData = paginate(filteredData);

        break;
      case 'mobile':
        filteredData = data.filter(patient => {
          return  patient.mobile.toString()?.startsWith(filter) 
        });
        newData = paginate(filteredData);
        break;
      case 'id':
        filteredData = data.filter(patient => {
          return patient?.id.toString().startsWith(filter);
        });
        newData = paginate(filteredData);
        break;
      case 'date':
        filteredData = data.filter(patient => {
            return  patient?.date.toString().includes(filter);
          });
        newData = paginate(filteredData);
        break;
        case 'active':
          // Filter by active status only
          filteredData = data.filter(patient => patient.status.toLowerCase() === 'active');
          newData = paginate(filteredData);
          break;

      case 'in active':
        filteredData = data.filter(patient => {
            return  patient?.status.toString().includes(filter);
          });
        newData = paginate(filteredData);
        break;
      // default :
      //   pagelength = 10
      //   break;
     

    }


    //  filteredData = data.filter(patient => {
    //   return patient.name?.toLowerCase().includes(filter?.toLowerCase()) ||
    //          patient.email?.toLowerCase().includes(filter?.toLowerCase()) ||
    //          patient.mobile?.toString().includes(filter?.toString().toLowerCase()) ||
    //          patient?.id.toString().includes(filter);
    // });

  //  console.log(filteredData)
  //  console.log(newData)
   
   
    if(searchInput.value || patientdate.value || wholeSerch.value || patientNo.value || patientEmail.value || patientNo.value || pationStatus.value || patientId.value){
       pagelength = parseInt(filteredData?.length); 
    }else{
      pagelength = parseInt( numberDropdown.value)
    }

    let tableData = "";
    const currentPage = newData[pageNo];

  


    for (let i = 0; i < pagelength; i++) {
        const dataIndex = pageNo * pagelength + i;
        if (dataIndex >= data.length) break; 
        const patient = currentPage[i];


        tableData += `<tr class="al-center common-table-row">
            <td><input type="checkbox"></td>
            <td>${patient?.id}</td>
            <td><div class="name-profile-freme"><span class="userNameCircle">UB</span><span>${patient?.name}</span></div></td>
            <td>${patient?.clinic}</td>
            <td>${patient?.email}</td>
            <td>${patient?.mobile}</td>
            <td>${patient?.date}</td>
            <td><div class="al-center status-toggale"><label class="switch">
            <input type="checkbox" ${(patient?.status.startsWith('active'))?'checked':''} >
            <span class="slider round"></span>
            </label><span class="checked">${patient?.status}</span></div></td>
            <td>
            <div class="img-container">
            <span class="border-blue-r"><img src="./images/pen-clip-solid.svg" alt="" /></span>
            <span class="border-blue"><img src="./images/calendar-solid.svg" alt="" /></span>
            <span class="border-blue"><img src="./images/calendar-check-solid.svg" alt="" /></span>
            <span class="border-yellow"><img src="./images/paper-plane-solid.svg" alt="" /></span>
            <span class="border-blue"><img src="./images/user-solid.svg" alt="" /></span>
            <span class="border-red"><img src="./images/trash-solid.svg" alt="" /></span>
            </div>
            </td>
            </tr>`;
    }
    document.getElementById("table_body").innerHTML = tableData;
    endPage.innerText = newData.length;
    startPage.innerText = pageNo + 1; // Adding 1 to pageNo since indexing is typically 1-based for users
};


// ex





renderfun(pageNo)
paginate(data)
populateDropdown(40);
// --------------------------------------------->AADHI CODE END HERE  ----------------------------------------------------->


searchInput.addEventListener('input', () => {
  const searchQuery = searchInput.value;
  renderfun(pageNo, searchQuery,'name');
});
patientEmail.addEventListener('input', () => {
  const searchQuery = patientEmail.value;
  renderfun(pageNo, searchQuery,'email');
});
patientNo.addEventListener('input', () => {
  const searchQuery = patientNo.value;
  renderfun(pageNo, searchQuery,'mobile');
});
wholeSerch?.addEventListener('input', () => {
  const searchQuery = wholeSerch.value;
  renderfun(pageNo, searchQuery,'all');
});
pationStatus.addEventListener('input', () => {
  const searchQuery = pationStatus.value;
  renderfun(pageNo, searchQuery,'status');
});
patientId.addEventListener('input', () => {
  const searchQuery = patientId.value;
  renderfun(pageNo, searchQuery,'id');
});

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-based
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}
patientdate.addEventListener('input', () => {
  const selectedDate = formatDate(patientdate.value)
  console.log(selectedDate)
  renderfun(pageNo, selectedDate,'date');
});


const active = document.getElementById('input-active');
active.addEventListener('click', () => {
  pationStatus.value = active.innerText; // Update the status input value
  const searchQuery = active.innerText.toLocaleLowerCase();
  renderfun(pageNo, searchQuery, 'active'); // Call renderfun with the searchQuery and 'active' element
});

// Event listener for the "In Active" status button
const inActive = document.getElementById('input-inactive');
inActive.addEventListener('click', () => {
  pationStatus.value =inActive.innerText
  const searchQuery = inActive.innerText.toLocaleLowerCase();
  console.log(searchQuery);
  renderfun(pageNo,searchQuery,'in active');
});