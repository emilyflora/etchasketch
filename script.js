// on page load, generate 16x16 grid of divs inside div .container

function createGrid(n) {
    let num = n*n;
    const container = document.querySelector(".container");
        for (i=0; i<num; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            container.appendChild(cell);
            cell.setAttribute("style", "width: " + 400/n + "px; height: " + 400/n + "px;");
    };
    container.setAttribute("style", "grid-template-columns: repeat(" + n +", 1fr);");
};

createGrid(32);
