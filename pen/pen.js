(function(window){
    //I recommend this
    'use strict';
    var pen = {};
    var setNestedObjectPropertyByString = function(o, s, v) { // object, string, value
        if (o === s) {
            o = v;
        }
        s = s.replace(/\[(\w+)\]/g, '.$1');
        s = s.replace(/^\./, '');
        var a = s.split('.');
        for (var i = 0, n = a.length; i < n; ++i) {
            var k = a[i];
            if (k in o) {
                o = o[k];
            } else {
                return;
            }
        }
        return o;
    };
    pen.info = {
        name: "penJS",
        version:"Private Beta 1.0.0"
    };
    pen.canvas = function (id) {
        var ctx = document.getElementById(id).getContext("2d");
        ctx.defualt = {};
        ctx.getDefualt = function(item) {
            if (item) {
                return this.defualt[item];
            } else {
                return this.defualt;
            }
        };
        ctx.setDefualt = function(item, value) {
            if (item.indexOf(".") === -1 && item.indexOf("[") === -1 && item.indexOf("]") === -1 && item.indexOf("/") === -1) {
                this.defualt[item] = value;
            } else {
                setNestedObjectPropertyByString(this.defualt, item, value);
            }
            
        };
        
        return ctx;
    };
    
    window.pen = pen;

})(window);