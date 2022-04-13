const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d"); // Get Context of 2D Canvas

/**
 * fillRect: To Create Solid Reactangle
 * fillRect(x-axis, y-axis, width, height)
*/
// ctx.fillStyle = "blue";
// ctx.fillRect(20, 20, 150, 150);

// ctx.fillStyle = "purple";
// ctx.fillRect(200, 20, 150, 150);

/**
 * strokeRect: To Create Empty Reactangle
 * strokeRect(x-axis, y-axis, width, height)
*/
// ctx.lineWidth = 2;
// ctx.strokeStyle = "blue";
// ctx.strokeRect(20, 20, 150, 150);

/**
 * clearRect: To Clear Rectangle Space From Entire Canvas
 * clearRect(x-axis, y-axis, width, height)
*/
// ctx.fillRect(0, 0, 500, 500);
// ctx.clearRect(20, 20, 100, 100);

/**
 * fillText: To Create FillText
 * fillText("Content", x-axis, y-axis)
*/
// ctx.fillText("Hello World", 50, 50);

/**
 * strokeText: To Create Stroke Text
 * strokeText("Content", x-axis, y-axis)
*/
// ctx.font = '50px Arial';
// ctx.strokeText("Hello World", 50, 50);

// Path
// ctx.beginPath(); // Start Path
// ctx.moveTo(250, 250); // Move Pointer to Specific Coordinates
// ctx.lineTo(0, 0); // Draw Line From Specified Coordinates
// ctx.stroke(); // Draw Stroked Line

// Circle
// ctx.arc(150, 150, 50, 0, Math.PI * 2);
// ctx.fillStyle = "purple";
// ctx.fill();

// Animation
const circle = {
    x: 50,
    y: 50,
    size: 50,
    dX: 5,
    dY: 4
};

function drawCircle() {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
    ctx.fillStyle = "purple";
    ctx.fill();
}

function updateCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle();
    
    // Draw Position
    circle.x += circle.dX;
    circle.y += circle.dY;

    // Detect Left and Right Collision
    if(circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
        circle.dX *= -1;
    }

    // Detect Top and Bottom Collision
    if(circle.y + circle.size > canvas.width || circle.y - circle.size < 0) {
        circle.dY *= -1;
    }

    requestAnimationFrame(updateCircle); // To Add Animation in Canvas 
}


updateCircle();