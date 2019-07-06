const theCanvas = document.getElementById("example");

// 2d context is where everything happens in canvas
// it holds all the methods for drawing things and animation 
const ctx = theCanvas.getContext("2d");

// draw rectangle

// change color of "ink on our pen"
ctx.fillStyle = "blue";
// draw 
ctx.fillRect(220, 220, 40, 40);


// draw text
// change color of "ink on our pen"
ctx.fillStyle = "pink";
// font of pen
ctx.font = "30px Arial";

// draw
// pattern to follow:
// ctx.fillText("text we want to add", x, y); x, y are the coordinates where the text is going to appear
ctx.fillText("PTWD rulls!", 20, 50);


// draw path
// called to begin a line , i think this is similar to prepsringg to draw with pen
ctx.beginPath(); // step: 1

// starting position is x=50; y=50
ctx.moveTo(50, 80); // step: 2

// the final coordinates are (220, 50)
ctx.lineTo(220, 80); // step 3

// lift pen 
// ctx.stroke(); // step: 4


// ctx.moveTo(220, 80);

// from postion of last lineto, draw path to this one
ctx.lineTo(220, 100);

// draw using the instructions given above
ctx.stroke();

ctx.closePath(); // step 5


// draw circle

ctx.beginPath();

// follow the pattern:
// ctx.arc(x, y, radius, startAngle, endAngle);
ctx.arc(150, 150, 50, 0, Math.PI * 2);

ctx.strokeStyle = "orange";

ctx.lineWidth = 7;

// draw using the instructions given above
ctx.stroke();

// end instrcutions
ctx.closePath();

// new instructions for new drawing
ctx.beginPath();

// follow the pattern:
// ctx.arc(x, y, radius, startAngle, endAngle);
ctx.arc(150, 150, 30, 4, 10);

ctx.strokeStyle = "red";

ctx.lineWidth = 4;

ctx.stroke();

ctx.closePath();