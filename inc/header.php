<!DOCTYPE html>
<html>
<head>
    <meta content='5' http-equiv='refresh'/>
    <title>Animate Me</title>
    <link rel="stylesheet" type="text/css" href="inc/style.css">
    <style type="text/css" media="screen">
    </style>
</head>
<body>
<canvas id="owlEyes" width="1920" height="1080"></canvas>
<script>
    var lx = 520;
    var ly = 540;
    var rx = 1400;
    var ry = 540;
    var rad = 440;
    var irad = 100;
    var orad = 375;
    var mainRingSize = 75;
    var outerRingSize = 40;
    var innerRingSize = 13;
    var c2 = document.getElementById('owlEyes');
    var cxt = c2.getContext('2d');
    function polygon(ctx, x, y, radius, sides, startAngle, color, txt, ms, anticlockwise) {
        if (sides < 3) return;
        var a = (Math.PI * 2)/sides;
        a = anticlockwise?-a:a;
        ctx.save();
        ctx.translate(x,y);
        ctx.rotate(startAngle);
        ctx.moveTo(radius,0);
        for (var i = 1; i < sides; i++) {
            ctx.lineTo(radius*Math.cos(a*i),radius*Math.sin(a*i));
        }
        ctx.closePath();
        ctx.restore();
        ctx.lineWidth = 4;
        if (color == 'green') {
            ctx.strokeStyle="rgba(0,155,0,1)";
            ctx.fillStyle="rgba(0,0,0,1)";
            ctx.fill();
        }
        else if (color == 'yellow') {
            ctx.strokeStyle="rgba(200,200,0,1)";
            ctx.fillStyle="rgba(200,230,30,1)";
            ctx.fill();
        }
        else if (color == 'red') {
            ctx.strokeStyle="rgba(0,155,0,1)";
            ctx.fillStyle="rgba(150,30,30,1)";
            ctx.fill();

        }
        else if (color == 'blue') {
            ctx.strokeStyle="rgba(0,0,255,1)";
            ctx.fillStyle="rgba(150,30,30,1)";
            ctx.fill();
        }
        else if (color == 'bg1') {
            var gradient=ctx.createLinearGradient(0,0,1920,0);
            gradient.addColorStop("0","rgba(10,10,20,1)");
            gradient.addColorStop("0.1","rgba(20,20,40,1)");
            gradient.addColorStop("0.2","rgba(15,15,30,1)");
            gradient.addColorStop("0.3","rgba(20,20,40,1)");
            gradient.addColorStop("0.4","rgba(15,15,30,1)");
            gradient.addColorStop("0.5","rgba(20,20,40,1)");
            gradient.addColorStop("0.6","rgba(15,15,30,1)");
            gradient.addColorStop("0.7","rgba(20,20,40,1)");
            gradient.addColorStop("0.8","rgba(15,15,30,1)");
            gradient.addColorStop("0.9","rgba(20,20,40,1)");
            gradient.addColorStop("1.0","rgba(10,10,20,1)");
            ctx.strokeStyle=gradient;
        }
        else if (color == 'bg2') {
            var gradient=ctx.createLinearGradient(0,0,1800,1100);
            gradient.addColorStop("0","rgba(20,20,40,1)");
            gradient.addColorStop("0.1","rgba(15,15,30,1)");
            gradient.addColorStop("0.2","rgba(20,20,40,1)");
            gradient.addColorStop("0.3","rgba(15,15,30,1)");
            gradient.addColorStop("0.4","rgba(20,20,40,1)");
            gradient.addColorStop("0.5","rgba(15,15,30,1)");
            gradient.addColorStop("0.6","rgba(20,20,40,1)");
            gradient.addColorStop("0.7","rgba(15,15,30,1)");
            gradient.addColorStop("0.8","rgba(20,20,40,1)");
            gradient.addColorStop("0.9","rgba(15,15,30,1)");
            gradient.addColorStop("1.0","rgba(20,20,40,1)");
            ctx.strokeStyle=gradient;
        }
        else {
            ctx.strokeStyle="rgba(255,50,0,1)";
            ctx.fillStyle="rgba(150,30,30,1)";
            ctx.fill();
        }
        if (txt != 0) {
            cxt.font="25px Georgia";
            cxt.textAlign="center";
            cxt.textBaseline="middle";
            cxt.fillStyle="rgba(255,255,255,1)";
            if (y - 0.1 < ly) var txty = y-55;
            else var txty = y+65;
            if (ms == 1) {
                cxt.font="50px Georgia";
                cxt.fillText(txt,x,y);
            }
            else cxt.fillText(txt,x,txty);
        }
    }
    function drawBackground() {
        var px1 = 50;
        var py1 = 70;
        cxt.mozImageSmoothingEnabled = false;
            for (d = 0; d < 8; d++) {
                var pyl = py1+d*125;
                for (i = 0; i < 27; i++) {
                    var pxl = px1+i*70;
                    polygon(cxt,pxl,pyl,outerRingSize,6,-Math.PI/2,'bg1', 0);

                }
                cxt.stroke();
                cxt.closePath();
                cxt.beginPath();
            }
            for (d = 0; d < 8; d++) {
                var pyl = py1+d*125;
                for (i = 0; i < 26; i++) {
                    var pxl = px1+i*70;
                    polygon(cxt,pxl+35,pyl+63,outerRingSize,6,-Math.PI/2,'bg2', 0);
                }
                cxt.stroke();
                cxt.closePath();


            }
    }
    drawBackground();
    setTimeout(function(){
        window.location.reload(1);
    }, 4500);
</script>
</body>
