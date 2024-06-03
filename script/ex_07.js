window.onload = function(){
    var canvasElement = document.getElementsByTagName("canvas")[0];
    var context = canvasElement.getContext("2d");
    
    // the triangle
    context.beginPath();
    context.moveTo(6, 6);
    context.lineTo(14, 10);
    context.lineTo(6, 14);
    context.closePath();
    
    // the outline
    context.lineWidth = 1;
    context.strokeStyle = '#666666';
    context.stroke();
    
    // the fill color
    context.fillStyle = "#FFCC00";
    context.fill();
    var audio = new Audio("triangle.ogg");
    var pause = document.getElementsByTagName("button")[0];
    var stop = document.getElementsByTagName("button")[1];
    var mute = document.getElementsByTagName("button")[2];

    canvasElement.onclick = function() {
        audio.play();
    }

    pause.onclick = () =>{
        audio.pause();
    }

    stop.onclick = () => {
        audio.pause();
        audio.currentTime = 0;
    }
    mute.onclick = () =>{
        
    }
}