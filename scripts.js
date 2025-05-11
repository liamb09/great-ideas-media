var screenHeight;
var screenWidth;
var imageWidth;
var areaHeight;

document.addEventListener("DOMContentLoaded", function () {
    resizePage();

    // Setup hover actions for text
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

    // Setup streak
    const streakStart = localStorage.getItem("greatIdeasMediaStreakStart");
    const daysSinceEpoch = Math.floor(Date.now()/1000/60/60/24);
    if (streakStart === null) {
        localStorage.setItem("greatIdeasMediaStreakStart", daysSinceEpoch);
    }
    var currentStreak;
    if (parseInt(localStorage.getItem("greatIdeasMediaStreakLast")) + 1 >= daysSinceEpoch) {
        currentStreak = daysSinceEpoch - parseInt(localStorage.getItem("greatIdeasMediaStreakStart")) + 1;
    } else {
        localStorage.setItem("greatIdeasMediaStreakStart", daysSinceEpoch);
        currentStreak = 1;
    }
    localStorage.setItem("greatIdeasMediaStreakLast", daysSinceEpoch);
    document.getElementById("streak-live").style.opacity = "1";
    document.getElementById("streak-num").innerHTML = currentStreak-1;
    setTimeout(function () {
        document.getElementById("streak-num").innerHTML = currentStreak;
    }, 1000);
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