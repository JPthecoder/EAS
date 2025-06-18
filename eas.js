const upperContainer = document.createElement("div");
upperContainer.id = "upper"
document.body.appendChild(upperContainer);

const button = document.createElement("button");
button.id = "prompt";
button.textContent = "Click to Reset"
button.style.fontSize = "24px";
button.style.width = "300px";
button.style.height = "70px";
upperContainer.appendChild(button);

const container = document.createElement("div");
container.id = "drawings";
document.body.appendChild(container);

function createSquares(size){
    for (i = 0; i<size * size; i++){
        const square = document.createElement("div");
        square.id = "square";
        square.style.width = "160px";
        square.style.height = "160px";
        container.appendChild(square)
    
        square.addEventListener("mouseover", ()=> {
        square.style.backgroundColor = "red" 
    });
}};
createSquares(4);


// create another div above the drawings container
// create a button to hold in the button container
// Have the button have a prompt asking users how many square
// Have the answer of the user reflect the new number of squares on the page