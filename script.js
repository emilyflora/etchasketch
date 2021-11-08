
    
// on page load, generate 16x16 grid of divs inside div .container
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
function changeColor() {
    let cellStyle = document.querySelectorAll(".cell");
    for (let i=0; i<cellStyle.length; i++) {
        let cell = cellStyle[i];
        cell.addEventListener("mouseover", function () {
            cell.classList.add("hover-black");
        });
    };
};

//on button press, remove hover-black style from all .cell
function restart () {
    let restart = document.querySelector("#restart");
    let allCells = document.querySelectorAll(".cell");
    restart.addEventListener("click", function() {
        for (let i=0; i<allCells.length; i++) {
            let cell = allCells[i];
            cell.classList.remove("hover-black");
            };
    });
};

//running functions
let n = 32;

function runAll() {
    createGrid(n);
    changeColor();
    restart();
};

runAll();