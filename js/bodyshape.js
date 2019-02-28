var shape = "Triangle"

var radios = document.forms["formB"].elements["myradio"];
for (var r of radios){
    r.onclick = function() {

        shape = this.value
        drawAvatar()
    }
}