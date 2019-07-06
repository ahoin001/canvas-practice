console.log("I'm connected!");

// let myDiv = document.querySelector('#thing');
// myDiv.innerHTML = "<h1> Blah </h1> ";
// myDiv.innerHTML += "<h2> kazam </h2>";

function moveRect(x, y) {


    const theCanvas = document.getElementById("example");


    // 2d context is where everything happens in canvas
    // it holds all the methods for drawing things and animation 
    const ctx = theCanvas.getContext("2d");

    // clear whole canvas to simulate animation
    // makes clear rectangel the size of canvas to make canvas look clear
    // 0 => x
    // 0 => y
    // 300 => width (comes from index.html where we defined it)
    // 300 => height (comes from index.html where we defined it)
    ctx.clearRect(0, 0, 300, 300);



    // colors rectangle in the given color (before its created)
    ctx.fillStyle = "red";

    // given method that creates rectangle - ctx.fillRect(x, y, width, height)
    ctx.fillRect(x, y, 50, 50);
    // ctx.fillStyle = "red";
    
    // move rect on x axis by 3
    x += 3;
    // whenever it is divisble on x axis by 10, move down 5 
    if (x % 10 === 0) {
        y += 5;
    }

    // calls itself every 30ms => RECURSIVE FUNCTION
    setTimeout(`moveRect(${x}, ${y})`, 30);


    // summary: 
    // makes canvas appear clear with clear rect
    // create a new filled red square
    // move rect 3px on x
    // function calls itself then quickly clearrects the canvas and then places red square in new position it looks like a smooth animation
}