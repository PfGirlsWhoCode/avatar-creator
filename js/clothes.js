var clothes = ""

var radios = document.forms["formclothing"].elements["myradio"];
for (var i = 0; i < radios.length; i++) { 
    radios[i].onclick = function() {
        clothes = this.value
        console.log(clothes)
        drawAvatar()
    }
}

var dressHourglass = new Image()
dressHourglass.src = "img/female_hourglass_dress.svg"

var clothing = {
    "Female": {
        "hourglass": {
            "dress": dressHourglass,
            "suit": dressHourglass
        }
    }
}