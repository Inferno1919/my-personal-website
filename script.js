document.getElementById("fillerOne").style.left = "50%";
document.getElementById("fillerTwo").style.left = "25%";
document.getElementById("fillerThree").style.left = "75%";
document.getElementById("fillerOne").style.top = "50%";
var selectionDim = document.querySelector("#fillerOne");
var currWidth = selectionDim.clientWidth;
var posOne = document.getElementById("fillerOne").style.left;

relocate();

window.addEventListener('resize', relocate);

function relocate() {
   
    selectionDim = document.querySelector("#fillerOne");
    currWidth = selectionDim.clientWidth;
    currWidth = (currWidth/2);

    document.getElementById("fillerOne").style.marginLeft= (`-${currWidth}px`);
    document.getElementById("fillerTwo").style.marginLeft = (`-${currWidth}px`);
    document.getElementById("fillerThree").style.marginLeft = (`-${currWidth}px`);
}
