var screenHeight;
var screenWidth;
var imageWidth;
var areaHeight;

// Resize image on page load or resize
document.addEventListener("DOMContentLoaded", function () {
    resizePage();

    document.getElementById("1").addEventListener("mouseover", function () {
        document.getElementById("postman").style.opacity = "100%";
    });
    document.getElementById("1").addEventListener("mouseout", function () {
        document.getElementById("postman").style.opacity = "0";
    });

    document.getElementById("2").addEventListener("mouseover", function () {
        document.getElementById("mcluhan").style.opacity = "100%";
    });
    document.getElementById("2").addEventListener("mouseout", function () {
        document.getElementById("mcluhan").style.opacity = "0";
    });

    document.getElementById("3").addEventListener("mouseover", function () {
        document.getElementById("debord").style.opacity = "100%";
    });
    document.getElementById("3").addEventListener("mouseout", function () {
        document.getElementById("debord").style.opacity = "0";
    });
});
window.addEventListener('resize', resizePage);

function resizePage () {
    screenHeight = document.documentElement.clientHeight;
    screenWidth = document.documentElement.clientWidth;
    imageWidth = Math.round(screenHeight*0.75/2436*1125);
    areaHeight = Math.round(screenHeight*0.75/3);
    
    // Resize image areas
    document.getElementById("1").setAttribute("coords", `0,0,${imageWidth},${areaHeight}`);
    document.getElementById("2").setAttribute("coords", `0,${areaHeight},${imageWidth},${areaHeight*2}`);
    document.getElementById("3").setAttribute("coords", `0,${areaHeight*2},${imageWidth},${areaHeight*3}`);

    // Resize text boxes
    document.getElementById("postman").style.width = `calc(${(screenWidth - imageWidth)/2}px - 4rem)`;
    document.getElementById("postman").style.top = `calc(${screenHeight*0.125}px + 1rem)`;
    document.getElementById("mcluhan").style.width = `calc(${(screenWidth - imageWidth)/2}px - 4rem)`;
    document.getElementById("mcluhan").style.top = `calc(${screenHeight*0.125 + areaHeight*1.5}px)`;
    document.getElementById("debord").style.width = `calc(${(screenWidth - imageWidth)/2}px - 4rem)`;
    document.getElementById("debord").style.bottom = `calc(${screenHeight*0.125}px + 1rem)`;
}