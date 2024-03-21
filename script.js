
// offcanvas
const navBar = document.querySelector(".nav-bar");
const hamburger = document.querySelector(".hamburger-icon");
hamburger.onclick = function() {
    navBar.classList.toggle("active");
};

// offcanvas

//login modal
let loginBtn = document.querySelector("#login-btn");
let signUpBtn = document.querySelector("#signup-btn");
let alAcc = document.querySelector("#already-account");
signUpBtn.onclick= () => {
    signUpBtn.classList.add("btn-active");
    loginBtn.classList.remove("btn-active");
    document.querySelector(".signup-form").style.display = "flex";
    document.querySelector(".login-form").style.display = "none";
};
const switchToLogin = () => {
    signUpBtn.classList.remove("btn-active");
    loginBtn.classList.add("btn-active");
    document.querySelector(".signup-form").style.display = "none";
    document.querySelector(".login-form").style.display = "flex";
};
loginBtn.onclick = switchToLogin;
alAcc.onclick = switchToLogin;

const openLoginModal = document.querySelector(".login-signup");
openLoginModal.onclick = () => {
    document.querySelector(".modal").classList.add("open-modal");
    document.querySelector(".hero-section").style.filter = "blur(5px)";
    document.querySelector("nav").style.filter = "blur(5px)";
}

const closeLoginModal = document.getElementById("close-btn");
const closeModal = () => {
    document.querySelector(".modal").classList.remove("open-modal");
    document.querySelector(".cart-modal").classList.remove("open-modal");
    document.querySelector(".hero-section").style.filter = "none";
    document.querySelector("nav").style.filter = "none";
}
closeLoginModal.onclick = closeModal;

//login modal

//cart modal
let cartBtn = document.querySelector(".cart");
cartBtn.onclick = () => {
    document.querySelector(".cart-modal").classList.add("open-modal");
}

document.querySelector("#cart-close-btn").onclick = closeModal;

//cart modal

//reviews
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
      breakpoints: {
        450: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
  });
//reviews





