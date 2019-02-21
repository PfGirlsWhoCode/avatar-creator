var femaleImage = new Image()
femaleImage.src = "img/female.svg"

var maleImage = new Image()
maleImage.src = "img/male.svg"

/*var maleImage = new Image()
maleImage.src = "img/male.svg"

var maleImage = new Image()
maleImage.src = "img/male.svg"

var maleImage = new Image()
maleImage.src = "img/male.svg"<*/

var shape = "Triangle"

function drawAvatar() {
    if(shape ==="Triangle"){
        drawBodyShape(femaleImage)
    } 
    else if(shape === "Pear"){
        drawBodyShape(maleImage)
    } 
    else if(shape === "Circle"){
        drawBodyShape(femaleImage)
    }
    else if (shape ==="Rectangle"){
        drawBodyShape(maleImage)
    }
    else if (shape === "Hourglass"){
        drawBodyShape(femaleImage)
    }
    else {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
}

function drawBodyShape(image) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(image, 0, 0, 300, 500)
}


var radios = document.forms["formB"].elements["myradio"];
for (var r of radios){
    r.onclick = function() {

        shape = this.value
        drawAvatar()
        /*
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
        */
    }
}