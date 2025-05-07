const rbutton = document.createElement("div")
rbutton.setAttribute("id", "rbutton")
document.body.appendChild(rbutton);


const container = document.createElement("div")
container.setAttribute("id", "main")
document.body.appendChild(container);



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
                console.log(e.offsetX, e.offsetY)
            });

            myCanvas.addEventListener("mousemove", () =>{
                myCanvas.style.backgroundColor = "lightblue";
                            // I can add this to one of the above event listner
                            // but it doesn't solve the problem of my mouse being too quick

            }); 
        
            /*window.addEventListener("mouseleave", (e)=> {
                if (isDrawing){
                    drawLine(context, x, y, e.offsetX, e.offsetY);
                    x = 0;
                    y = 0;
                    isDrawing = false;
                }
            })*/
        
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
                //Currently, there might be too many event firing causing latenct issues
                    //mouse lines aren't firing during quick movements
                    //OR the quick mouse movements are causing events listeners to not be able to keep up
            draw(e);
        }})
            

    massCreate();

    //Create a responsive version of the sketch is it doesn't lose its shape
        //CSS?
    //Create color background that randomizes rgb
        //breaking it down
            //Create color background on hover- completed
            //Create array to hold colors
            //Randomize by Array[random.floor/math]
            //Pair with mouseover as it enters each canvas
                //possibly store under current parent mouseover


    //Create a button on top of the screen that will send the user a popup asking
    //a number of squares per side for the new grid
        //time limit : user input <= 100
        //use button tags in html
        //use prompts
        //64 should equal 64x64 on input
            // doesn't change number of pixels used (256px)
    
   
    
    const button = document.createElement("button")
    button.textContent = "Reset";
    button.setAttribute("id", "reset");
    rbutton.appendChild(button);

    button.addEventListener("click", reset);

    function reset(){
        let question = prompt("How many squares would you like to draw on?");
        if (question === null){
            console.log(question);

        } else if (question <= 100 && question > 0){
            container1.innerHTML = "";
            inputCreate();
            console.log(question);
            //I have to change massCreate() to accept user input amount
        } else if (question > 100){
            let input = prompt("Please enter a valid number")
                if (input > 100){
                    alert("Invalid: please enter a number under")
                } else {
                    container1.innerHTML = "";
                    massCreate();
                }
                // how can I make this loop recursive so it keeps on looping if the answer is over 100
                // error at entry of 100+ which won't let user move on
        }

        function inputCreate(){
            for (i=0; i<question*question; i++){
                createCanvas();
                console.log(question);
            }
        }
    }