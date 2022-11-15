"use strict";
const mobileNav = document.querySelector(".site-nav-mobile-nav");
const mobileMenu = document.querySelector(".site-nav-mobile-menu");
const heroBanner = document.querySelector(".herobanner");

const arrPic = ["banner-1.jpg", "banner-2.jpg", "banner-3.jpg"];
let picIndex = 0;
window.onload = function () {
    setInterval(function () {
        picIndex++;
        if (picIndex == arrPic.length) {
            picIndex = 0;
        }
        heroBanner.style.background = "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(assets/img/" + arrPic[picIndex] + ") no-repeat center center";
        heroBanner.style.backgroundSize = "cover";
    }, 3000);
}

let isExpand = false;
mobileNav.onclick = function () {
    mobileMenu.classList.remove("mobile-menu-ani-collapse");
    mobileMenu.classList.remove("mobile-menu-ani-expand");
    if (isExpand) {
        isExpand = false;
        //mobileMenu.style.display = "none";
        
        mobileMenu.classList.add("mobile-menu-ani-collapse");
    } else {
        isExpand = true;
        //mobileMenu.style.display ="block";
       
        mobileMenu.classList.add("mobile-menu-ani-expand");
    }
}