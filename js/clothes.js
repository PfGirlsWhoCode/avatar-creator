var clothes = ""

var radios = document.forms["formclothing"].elements["myradio"];
for (var i = 0; i < radios.length; i++) { 
    radios[i].onclick = function() {
        console.log(this.value)
        clothes = this.value
        drawAvatar()
    }
}