const menuBtn = document.querySelector("#menuBtn");
const navBar = document.querySelector("nav");
const closeBtn = document.querySelector("#closeBtn")

menuBtn.addEventListener('click', ()=>{
    navBar.classList.remove("hidden");
    navBar.classList.add("sidebar");
})

closeBtn.addEventListener("click", ()=>{
    navBar.classList.add("hidden");
    navBar.classList.remove("sidebar");
})























