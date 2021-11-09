//use slider to change grid size
let slider = document.querySelector("#slider");
let size = document.querySelector(".size");
let size2 = document.querySelector(".size2");
size.innerHTML = slider.value;
size2.innerHTML = slider.value;
slider.oninput = function () { 
    size.innerHTML = this.value;
    size2.innerHTML = this.value;
};

// on page load, generate grid of divs inside div .container
function createGrid(n) {
    let num = n*n;
    let dimensions = 500/n;
    let container = document.querySelector(".container");
    for (i=0; i<num; i++) {
        let createCell = document.createElement("div");
        createCell.classList.add("cell");
        container.appendChild(createCell);
    };
    let allCells = document.querySelectorAll(".cell");
    for (i=0; i<num; i++) {
        let cell = allCells[i];
        cell.style.width = dimensions + "px"; 
        cell.style.height = dimensions + "px";
    };
    container.style.gridTemplateColumns = "repeat(" + n + ", 1fr)";
};

// on hover, change all .cell background color
function black() {
    let color = "#000000";
    let allCells = document.querySelectorAll(".cell");
    for (let i=0; i<allCells.length; i++) {
        let cell = allCells[i];
        cell.addEventListener("mouseover", function () {
            cell.style.backgroundColor = color;
        });
    };
};

//on button press, remove mouseover from all .cell
function restart () {
    let color = "#FFFFFF";
    let black = "#000000";
    let restart = document.querySelector("#restart");
    let allCells = document.querySelectorAll(".cell");
    restart.addEventListener("click", function() {
        for (let i=0; i<allCells.length; i++) {
            let cell = allCells[i];
            cell.style.backgroundColor = color;
            cell.addEventListener("mouseover", function () {
                cell.style.backgroundColor = black;
            });
        };
    });
};

//when eraser button pressed, change hover state to white
function eraser() {
    let color = "#FFFFFF";
    let eraser = document.querySelector("#eraser");
    eraser.addEventListener("click", function () {
        let allCells = document.querySelectorAll(".cell");
        for (let i=0; i<allCells.length; i++) {
            let cell = allCells[i];
            cell.addEventListener("mouseover", function() {
                cell.style.backgroundColor = color;
            });
        };
    });
};

//when draw button pressed, allow hover to draw black
function draw() {
    let color = "#000000";
    let black = document.querySelector("#black");
    black.addEventListener("click", function () {
        let allCells = document.querySelectorAll(".cell");
        for (let i=0; i<allCells.length; i++) {
            let cell = allCells[i];
            cell.addEventListener("mouseover", function() {
                cell.style.backgroundColor = color;
            });
        };
    });
};

//when color button pressed, allow hover to draw random color in each cell
function color() {
    const colorArray = ["#88F7E2", "#44D492", "#F5EB67", "#FFA15C", "#FA233E", "#889df7"];
    let color = document.querySelector("#color");
    color.addEventListener("click", function () {
        let allCells = document.querySelectorAll(".cell");
        for (let i=0; i<allCells.length; i++) {
            let cell = allCells[i];
            let randomColor = colorArray[Math.floor(Math.random()*colorArray.length)];
            cell.addEventListener("mouseover", function() {
                cell.style.backgroundColor = randomColor;
            });
        };
    });
};

//running functions
function runAll() {
    createGrid(32);
    black();
    restart();
    eraser();
    draw();
    color();
};

runAll();