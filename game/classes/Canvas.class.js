export class Canvas{

    constructor(){

    }

    // make the canvas
    drawCanvas(){
        let canvas = document.getElementById('canvas');
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.backgroundColor = 'darkslateblue';
        canvas.style.position = "absolute";

        // let body = document.getElementsByTagName("body")[0];
        // body.appendChild(canvas);
    }


    // end of class
}
window.onresize = function() { 
    location.reload();
}