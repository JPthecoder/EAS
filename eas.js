const container = document.createElement("div")
container.setAttribute("id", "main")
document.body.appendChild(container);

const div1 = document.createElement("div")
div1.setAttribute("id", "square")
div1.textContent = "Box";
container.appendChild(div1);

const canvas = document.createElement("canvas")

function createCanvas(){
const canvas = document.createElement("canvas")
canvas.setAttribute("id", "meCanvas")
canvas.width = 16;
canvas.height = 16;
container.appendChild(canvas)
console.log(canvas.width, canvas.height)
};



    function draw(e){
            const myCanvas = e.target;
            const context = myCanvas.getContext("2d");
            let isDrawing = false;
            let x = 0;
            let y = 0;

            myCanvas.addEventListener("mouseenter", (e)=>{
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

            myCanvas.addEventListener("mouseenter", (e)=>{
                myCanvas.style.backgroundColor = "lightblue";
            });
        
            window.addEventListener("mouseleave", (e)=> {
                if (isDrawing){
                    drawLine(context, x, y, e.offsetX, e.offsetY);
                    x = 0;
                    y = 0;
                    isDrawing = false;
                }
            })
        
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
    
    function massCreate(){
        for (i=0; i<256; i++){
            createCanvas();
           //draw() is only executing on one div instead of the 16 created
                //To fix this, an event delegation was added to target canvas element overall
        }
    };

    const container1 = document.querySelector("#main")
    container1.addEventListener("mouseover", (e) => {
        if(e.target.tagName === "CANVAS"){
            //why does tagName have to be uppercase for it to work?
                //Due to the nature of the DOM, html elements exists as uppercase
            //why is the clicking convention still activated?
                //The event target wasn't yet added in the code so mouseover wasn't read
            draw(e);
        }})
            

    massCreate();

    //Create a responsive version of the sketch is it doesn't lose its shape
    //Create color background that randomizes rgb
        //breaking it down
            //Create color background
            //Create array to hold colors
            //Randomize by Array[random.floor/math]
            //Pair with mouseover as it enters each canvas
                //possibly store under current parent mouseover