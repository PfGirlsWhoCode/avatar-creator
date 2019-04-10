var footwear = ""

var radios = document.forms["formFootwear"].elements["myradio"];
for (var i = 0; i < radios.length; i++) { 
    radios[i].onclick = function() {
        footwear = this.value
        drawAvatar()
    }
}