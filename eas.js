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


// create another div above the drawings container xx
// create a button to hold in the button container xx
// Have the button have a prompt asking users how many square xx 
button.addEventListener("click", prompted);

function prompted(){
let question = Number(window.prompt("How many squares would you like to make?", ""));
if (isNaN(question)){
    alert("Error: choose a number") // prompt is create but still need to figure out how to do null answers and connect prompt to page reset
} else {
    alert("Great Choice!")
}
}
// Have the answer of the user reflect the new number of squares on the page
