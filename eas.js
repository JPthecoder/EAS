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
        square.style.width = "16px";
        square.style.height = "16px";
        container.appendChild(square)
    
        square.addEventListener("mouseover", ()=> {
        square.style.backgroundColor = "red" 
    });
}};
createSquares(16);


// create another div above the drawings container xx
// create a button to hold in the button container xx
// Have the button have a prompt asking users how many square xx 
button.addEventListener("click", prompted);

function prompted(){
let question = window.prompt("How many squares would you like to make?");
if (question === null){
    alert("Cancelled")
} else if (isNaN(question)){
    alert("Error: choose a number less than 100") // prompt is create but still need to figure out how to do null answers and connect prompt to page reset
} else if (question === ""){
    alert("No answer: Input a number")
} else {
    let size = Number(question);
        if (size > 100){
            alert("Error: Enter a number less than 100")
        } else {
            container.innerHTML = "";
            createSquares(size);
        //my call stack might be presenting inability to call my function
        //do I need to create a separate function to hold my command?
            //my page is showing up blank because the arugment is different from my (question) and (size)
            console.log(createSquares())
        }
    // need to figure out how to mesh createSquares after clearing the innerHTML
}};
// Have the answer of the user reflect the new number of squares on the page
