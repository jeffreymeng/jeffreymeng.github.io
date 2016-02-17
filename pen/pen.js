(function(window) {
    //I recommend this
    'use strict';
    var pen = {};
    var defualt = {};
    
    pen.info = {
        name: "penJS",
        version: "Private Alpha 1.0.0"
    };
    pen.canvas = function(id) {
        var ctx = document.getElementById(id).getContext("2d");
        ctx.defualt = {};
        
        ctx.rectangle = function(x, y, width, height, color) {
            if (!color && width) {
                color = this.defualt.rectangle.color || this.defualt.color || pen.defualt.color || "black";
            }
            if (!height) {
                height = this.defualt.rectangle.height || this.defualt.height || pen.getDefualt("height");
            }
            if (!width) {
                width = this.defualt.rectangle.width || this.defualt.width || pen.getDefualt("width");
                color = color || this.defualt.rectangle.color || this.defualt.color || pen.getDefualt("color") || "black";
            }
            
            this.fillStyle = color;
            this.fillRect(x,y,width,height);

        };
        ctx.circle = function(startx, starty, endx, endy) {
            this.moveTo(startx,starty);
            this.lineTo(endx,endy);
            this.stroke();
        };
        return ctx;
    };
    window.pen = pen;

})(window);