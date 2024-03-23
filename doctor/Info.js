var inp=document.getElementsByTagName("input")
function select()
{
    var valueofbutton=inp[0].value
    if(valueofbutton=="Clinic Appointment")
    {
        inp[0].style.backgroundColor="gray"
        inp[0].setAttribute("value","Selected")
    }
    else{
        alert
        inp[0].style.backgroundColor=" linear-gradient(118.17deg, #5284B5 6.86%, #8ABBF6 103.41%)"
        inp[0].setAttribute("value","Clinic Appointment")
     }
     
    
}