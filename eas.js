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
                myCanvas.style.backgroundColor = `rgb(${Math.floor(255 - 14 * x)} ${Math.floor(
                    255 - 14 * y,
                  )} ${x*y} / 0.25)`;
                  console.log(myCanvas.style.backgroundColor)
                  console.log(x)
                  console.log(y)
                  //context.fillRect(x * 25, y * 25, 25, 25);
            
        
            myCanvas.addEventListener("mousemove", (e) => {
                if (isDrawing){
                    drawLine(context, x, y, e.offsetX, e.offsetY);
                x = e.offsetX;
                y = e.offsetY;
                }
               
                console.log(e.offsetX, e.offsetY)
               
            });


            myCanvas.addEventListener("mousemove", () =>{
                //myCanvas.style.backgroundColor = "lightblue";
                            // I can add this to one of the above event listner
                            // but it doesn't solve the problem of my mouse being too quick

                /* myCanvas.fillRect= `rgb(${Math.floor(255-42*x)} ${Math.floor(255 - 42.5 * y)} 0)`;
                myCanvas.fillStyle(x * 25, y * 25, 25, 25); */
                
                
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
        
    })};
    
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
        //time limit : user input <= 100 -> Still need to accomplish this
        //use button tags in html
        //use prompts
        //64 should equal 64x64 on input
            // doesn't change number of pixels used (256px)
    
   
    
    const button = document.createElement("button")
    button.textContent = "New Canvas";
    button.setAttribute("id", "reset");
    rbutton.appendChild(button);

    button.addEventListener("click", reset);

    /*function reset(){
        let question = prompt("How many squares would you like to draw on?");
        if (question === null){
            console.log(question);

        } else if (question <= 100 && question > 0){
            container1.innerHTML = "";
            questionCreate();
            console.log(question);
            //I have to change massCreate() to accept user input amount
        } else if (question > 100){
            let input = prompt("Please enter a valid number")
                if (input > 100){
                    let input = prompt("Invalid: please enter a number under 100")
                        //let only allows the prompt to be excuted once
                        // without let you can ensure its called on each iteration within the conditon
                    //alert("Invalid: please enter a number under")
                        if (Number(input) < 100){
                            container1.innerHTML = "";
                            inputCreate();
                        } else {
                            alert("Error: canvas is restarting")
                            container1.innerHTML = "";
                            massCreate();
                        }
                // how can I make this loop recursive so it keeps on looping if the answer is over 100
                // error at entry of 100+ which won't let user move on
                        //I'm looking into prompt box and adding restrictions but there aren't much room for edits
        }}

        function questionCreate(){
            for (i=0; i<question*question; i++){
                createCanvas();
            }
        }
        function inputCreate(){
            for (i=0; i<input*input; i++){
                createCanvas();
            }
            console.log(inputCreate())
        }
        console.log(reset())
    } */

    function reset(){
        let question;
        do {
            question = prompt("Type a number from 1 to 100 to build your canvas")

                if (question === null){
                    //alert("Choose a number between 1 and 100 for your canvas size")
                    return;
                }

                question = Number(question);

                if (question < 101 && question > 0){
                    container1.innerHTML = ""
                    questionCreate();  
                 
                    break;
                } else {
                    alert("Invalid answer: Choose between 1 and 100");
                }

            
        } while (question <= 0 || question > 100)
            
        
        function questionCreate(){
            for (i = 0; i < question*question; i++){
                createCanvas();
                
            }
        }
    }
        
   

    // used a do...while loop because it helps add the constraints and won't accept the user answer until its met
    // versus an if...else loop you have to set it up multiple times to be dynamic
    

//Create a rgb randomizer for the boxes
        
    
/* myCanvas.addEventListener("mousemove", () =>{
    myCanvas.style.backgroundColor = "lightblue";
    
    myCanvas.style.backgroundColor = 

        context.fillStyle = `rgb($(Math.floor(255-42.5 *i)))
        rgb(Math.floor(Math.random()* 255))

    })

   

    function rgb() {
        const myCanvas = document.getElementById("canvas").getContext("2d");
        
            myCanvas.fillStyle = `rgb(${Math.floor(255 - 42.5 * x)} ${Math.floor(
              255 - 42.5 * y,
            )} 0)`;
            myCanvas.fillRect(x * 25, y * 25, 25, 25);
          }
        rgb();

        */

      
          