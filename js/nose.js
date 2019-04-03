var nose = ""

var radios = document.forms["formnoses"].elements["myradio"];
for (var i = 0; i < radios.length; i++) { 
    radios[i].onclick = function() {
        nose = this.value
        drawAvatar()
    }
}








