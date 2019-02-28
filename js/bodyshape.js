var shape = "Triangle"

var radios = document.forms["formShape"].elements["myradio"];
for (var r of radios){
    r.onclick = function() {

        shape = this.value
        drawAvatar()
    }
}