// Your code goes here

// Selectors 

let signupBtn1 = document.querySelectorAll(".btn")[0];
let signupBtn2 = document.querySelectorAll(".btn")[1];
let signupBtn3 = document.querySelectorAll(".btn")[2];
let funBusPic = document.getElementById("fun-bus-img");
let boatPic = document.getElementById("boat-photo");
let headerBar = document.querySelectorAll(".main-navigation .container .nav-container");
let funInSun = document.getElementById("fun-in-sun");
let logoHeading = document.querySelector(".logo-heading");
let adventurePic = document.getElementById("adventure-img");
let funPic = document.getElementById("fun-img");

// click - changes first signup button to green on click

signupBtn1.addEventListener('click', event => {signupBtn1.style.backgroundColor = "green";
signupBtn1.style.color = "white";});


// doubleclick - creates alert popup on double click

signupBtn3.addEventListener('dblclick', event => {
    alert("Sign up for an island getaway now!");
});

// mouseover - turns second signup button purple on mouseover

signupBtn2.addEventListener('mouseover', event => {
    signupBtn2.style.backgroundColor = "purple"; 
    signupBtn2.style.color = "white";
})

// mouseout - reverts second signup button to original colors on mouseout

signupBtn2.addEventListener('mouseout', event => {
    signupBtn2.style.backgroundColor = "#17a2b8";
    signupBtn2.style.color = "white";
})

//auxclick -- turns fun in the sun paragraph orange on right click

funInSun.addEventListener('auxclick', event => {
    funInSun.style.backgroundColor = "orange";
});


// drag -- alert pops up when you try to drag the boat photo

boatPic.addEventListener('dragstart', event => {
    alert("You can't drag stuff on this page!");
})

// mouseenter -- going onto logo changes text 

logoHeading.addEventListener('mouseenter', event => {
logoHeading.innerHTML = "GOATS TAKE OVER"});

// mouseleave -- going off the logo changes text back

logoHeading.addEventListener('mouseleave', event => {
    logoHeading.innerHTML = "Goats are here to stay. MWAHAHA"
});

// mousemove -- goat picture pops up on fun bus image

funBusPic.addEventListener('mousemove', event => {
funBusPic.setAttribute("src", "img/goat-in-sweater.jpg")});


// mousedown -- when mousedown, changes to baby goat pic

boatPic.addEventListener('mousedown', event => {
    boatPic.setAttribute("src", "img/babygoat.jpg")
});


// contextmenu -- when right click, image changes to goat

funPic.addEventListener('contextmenu', event => {
    funPic.setAttribute("src", "img/goathead.jpg")
});