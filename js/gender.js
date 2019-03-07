var gender = ""

var radios = document.forms["formGender"].elements["myradio"];
for (var i = 0; i < radios.length; i++) { 
    radios[i].onclick = function() {
        gender = this.value
        drawAvatar()
    }
}
