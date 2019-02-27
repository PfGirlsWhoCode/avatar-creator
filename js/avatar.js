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