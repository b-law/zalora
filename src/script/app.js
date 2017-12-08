// Variables
var sizeButton = document.querySelector(".section-aside__size-select");
var sizeModalActive = document.querySelector(".section-modal");
var sizeModalBackground = document.querySelector(".section-modal__background");
var sizeType = document.querySelector(".section-modal__sizechart");
var sizeInputTitle = document.querySelector(".section-aside__size-select-title");
var addButton = document.getElementById("section-aside__add");


// Sizing modal active, add class
function modalOn() {
    sizeModalActive.classList.add("active");
};

sizeButton.addEventListener("click", modalOn);



// Sizing modal NOT active, remove class
function modalOff() {
    sizeModalActive.classList.remove("active");
};

sizeModalBackground.addEventListener("click", modalOff);



// Select size
function sizeInput(e) {
    var target = e.target.innerHTML;
    if(target === "Choose Size") {
        return;
    }
    modalOff();
    sizeInputTitle.innerHTML = target;
};

sizeType.addEventListener("click", sizeInput);


// Remove class active to ADD TO BAG button
function buttonOff() {
    addButton.classList.remove("active");
    addButton.innerHTML= "ADD TO BAG"
}


// Add class active to ADD TO BAG button
function buttonOn() {
    addButton.classList.add("active");
    addButton.innerHTML = "<svg class=\"section-aside__size-select-title-tick\" xmlns=\"http:\/\/www.w3.org/2000/svg\" width=\"19\" height=\"14\" viewBox=\"346.101 225.023 19.72 15.087\"><path fill=\"none\" stroke-miterlimit=\"10\" d=\"M347.173 231.536l6.287 6.413 11.273-11.894\"/></svg>" + "ADDED TO BAG";
}

function buttonClicked() {
    setTimeout(buttonOff, 1000);
    buttonOn();
};


function addToBag(e) {
    // if size is not selected, size modal appears and ADD TO BAG button turns active
    if(sizeInputTitle.innerHTML === "Choose Size") {
        modalOn();
        return;
    }

    buttonClicked();
};

addButton.addEventListener("click", addToBag);
