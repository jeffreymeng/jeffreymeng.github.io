window.jlogin = (function () {

    var jlogin = {
        getQuery: function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var c=new RegExp("[\\?&]"+e+"=([^&#]*)"),n=c.exec(location.search);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))},
        loginWithPopup : function() {}  ,
        
    };
     
    return jlogin;
}());

var key = prompt("what is the key");
var fb = new Firebase("https://jeffreymeng.firebaseio.com/auth/valid");
fb.once("value", function(snapshot) {
    return snapshot.child(key).exists();
});
