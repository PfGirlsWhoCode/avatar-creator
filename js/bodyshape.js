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



function drawBodyShape(image) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(image, 0, 0, 300, 500)
}


var radios = document.forms["formB"].elements["myradio"];
for (var r of radios){
    r.onclick = function() {

        if(this.value ==="Triangle"){
            drawBodyShape(femaleImage)
        } 
        else if(this.value === "Pear"){
            drawBodyShape(maleImage)
        } 
        else if(this.value === "Circle"){
            drawBodyShape(femaleImage)
        }
        else if (this.value ==="Rectangle"){
            drawBodyShape(maleImage)
        }
        else if (this.value === "Hourglass"){
            drawBodyShape(femaleImage)
        }
        else {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
        }
    }
}