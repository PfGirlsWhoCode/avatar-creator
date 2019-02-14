var femaleImage = new Image()
femaleImage.src = "img/female.svg"

var maleImage = new Image()
maleImage.src = "img/male.svg"

function drawBodyShape(image) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(image, 0, 0, 300, 500)
}


var radios = document.forms["formA"].elements["myradio"];
for (var r of radios){
    r.onclick = function() {

        if(this.value ==="Triangle"){
            drawBodyShape(femaleImage)
        } else {
           drawBodyShape(maleImage)
        }
    }
}