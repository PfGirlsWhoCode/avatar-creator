var gender = "Female"

var radios = document.forms["formGender"].elements["myradio"];
for (var r of radios){
    r.onclick = function() {
        
        gender = this.value
        drawAvatar()
    }
}
