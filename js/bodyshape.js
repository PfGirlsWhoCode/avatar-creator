//Male avatar body types
var maleApple = new Image()
maleApple.src = "img/male_apple.svgz"

var maleRectangle = new Image()
maleRectangle.src = "img/male_rectangle.svgz"

var maleHourglass = new Image()
maleHourglass.src = "img/male_hourglass.svg"

var malePear = new Image()
malePear.src = "img/male_pear.svg"

var maleTriangle = new Image()
maleTriangle.src = "img/male_triangle.svg"

// Female avatar body types
var femaleImage = new Image()
femaleImage.src = "img/female.svg"

var femaleImage = new Image()
femaleImage.src = "img/female.svg"

var femaleImage = new Image()
femaleImage.src = "img/female.svg"

var femaleImage = new Image()
femaleImage.src = "img/female.svg"

var femaleImage = new Image()
femaleImage.src = "img/female.svg"


var shape = "Triangle"

function drawBodyShape(image) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
}


var radios = document.forms["formB"].elements["myradio"];
for (var r of radios){
    r.onclick = function() {

        shape = this.value
        drawAvatar()
    }
}