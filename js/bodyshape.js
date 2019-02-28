var shape = "Triangle"

var radios = document.forms["formShape"].elements["myradio"];
for (var i = 0; i < radios.length; i++) { 
    radios[i].onclick = function() {
        shape = this.value
        drawAvatar()
    }
}