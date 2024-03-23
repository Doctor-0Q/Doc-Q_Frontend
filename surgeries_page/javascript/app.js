import { surgeres_data, dept_data } from "./data.js";
// document.getElementById('surgires-list')
console.log(dept_data);

let listData = ''
surgeres_data.map((item) => {
    listData += `  <div class="single-surgery">
    <img class=""
        src=${item.image}
        alt="">
    <p>${item.name} </p>
    </div>`

})
document.getElementById('surgires-list').innerHTML = listData
let deptData = ''
dept_data.map((item) => {
    deptData += ` <div class="single-specalist">
    <img class="specalist-container-img"
        src=${item.image}
        alt="">
    <p class="spe-type">${item.name}</p>
    <p class="allinments">${item.allinments} allinments</p>
</div>`
})
document.getElementById('specalists-container').innerHTML = deptData


// Get the modal
var modal = document.getElementById("myModal");

var btn = document.getElementById("bangaloreBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}






// console.log(surgeres_data);
document.querySelectorAll('.slide-images img').forEach(image => {
    image.onclick = () => {
        // console.log('clicked');
        document.querySelector('.big-image img').src = image.getAttribute('src')
    }
})