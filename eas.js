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
canvas.width = 160;
canvas.height = 160;
container.appendChild(canvas)
console.log(canvas.width, canvas.height)
};

const canvas1 = document.createElement("canvas")
canvas1.setAttribute("id", "canvas1")
canvas1.width = 160;
canvas1.height = 160;
container.appendChild(canvas1)
console.log(canvas1.width, canvas1.height)


window.addEventListener("mouseleave", (e)=> {
        if (isDrawing){
            drawLine(context, x, y, e.offsetX, e.offsetY);
            x = 0;
            y = 0;
            isDrawing = false;
        }
    });

container.addEventListener("mousemove", newColor);

 function newColor(e){
    let target = e.target;

    if (target.id === "canvas"){
    container.style.backgroundColor = Math.floor(Math.random()*543154);
    //trying to create random color
}
};

    function draw(){
        const myCanvas = document.getElementById('meCanvas')
            const context = myCanvas.getContext("2d");
            let isDrawing = false;
            let x = 0;
            let y = 0;
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
        for (i=0; i<15; i++){
            createCanvas();
            draw();
            //draw() is only executing on one div instead of the 16 created
        }
    };

    let container1 = document.querySelector("#main")
    container1.addEventListener("mouseover", (e) => {
        let target = e.target;

        switch(target.id){
        case 'meCanvas':
            draw();
            break;
        }})
            


    
    massCreate();

    /*
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

*/


/*
container.addEventListener("mousemove", drawMe());

 function drawMe(e){
    let target = e.target;

    if (target.id === "canvas"){
        draw();
    }
}; */
