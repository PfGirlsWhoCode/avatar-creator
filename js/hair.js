var hair = ""

var radios = document.forms["formHair"].elements["myradio"];
for (var i = 0; i < radios.length; i++) { 
    radios[i].onclick = function() {
        hair = this.value
        drawAvatar()
    }
}

var haircolor = ""

var radios = document.forms["formHaircolor"].elements["myradio"];
for (var i = 0; i < radios.length; i++) { 
    radios[i].onclick = function() {
        haircolor = this.value
        drawAvatar()
    }
}
