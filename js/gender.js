var gender = "Female"

var radios = document.forms["formA"].elements["myradio"];
for (var r of radios){
    r.onclick = function() {

        gender = this.value
        drawAvatar()
    }
}