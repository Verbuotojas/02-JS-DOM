//pirma

let p = document.querySelector("p");
let buttonRed = document.getElementById("btnRed");
let buttonYellow = document.getElementById("btnYellow");
let buttonGreen = document.getElementById("btnGreen");



buttonRed.addEventListener("click", function () {
    p.style.color = "red";
});
buttonGreen.addEventListener("click", function () {
    p.style.color = "green";
});
buttonYellow.addEventListener("click", function () {
    p.style.color = "yellow";
});

//antra
let img = document.getElementById("foto");
let buttonB = document.getElementById("big");
let buttonS = document.getElementById("small");


buttonB.addEventListener("click", function () {
    img.style.width = "100%";
    img.style.height = "auto";
});


buttonS.addEventListener("click", function () {
    img.style.width = "25%";
    img.style.height = "auto";
});

//trecia


let buttonFir = document.getElementById("firstFoto");
let buttonSec = document.getElementById("secondFoto");
let imgSecond = document.getElementById("foto2");


buttonSec.addEventListener("click", function () {
    imgSecond.setAttribute("src", "../IMG/burn.jpg");

});

buttonFir.addEventListener("click", function () {
    imgSecond.setAttribute("src", "../IMG/disc.jpg");

});

//Ketvirtas

function toggleText() {
    var text = document.getElementById("title");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}


//Penktas

function toggleTextNext() {
    var text = document.getElementById("respond");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function functionSubmint() {
    alert("Grazu... kaip visada");


    var text = document.getElementById("respond");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}


//Sestas


let imgLast = document.getElementById("fotoLast");
let imgLastH = document.getElementById("fotoLastH");
let buttonLeft = document.getElementById("buttonLeft");
let buttonRight = document.getElementById("buttonRight");
let buttonHide = document.getElementById("buttonHide");
let buttonBottom = document.getElementById("buttonDown");
let buttonUndo = document.getElementById("buttonUndo");

buttonLeft.addEventListener("click", function () {

    imgLast.style.cssFloat = "left";
});


buttonRight.addEventListener("click", function () {

    imgLast.style.cssFloat = "right";
});

buttonHide.addEventListener("click", function () {

    imgLast.style.display = "none";
});


buttonBottom.addEventListener("click", function () {


if(imgLastH.style.display === "none"){
    imgLastH.style.display = "flex";
    imgLast.style.display = "none";
}
    else{
        imgLastH.style.display = "none";
         imgLast.style.display = "flex";
    }


});

//buttonBottom.addEventListener("click", function () {
//    
//    
//    if (imgLastH.style.display === "none") {
//        imgLastH.style.display = "flex";
//    } else {
//        imgLastH.style.display = "none";
//    }
//}
//    
//    
//    imgLast.style.cssFloat = "absolute";
//});



buttonUndo.addEventListener("click", function () {
    imgLast.setAttribute("style", "");
});
