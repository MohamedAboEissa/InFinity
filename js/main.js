/*===================================================
==================== settings =======================
================================================== */
let lis = document.querySelectorAll(".settings-box ul li");
var root = document.querySelector(':root');


let backgrounds =document.querySelectorAll(".background div");
let btnLight =document.querySelector(".background .light");
let btnDark =document.querySelector(".background .dark");
let transparent =document.querySelector(".content-page");


// ========== color ===========

if (window.localStorage.getItem("color")){
    // if there is color in local storage 
    // [1] add color to pega
    root.style.setProperty('--color', window.localStorage.getItem("color"));
    // [2] remove active class from all lis 
    lis.forEach((li) => {
        li.classList.remove("active");
    });
    // [3] add active class from all lis
    document.querySelector(`[data-theme = "${window.localStorage.getItem("color")}"]`).classList.add("active");
}

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        //remove active class from all lis 
        lis.forEach((li) => {
            li.classList.remove("active");
        });
        // add active class to current element
        e.currentTarget.classList.add("active")
        //add current color to local storage
        window.localStorage.setItem("color", e.currentTarget.dataset.theme);
        // change color to color other
        root.style.setProperty('--color', e.currentTarget.dataset.theme);
    });
});


// ======== background ========== 
if (window.localStorage.getItem("background")){
    // if there is background in local storage 
    // [1] add background to pega
    root.style.setProperty('--background', window.localStorage.getItem("background"));
    //[2]remove active class from all  
    backgrounds.forEach((b) => {
        b.classList.remove("active");
    });
    // [3] add active class from all 
    document.querySelector(`[data-background = "${window.localStorage.getItem("background")}"]`).classList.add("active");
    // [4] Delete the transparent background and Change the color of the speech to white
    if(btnDark.classList.contains('active')) {
        // Delete the transparent background
        transparent.classList.remove("active");
        // Change the color of the speech to white
        document.body.style.color = "#fff";
    };
};

backgrounds.forEach((back) => {
    back.addEventListener("click", (e) => {
        //remove active class from all  
        backgrounds.forEach((back) => {
            back.classList.remove("active");
        });
        // add active class to current element
        e.currentTarget.classList.add("active");
        //add current background to local storage
        window.localStorage.setItem("background", e.currentTarget.dataset.background);
        // change color to background other
        root.style.setProperty('--background', e.currentTarget.dataset.background);  
    });
    btnDark.addEventListener("click", () => {
        // Delete the transparent background
        transparent.classList.remove("active");
        // Change the color of the speech to white
        document.body.style.color = "#fff";
    })
    btnLight.addEventListener("click", () => {
        // add the transparent background
        transparent.classList.add("active");
        // Change the color of the speech to white
        document.body.style.color = "black";
    });
    
});



/*===================================================
============= testimonials slider ===================
================================================== */
function slider() {
    let carouselControls = document.getElementById('carousel-Controls');
    if (carouselControls) {
        carouselControls.addEventListener('slide.bs.carousel', function() {
            let activeItem = this.querySelector(".active");
            document.querySelector(".js-img").src = activeItem.getAttribute("data-js-img");
        })
    }
}
slider();


// ================== Certificates ===============================
$(document).ready(function() {

    $("#owl-demo").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]

    });

});



// ==========================
// ========= FOOTER =========
// ==========================
// Automatically update copyright year in the footer
var currentTime = new Date();
var year = currentTime.getFullYear();
$("#year").text(year);




// =========================  Courses page ========================
let switcherLis = document.querySelectorAll(".switcher li");
let box = Array.from(document.querySelectorAll(".box"));

switcherLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageBoxs);
});

// remove active class 
function removeActive() {
    switcherLis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    })
}

// manage boxs
function manageBoxs() {
    box.forEach((box) => {
        box.style.display = "none";
    });
    document.querySelectorAll(this.dataset.work).forEach((el) => {
        el.style.display = "block";
    })
};


