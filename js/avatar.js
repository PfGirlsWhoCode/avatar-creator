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

var eyeBlue = new Image()
eyeBlue.src = "img/blue_eyes.svg"

var eyeGreen = new Image()
eyeGreen.src = "img/green_eyes.svg"

var eyeBrown = new Image()
eyeBrown.src = "img/brown_eyes.svg"

var eyeOgre = new Image()
eyeOgre.src = "img/blue_ogre_eye.svg"

//Hair colors and length

var shortBlonde = new Image()
shortBlonde.src = "img/blonde_short_hair.svg"

var shortBrown = new Image()
shortBrown.src = "img/brown_short_hair.svg"

var shortBlack = new Image()
shortBlack.src = "img/black_short_hair.svg"

var shortBlue = new Image()
shortBlue.src = "img/blue_short_hair.svg"

var shortRed = new Image()
shortRed.src = "img/red_short_hair.svg"

var shortPink = new Image()
shortPink.src = "img/pink_short_hair.svg"

var shortGreen = new Image()
shortGreen.src = "img/Green_short_hair.svg"

var mediumBlonde = new Image()
mediumBlonde.src = "img/blonde_Medium_hair.svg"

var mediumBrown = new Image()
mediumBrown.src = "img/brown_medium_hair.svg"

var mediumBlack = new Image()
mediumBlack.src = "img/black_medium_hair.svg"

var mediumBlue = new Image()
mediumBlue.src = "img/blue_medium_hair.svg"

var mediumRed = new Image()
mediumRed.src = "img/red_medium_hair.svg"

var mediumPink = new Image()
mediumPink.src = "img/pink_medium_hair.svg"

var mediumGreen = new Image()
mediumGreen.src = "img/Green_medium_hair.svg"

var longBlonde = new Image()
longBlonde.src = "img/blonde_long_hair.svg"

var longBrown = new Image()
longBrown.src = "img/brown_long_hair.svg"

var longBlack = new Image()
longBlack.src = "img/black_long_hair.svg"

var longBlue = new Image()
longBlue.src = "img/blue_long_hair.svg"

var longRed = new Image()
longRed.src = "img/red_long_hair.svg"

var longPink = new Image()
longPink.src = "img/pink_long_hair.svg"

var longGreen = new Image()
longGreen.src = "img/Green_long_hair.svg"

function drawBodyshape() {
    if (gender === "Female") {
        if (shape === "Triangle") {
            drawImage(femaleTriangle)
        }
        else if (shape === "Pear") {
            drawImage(femalePear)
        }
        else if (shape === "Circle") {
            drawImage(femaleApple)
        }
        else if (shape === "Rectangle") {
            drawImage(femaleRectangle)
        }
        else if (shape === "Hourglass") {
            drawImage(femaleHourglass)
        }
        else {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
        }
    }
    else if (gender === "Male") {
        if (shape === "Triangle") {
            drawImage(maleTriangle)
        }
        else if (shape === "Pear") {
            drawImage(malePear)
        }
        else if (shape === "Circle") {
            drawImage(maleApple)
        }
        else if (shape === "Rectangle") {
            drawImage(maleRectangle)
        }
        else if (shape === "Hourglass") {
            drawImage(maleHourglass)
        }
        else {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
        }
    }
    else {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
}

function drawEyes() {
    if (eye === "Blue") {
        drawImage(eyeBlue)
    }
    else if(eye === "Green"){
        drawImage(eyeGreen)
    }
    else if(eye === "Brown"){
        drawImage(eyeBrown)
    }
    else if(eye === "Ogre"){
        drawImage(eyeOgre)
    }
}

function drawHair() {
    if (hair === "Nohair") {

    }
    else if (hair === "Shorthair") {
        if (haircolor === "blonde") {
            drawImage(shortBlonde)
        }
        if (haircolor === "brown") {
            drawImage(shortBrown)
        }
        if (haircolor === "red") {
            drawImage(shortRed)
        }
        if (haircolor === "black") {
            drawImage(shortBlack)
        }
        if (haircolor === "blue") {
            drawImage(shortBlue)
        }
        if (haircolor === "pink") {
            drawImage(shortPink)
        }
        if (haircolor === "green") {
            drawImage(shortGreen)
        }
    }
    else if (hair === "Mediumhair") {
        if (haircolor === "blonde") {
            drawImage(mediumBlonde)
        }
        if (haircolor === "brown") {
            drawImage(mediumBrown)
        }
        if (haircolor === "red") {
            drawImage(mediumRed)
        }
        if (haircolor === "black") {
            drawImage(mediumBlack)
        }
        if (haircolor === "blue") {
            drawImage(mediumBlue)
        }
        if (haircolor === "pink") {
            drawImage(mediumPink)
        }
        if (haircolor === "green") {
            drawImage(mediumGreen)
        }
    }
    else if (hair === "Longhair") {
        if (haircolor === "blonde") {
            drawImage(longBlonde)
        }
        if (haircolor === "brown") {
            drawImage(longBrown)
        }
        if (haircolor === "red") {
            drawImage(longRed)
        }
        if (haircolor === "black") {
            drawImage(longBlack)
        }
        if (haircolor === "blue") {
            drawImage(longBlue)
        }
        if (haircolor === "pink") {
            drawImage(longPink)
        }
        if (haircolor === "green") {
            drawImage(longGreen)
        }
    }
}

function drawFootwear() {
    if (footwear === "noshoe") {
    }
    else if(footwear === "tennis"){
    }
    else if(footwear === "boots"){
    }
    else if(footwear === "socks"){
    }
}

function drawAvatar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBodyshape()
    drawEyes()
    drawHair()
    drawFootwear()
}

function drawImage(image) {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
}