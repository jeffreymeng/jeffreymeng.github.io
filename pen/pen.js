(function(window) {
    //I recommend this
    'use strict';
    var pen = {};
    var defualt = {};
    var getParam = function() {
        
    }
    pen.info = {
        name: "penJS",
        version: "Private Alpha 1.0.0"
    };
    pen.canvas = function(id) {
        var ctx = document.getElementById(id).getContext("2d");
        ctx.defualt = {};
        
        ctx.rectangle = function(x, y, width, height, color, params) {
            if (!color) {
                color = this.defualt.rectangle.color || this.defualt.color || pen.defualt().color || "black";
            }
            if (arguments.length === 1) {
                params = x;
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
    pen.defualt = function() {
        return defualt;
    }
    window.pen = pen;

})(window);