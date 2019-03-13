//Male avatar body types
var maleApple = new Image()
maleApple.src = "img/male_apple.svg"

var maleRectangle = new Image()
maleRectangle.src = "img/male_rectangle.svg"

var maleHourglass = new Image()
maleHourglass.src = "img/male_hourglass.svg"

var malePear = new Image()
malePear.src = "img/male_pear.svg"

var maleTriangle = new Image()
maleTriangle.src = "img/male_triangle.svg"

// Female avatar body types
var femaleApple = new Image()
femaleApple.src = "img/female_apple.svg"

var femaleRectangle = new Image()
femaleRectangle.src = "img/female_rectangle.svg"

var femaleHourglass = new Image()
femaleHourglass.src = "img/female_hourglass.svg"

var femalePear = new Image()
femalePear.src = "img/female_pear.svg"

var femaleTriangle = new Image()
femaleTriangle.src = "img/female_triangle.svg"
function bodyshapee() {
    if(gender === "Female"){
        if(shape ==="Triangle"){
            drawBodyShape(femaleTriangle)
        } 
        else if(shape === "Pear"){
            drawBodyShape(femalePear)
        } 
        else if(shape === "Circle"){
            drawBodyShape(femaleApple)
        }
        else if (shape ==="Rectangle"){
            drawBodyShape(femaleRectangle)
        }
        else if (shape === "Hourglass"){
            drawBodyShape(femaleHourglass)
        }
        else {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
        }
    }
    else if(gender === "Male"){
        if(shape ==="Triangle"){
            drawBodyShape(maleTriangle)
        } 
        else if(shape === "Pear"){
            drawBodyShape(malePear)
        } 
        else if(shape === "Circle"){
            drawBodyShape(maleApple)
        }
        else if (shape ==="Rectangle"){
            drawBodyShape(maleRectangle)
        }
        else if (shape === "Hourglass"){
            drawBodyShape(maleHourglass)
        }
        else {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
        }
    }
    else {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    } 
}

function drawAvatar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    bodyshapee()
}

function drawBodyShape(image) {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
}