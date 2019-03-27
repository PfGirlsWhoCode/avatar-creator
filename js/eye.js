var eye = ""

var radios = document.forms["formeyes"].elements["myradio"];
for (var i = 0; i < radios.length; i++) { 
    radios[i].onclick = function() {
        eye = this.value
        drawAvatar()
    }
}