var femaleImage = new Image()
femaleImage.src = "img/female.svg"


function drawFemale() {
    console.log("draw female")
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(femaleImage, 0, 0, 300, 500)
}