// after sizes submission, the makeGrid() function is called
document.querySelector('#sizePicker').addEventListener('submit', function (evt) {
    evt.preventDefault();  //prevent form method to refresh the page
    makeGrid();
});

function makeGrid() {
    const table = document.querySelector("#pixelCanvas");
    //reset table if there is existing content
    table.innerHTML = [];
    //store the width and height sumbit by the user for later use
    const width = document.getElementById('inputWidth').value;
    const height = document.getElementById('inputHeight').value;
    //create the grid with the help of a for loop using the sizes submitted
    for (let x=0; x<height; x++) {
        //add rows
        var row = table.insertRow();
        for (let y=0; y<width; y++) {
            //add columns
            const data = row.insertCell();
            //create events on each cells and apply desired color
            data.addEventListener('click', function() {
                //evaluate the current color chosen and apply it to the cell clicked
                const color = document.querySelector('#colorPicker').value;
                data.style.background = color;
            });
        };
    };
};