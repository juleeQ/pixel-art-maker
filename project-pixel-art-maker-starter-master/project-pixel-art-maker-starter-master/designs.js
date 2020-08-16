// Select size input
const size = document.querySelector('#sizePicker').addEventListener('submit',function(evt) {
    evt.preventDefault();
    makeGrid();
});

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    const table = document.querySelector("#pixelCanvas");
    //reset table if there is existing content
    table.innerHTML = [];
    const width = document.getElementById('inputWidth').value;
    const height = document.getElementById('inputHeight').value;
    //create the grid
    for (let x=0; x<height; x++) {
        //add rows
        const row = document.createElement('tr');
        for (let y=0; y<width; y++) {
            //add columns
            const data = document.createElement('td');
            //create events on each cells and apply desired color
            data.addEventListener('click', function() {
                const color = document.querySelector('#colorPicker').value;
                data.style.background = color;
            });
            row.appendChild(data);
        };
        table.appendChild(row);
    };
};