
(function(window){
    //I recommend this
    'use strict';
    function define_library(){
        var mail = {};
        mail.mail = function(content, recipents, subject, from, reply, name){
            this.use = function(){console.log("japi.mail.mail.use(): The use of japi.mail.mail(content, recipents, subject, from, reply, name) can be found at www.jeffreyserver.tk/mail.php. ");};
            $.ajax({
              type: "POST",
              url: "http://jeffreyserver.tk/mail.php",
              data: {"recipents":recipents, "subject":subject, "content":content, "from":from, "reply":reply, "name":name}
            });
        };
        return mail;
    }
    //define globally if it doesn't already exist
    if(typeof(japi.mail) === 'undefined'){
        if (typeof(window.japi) === 'undefined') {
            window.japi = {};
        }
        window.japi.mail = define_library();
    }
    else{
        console.log("Library already defined.");
    }
})(window);