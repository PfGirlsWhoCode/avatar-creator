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
        if (haircolor === hairc1) {
            drawImage(shortBlonde)
        }
        if (haircolor === hairc2) {
            drawImage(shortBrown)
        }
        if (haircolor === hairc3) {
            drawImage(shortRed)
        }
        if (haircolor === hairc4) {
            drawImage(shortBlack)
        }
        if (haircolor === hairc5) {
            drawImage(shortBlue)
        }
        if (haircolor === hairc6) {
            drawImage(shortPink)
        }
        if (haircolor === hairc7) {
            drawImage(shortGreen)
        }
    }
    else if (hair === "Mediumhair") {
        if (haircolor === hairc1) {
            drawImage(mediumBlonde)
        }
        if (haircolor === hairc2) {
            drawImage(mediumBrown)
        }
        if (haircolor === hairc3) {
            drawImage(mediumRed)
        }
        if (haircolor === hairc4) {
            drawImage(mediumBlack)
        }
        if (haircolor === hairc5) {
            drawImage(mediumBlue)
        }
        if (haircolor === hairc6) {
            drawImage(mediumPink)
        }
        if (haircolor === hairc7) {
            drawImage(mediumGreen)
        }
    }
    else if (hair === "Longhair") {
        if (haircolor === hairc1) {
            drawImage(longBlonde)
        }
        if (haircolor === hairc2) {
            drawImage(longBrown)
        }
        if (haircolor === hairc3) {
            drawImage(longRed)
        }
        if (haircolor === hairc4) {
            drawImage(longBlack)
        }
        if (haircolor === hairc5) {
            drawImage(longBlue)
        }
        if (haircolor === hairc6) {
            drawImage(longPink)
        }
        if (haircolor === hairc7) {
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

function drawAvatar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBodyshape()
    drawEyes()
    drawClothing()
    drawNose()
}

function drawImage(image) {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
}
