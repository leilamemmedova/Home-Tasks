let menuBtn= document.querySelector(".menu-btn")
let headerSec= document.querySelector(".header-sec")
let hiddenSec=document.querySelector(".hidden-section")

menuBtn.addEventListener("click", function(){
    console.log("hi");
    headerSec.style.display="none"
    hiddenSec.style.display="block" 
})