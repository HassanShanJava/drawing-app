let canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
//to draw anything on the canvas we need to have a context on canvas
let ctx = canvas.getContext("2d");
//to increase line width
ctx.lineWidth=5;



//to draw between two point
let prevX = null;
let prevY = null;


//to chane colors
let clrs=document.querySelectorAll(".clr");
//gives a node list so now we convert it
clrs=Array.from(clrs);
clrs.forEach((clr)=>{
    clr.addEventListener("click",()=>{
        //this way not working so use data atributes ===ctx.strokeStyle=ctx.backgroundColor
        
        
        //alert(clr.dataset.clr);
        ctx.strokeStyle=clr.dataset.clr
    })
})


//to clear the screen
let clearBtn=document.querySelector(".clear");
clearBtn.addEventListener("click", ()=>{
    //alert("click");

    //start from 0,0 then end til canvas,width nd height
    ctx.clearRect(0,0,canvas.width,canvas.height);

})

//to save drawing
let saveBtn=document.querySelector(".save");
saveBtn.addEventListener("click", ()=>{
    //alert("save");
    
    //to save and img/png type
    let data=canvas.toDataURL('img/png');

    //console.log(data)

    //to anchor the img 4 download
    let a = document.createElement("a");
    a.href=data;
    a.download="drawing.png";
    a.click();

})


//to draw when using mouse
let draw = false
window.addEventListener('mousedown', (e) => draw = true)
window.addEventListener('mouseup', (e) => draw = false)



//using the mouse to draw
window.addEventListener('mousemove', function (e) {
    if (prevX == null || prevY == null || !draw) {
        prevX = e.clientX
        prevY = e.clientY
        return
    }

    let mouseX = e.clientX
    let mouseY = e.clientY
    //console.log(mouseX, mouseY);

    //to start drawing

    //circle
    ctx.beginPath()

    //x,y-cord, radius, starting angle, Pi-for 360 angle
    //ctx.arc(mouseX,mouseY,5,0,Math.PI*2)


    ctx.moveTo(prevX, prevY)
    ctx.lineTo(mouseX, mouseY)
    ctx.stroke()


    prevX = e.clientX
    prevY = e.clientY
})