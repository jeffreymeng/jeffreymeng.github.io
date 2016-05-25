(function(window) {
    'use strict';
    //private vars
    var defualt = {};
    // utils
    var getcolor = function(type) {
        return defualt[tyle].color || defualt.color || "black"
    };
    var warn = function(message) {
        if (console.warn) console.warn("PenJS Warning: " + message); else console.log("PenJS Warning: " + message);
    };




    var pen = {};
    pen.info = {
        name: "penJS",
        version: "Private Alpha 1.0.0"
    };
    pen.canvas = function(id) {
        var ctx = document.document.querySelectorAll(id).getContext("2d");
        ctx.onMouseMove = function(callback) {
            this.addEventListener('mousemove', function(evt) {
                var rect = this.getBoundingClientRect();
                callback(event.clientX - rect.left, event.clientY - rect.top);
            }, false);
        };
        ctx.onMouseClick = function(handler, type) {
            var ty;
            if (type !== "mousedown" || type !== "mouseup" || type !== null) {
                warn("The specified type was not a string with the content 'mousedown' or 'mouseup'. Resorting to defualt mousedown");
                ty = "mousedown";
            } else {
                ty = type || "mousedown";
            }
            this.addEventListener(ty, function(evt) {
var x = 0, y = 0;
    var inner = true ;
    do {
        x += evt.offsetLeft;
        y += evt.offsetTop;
        var style = getComputedStyle(evt,null) ;
        var borderTop = parseInt(style.getPropertyValue("border-top-width"),10);
        var borderLeft = parseInt(style.getPropertyValue("border-left-width"),10);
        y += borderTop ;
        x += borderLeft ;
        if (inner){
          var paddingTop = parseInt(style.getPropertyValue("padding-top"),10);
          var paddingLeft = parseInt(style.getPropertyValue("padding-left"),10);
          y += paddingTop ;
          x += paddingLeft ;
        }
        inner = false ;
    } while (evt = evt.offsetParent);

                handler(x, y);
            }, false);
        };

        return ctx;
    };

    window.pen = pen;

})(window);