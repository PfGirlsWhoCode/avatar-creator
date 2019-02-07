
var radios = document.forms["formA"].elements["myradio"];
for (var r of radios){
    r.onclick = function() {
        alert(this.value);
    }
}