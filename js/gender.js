// Sets gender of avatar

var femaleImage = new Image()
femaleImage.src = "img/female.svg"

var maleImage = new Image()
maleImage.src = "img/male.svg"

function drawFemale() {
    console.log("draw female")
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(femaleImage, 0, 0, 300, 500)
}

function drawMale() {
    console.log("draw male")
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(maleImage, 0, 0, 300, 500)
}

document.getElementById("femaleBtn").addEventListener("click", drawFemale)
document.getElementById("maleBtn").addEventListener("click", drawMale)
