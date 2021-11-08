// on page load, generate grid of divs inside div .container
function createGrid(n) {
    let num = n*n;
    const container = document.querySelector(".container");
        for (i=0; i<num; i++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            container.appendChild(cell);
            // let cell = document.querySelector(".cell");
            // let dimensions = 400/n + " px;";
            // cell.style.width = dimensions; 
            // cell.style.height = dimensions;
            // cell.setAttribute("style", "width: " + 400/n + "px; height: " + 400/n + "px;");
    };
    // container.setAttribute("style", "grid-template-columns: repeat(" + n +", 1fr);");
};

// on hover, change all .cell background color
function hoverBlack() {
    let color = "#000000";
    let allCells = document.querySelectorAll(".cell");
    for (let i=0; i<allCells.length; i++) {
        let cell = allCells[i];
        cell.addEventListener("mouseover", function () {
            cell.style.backgroundColor = color;
        });
    };
};

//on button press, remove hover-black style from all .cell
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
        }
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
        }
    });
};

function color() {
    let colorArray = ["#0A7B83", "#2AA876", "#FFD265", "#F19C65", "#CE4D45"];
    let color = document.querySelector("#color");
    color.addEventListener("click", function () {
        let allCells = document.querySelectorAll(".cell");
        for (let i=0; i<allCells.length; i++) {
            let cell = allCells[i];
            let randomColor = colorArray[Math.floor(Math.random()*colorArray.length)];
            cell.addEventListener("mouseover", function() {
                cell.style.backgroundColor = randomColor;
            });
        }
    });
}

//running functions
let n = 32;

function runAll() {
    createGrid(n);
    hoverBlack();
    restart();
    eraser();
    draw();
    color();
};

runAll();