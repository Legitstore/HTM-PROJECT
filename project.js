// --------- FOR LOGIN SIGNIN & SIGNUP SWITCH ------- 
const wrapper = document.querySelector('.wrapper');

function activeSignIn(){
    wrapper.classList.add('activeSignIn');
    wrapper.classList.remove('activeSignUp');
}
function activeSignUp(){
    wrapper.classList.add('activeSignUp');
    wrapper.classList.remove('activeSignIn');
}


// ============== FOR USER ================== 
let wrap = document.querySelector(".wrap");

document.querySelector("#user-btn").onclick= () =>{
    wrap.classList.toggle("active")
    menu.classList.remove("active")
    searchForm.classList.remove("active")
}
// ============== FOR MENU ================== 
let menu = document.querySelector(".menu");

document.querySelector("#menu-icon").onclick= () =>{
    menu.classList.toggle("active")
    wrap.classList.remove("active")
    searchForm.classList.remove("active")
}

// --------- FOR SEARCH ------- 
let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick= () =>{
    searchForm.classList.toggle("active")
    wrap.classList.remove("active")
    menu.classList.remove("active")
}
// ---------  WINDOW SCROLL ------- 

window.onscroll= () =>{
    wrap.classList.remove("active")
    menu.classList.remove("active")
    searchForm.classList.remove("active")
}

// ============== FOR LEFTBAR ==================

let menuToggle = document.querySelector('.menuToggle');
let leftSidebar = document.querySelector('.left-sidebar');
menuToggle.onclick =function(){
    leftSidebar.classList.toggle('active')
}
