var canvas = document.getElementById('owlEyes');
var cxt = canvas.getContext('2d');
var outerRingSize = 40;

// CSS color alias for the background color
var backgroundColor = 'black'

// Set how often, in milliseconds the background should be redrawn
var refreshTime = 100;

// Track the pluse state; true meaning to increase brigthness and false meaning to decrease brightness
var pulseUp = true;

// Set the base value for which RGB values are calculated
var rgbBase = 10

function setGradient(ctx) {
    // Define the canvas context stroke style as a gradient
    var strokeGradient = cxt.createLinearGradient(0,0,1920,1080);
    
    if(pulseUp === true) {
        // If pluseUp is true, we will increase the rgbBase value
        rgbBase += 2

        // If we reach our upper limit, set pulseUp to false
        if(rgbBase >= 40) {
            pulseUp = false
        }
    } else {
        // If pluseUp is false, we will increase the rgbBase value
        rgbBase -= 2

        // If we reach our lower limit, set pulseUp to true
        if(rgbBase <= 10) {
            pulseUp = true
        }            
    }

    // Add the stroke color stops for the gradient
    strokeGradient.addColorStop(0, "rgba(10,10,20,1)");
    strokeGradient.addColorStop(0.5, "rgba(" + rgbBase + "," + rgbBase + ", " + rgbBase * 2 + ", 1)");
    strokeGradient.addColorStop(1, "rgba(10,10,20,1)");

    // Set the context's gradient stroke
    cxt.strokeStyle = strokeGradient;
}

function polygon(ctx, x, y, radius, sides, startAngle, backgroundColor, strokeColor, txt, ms, anticlockwise) {
    if (sides < 3) return;
    var theta = (Math.PI * 2)/sides;
    theta = anticlockwise? -theta : theta;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(startAngle);
    ctx.moveTo(radius,0);

    for (var i = 1; i < sides; i++) {
        ctx.lineTo(radius * Math.cos(theta * i), radius * Math.sin(theta * i));
    }

    ctx.closePath();
    ctx.restore();

    ctx.lineWidth = 4;

    // If strokeColor is not null
    if(strokeColor) {
        ctx.strokeStyle = strokeColor;
    }
    
    ctx.fillStyle = backgroundColor;
    ctx.fill();

    if (txt != 0) {
        cxt.font="25px Georgia";
        cxt.textAlign="center";
        cxt.textBaseline="middle";
        cxt.fillStyle="rgba(255,255,255,1)";
        if (y - 0.1 < ly) {
            var txty = y - 55;
        }
        else {
            var txty = y + 65;
        }
        if (ms == 1) {
            cxt.font="50px Georgia";
            cxt.fillText(txt, x, y);
        }
        else {
            cxt.fillText(txt, x, txty);
        }
    }
}

function drawBackground() {
    var px1 = 50;
    var py1 = 70;

    // Set the gradient for the context
    setGradient(cxt)

    cxt.mozImageSmoothingEnabled = false;
    for (d = 0; d < 8; d++) {
        var pyl = py1 + d * 125;
        for (i = 0; i < 27; i++) {
            var pxl = px1 + i * 70;
            polygon(cxt, pxl, pyl, outerRingSize, 6, -Math.PI/2, backgroundColor, null, 0);
            cxt.stroke();
            cxt.closePath();
            cxt.beginPath();

            if(i < 26) {
                polygon(cxt, pxl + 35, pyl + 63, outerRingSize, 6, -Math.PI / 2, backgroundColor, null, 0);    
                cxt.stroke();
                cxt.closePath();
                cxt.beginPath();
            }
        }
    }
}

// Clear the canvas and redraw the background every n millesonds
setInterval(function(ctx){
    // Clear the entire canvas
    cxt.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the background
    drawBackground();
}, refreshTime);     