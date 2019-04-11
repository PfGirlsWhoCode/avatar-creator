var clothes = ""

var radios = document.forms["formclothing"].elements["myradio"];
for (var i = 0; i < radios.length; i++) { 
    radios[i].onclick = function() {
        clothes = this.value
        drawAvatar()
    }
}

var dressHourglass = new Image()
dressHourglass.src = "img/female_hourglass_dress.svg"

var clothing = {
    "Female": {
        "Hourglass": {
            "clothingdress": dressHourglass,
            "clothingsuit": dressHourglass,
        },
    },
};