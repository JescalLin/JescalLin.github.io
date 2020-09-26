var canvas, ctx, flag = false,
        prevX = 0,
        currX = 0,
        prevY = 0,
        currY = 0,
        dot_flag = false;
      var slider = document.getElementById("brush_width");
    var x = "black",
        y = slider.value;
    
    slider.oninput = function() {
      y = this.value;
    }

    function init() {
        canvas = document.getElementById('can');
        ctx = canvas.getContext("2d");
        w = canvas.width;
        h = canvas.height;
        
    
        canvas.addEventListener("mousemove", function (e) {
            findxy('move', e)
        }, false);
        canvas.addEventListener("mousedown", function (e) {
            findxy('down', e)
        }, false);
        canvas.addEventListener("mouseup", function (e) {
            findxy('up', e)
        }, false);
        canvas.addEventListener("mouseout", function (e) {
            findxy('out', e)
        }, false);
    }
    
    function color(obj) { 
      var current = document.querySelector('.active');
      current.className = "";
      obj.classList.add("active");
        switch (obj.id) {
            case "green":
                x = "#4caf50";
                break;
            case "blue":
                x = "#2196f3";
                break;
            case "red":
                x = "#f44336";
                break;
            case "yellow":
                x = "#ffeb3b";
                break;
            case "orange":
                x = "#ff9800";
                break;
            case "brown":
                x = "#795548";
                break;
            case "purple":
                x = "#9c27b0";
                break;
            case "black":
                x = "black";
                break;
            case "white":
                x = "white";
                break;
        }
        if (x == "white") y = 50;
        else y = slider.value;
        
    
    }
    
    function draw() {
        ctx.beginPath();
        ctx.lineCap = "round";
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(currX, currY);
        ctx.strokeStyle = x;
        ctx.lineWidth = y;
        ctx.stroke();
        ctx.closePath();
    }
    
    function erase() {       
      ctx.clearRect(0, 0, w, h);
      // document.getElementById("canvasimg").style.display = "none";        
    }
    
    // function save() {
    //     document.getElementById("canvasimg").style.border = "2px solid";
    //     var dataURL = canvas.toDataURL();
    //     document.getElementById("canvasimg").src = dataURL;
    //     document.getElementById("canvasimg").style.display = "inline";
    // }
    
    function findxy(res, e) {
        if (res == 'down') {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
    
            flag = true;
            dot_flag = true;
            if (dot_flag) {
                ctx.beginPath();
                ctx.lineCap = "round";
                ctx.fillStyle = x;
                ctx.fillRect(currX, currY, 2, 2);
                ctx.closePath();
                dot_flag = false;
            }
        }
        if (res == 'up' || res == "out") {
            flag = false;
        }
        if (res == 'move') {
            if (flag) {
                prevX = currX;
                prevY = currY;
                currX = e.clientX - canvas.offsetLeft;
                currY = e.clientY - canvas.offsetTop;
                draw();
            }
        }
    }