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
function drawNose(){
    if(nose === "Flat"){
        drawImage(noseFlat)
    }
    else if(nose === "Triangle"){
        drawImage(noseTriangle)
    }
}

function drawClothing() {
    console.log(clothes)
    if (clothes === "clothingdress") {
        drawImage(dressHourglass)
    }
    console.log("test2")
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
    drawNose()
    drawHair()
    drawClothing()
    drawFootwear()
}

function drawImage(image) {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
}
