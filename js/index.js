// Your code goes here

// Selectors 

let signupBtn1 = document.querySelectorAll(".btn")[0];
let signupBtn2 = document.querySelectorAll(".btn")[1];
let signupBtn3 = document.querySelectorAll(".btn")[2];
let funBusPic = document.getElementById("fun-bus-img");
let boatPic = document.getElementById("boat-photo");
let paragraphs = document.querySelectorAll("p"); 
let funInSun = document.getElementById("fun-in-sun");
let logoHeading = document.querySelector(".logo-heading");
let adventurePic = document.getElementById("adventure-img");
let funPic = document.getElementById("fun-img");
let navBar = document.querySelectorAll(".nav-link");
let headings = document.querySelectorAll("h2, h4");
let headerBar = document.querySelector(".main-navigation");
// click - changes first signup button to green on click

signupBtn1.addEventListener('click', event => {signupBtn1.style.backgroundColor = "green";
signupBtn1.style.color = "white";});


// doubleclick - creates alert popup on double click

signupBtn3.addEventListener('dblclick', event => {
    alert("Sign up for a goat getaway now!");
    event.stopPropagation();
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
    logoHeading.innerHTML = "Goats are here to stay. MWAHAHA"; 
    event.stopPropagation();
});

// mousemove -- goat picture pops up on fun bus image

funBusPic.addEventListener('mousemove', event => {
funBusPic.setAttribute("src", "img/goat-in-sweater.jpg")
event.stopPropagation();
});




// mousedown -- when mousedown, changes to baby goat pic

boatPic.addEventListener('mousedown', event => {
    boatPic.setAttribute("src", "img/babygoat.jpg")
}); 


adventurePic.addEventListener('mousedown', event => {
    adventurePic.setAttribute("src", "img/chillgoat.jpg")
}); 


// contextmenu -- when right click, image changes to goat

funPic.addEventListener('contextmenu', event => {
    funPic.setAttribute("src", "img/goathead.jpg")
});



paragraphs.forEach( element => 
    element.addEventListener('mouseenter', event => {
        element.innerHTML = "GOATS GOATS GOATS GOATS GOATS GOATS GOATS GOATS GOATS BAAAAAA GOATS GOATS GOATS GOATS GOATS GOATS GOATS GOATS GOATS KIDS AND GOATS AND KIDS AND GOATS AND KIDS AND BAAAAA GOATS. GOATS. GOT GOATS?";
    })
    ); 


navBar.forEach( element => {
    element.addEventListener('click', event => {
    element.innerHTML = "GOAT";
    event.stopPropagation()}); 
}) 


headings.forEach( element => element.addEventListener('mouseover', event => {
    element.innerHTML = "GOATS ARE TAKING OVER!";
    event.stopPropagation();
})
); 

headings.forEach( element => element.addEventListener('mouseleave', event => {
    element.innerHTML = "GOATS ARE HERE TO STAY!"; 
    event.stopPropagation();
}));

headerBar.addEventListener('click', event => {
    event.target.style.backgroundColor = "lightgray";
    event.stopPropagation();
});