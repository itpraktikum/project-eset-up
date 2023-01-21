"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const openNav = document.querySelector(".open-nav-btn"),
          header = document.querySelector("header"),
          closeNav = document.querySelector(".close-nav-btn"),
          navbar = document.querySelector(".nav-links"),
          loader = document.querySelector(".loader");

    // The started loader

    setTimeout(() => {
        loader.style.opacity = "0.7";
        setTimeout(() => {
            loader.style.display = "none";
        },200)
    },3000);

    // The started header sticky

    window.addEventListener("scroll", () => {
        header.classList.toggle("sticky", window.scrollY > 0);
    })
    
    // The started openNav and closeNav;

    openNav.addEventListener("click", () => {
        navbar.style.display = "flex";
    })

    closeNav.addEventListener("click", () => {
        navbar.style.display = "none";
    })

})