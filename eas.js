const container = document.createElement("div")
container.setAttribute("id", "main")
document.body.appendChild(container);

/*const div1 = document.createElement("div")
div1.setAttribute("id", "square")
div1.textContent = "Box";
container.appendChild(div1);*/

const canvas = document.createElement("canvas")
canvas.setAttribute("id", "canvas1")
canvas.width = 560;
canvas.height = 360;
document.body.appendChild(canvas)
console.log(canvas.width, canvas.height)

/* div1.addEventListener("mousemove", newColor);

 function newColor(e){
    let target = e.target;

    if (target.id === "square"){
    div1.style.backgroundColor = "lightblue";

}
}; */
function draw(){
    let isDrawing = false;
    let x = 0;
    let y = 0;
    const myCanvas = document.getElementById("canvas1");
    const context = myCanvas.getContext("2d");

    myCanvas.addEventListener("mouseover", (e)=>{
        x = e.offsetX;
        y = e.offsetY;
        isDrawing = true;
    });

    myCanvas.addEventListener("mousemove", (e) => {
        if (isDrawing){
            drawLine(context, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
        }
    });

    window.addEventListener("mouseleave", (e)=> {
        if (isDrawing){
            drawLine(context, x, y, e.offsetX, e.offsetY);
            x = 0;
            y = 0;
            isDrawing = false;
        }
    });

    function drawLine(context, x1, y1, x2, y2){
        context.beginPath();
        context.strokeStyle = "black";
        context.lineWidth = "1";
        context.moveTo(x1,y1);
        context.lineTo(x2,y2);
        context.stroke();
        context.closePath();
    }

};

draw();

function drawAgain(){
    let isDrawing = false;
    let x = 0;
    let y = 0;
    const myCanvas = document.querySelector("canvas");
    const context = myCanvas.getContext("2d");

    myCanvas.addEventListener("mouseover", (e)=>{
        x = e.offsetX;
        y = e.offsetY;
        isDrawing = true;
    });

    myCanvas.addEventListener("mousemove", (e) => {
        if (isDrawing){
            drawLine(context, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
        }
    });

    window.addEventListener("mouseleave", (e)=> {
        if (isDrawing){
            drawLine(context, x, y, e.offsetX, e.offsetY);
            x = 0;
            y = 0;
            isDrawing = false;
        }
    });

    function drawLine(context, x1, y1, x2, y2){
        context.beginPath();
        context.strokeStyle = "black";
        context.lineWidth = "1";
        context.moveTo(x1,y1);
        context.lineTo(x2,y2);
        context.stroke();
        context.closePath();
    }
};
drawAgain();