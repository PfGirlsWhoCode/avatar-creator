var clothes = ""

var radios = document.forms["formclothing"].elements["myradio"];
for (var i = 0; i < radios.length; i++) {
    radios[i].onclick = function () {
        clothes = this.value
        drawAvatar()
    }
}

var dressHourglass = new Image()
dressHourglass.src = "img/female_hourglass_dress.svg"

var dressApple = new Image()
dressApple.src = "img/female_apple_dress.svg"

var dressRectangle = new Image()
dressRectangle.src = "img/female_rectangle_dress.svg"

var athleticApple = new Image()
athleticApple.src = "img/female_apple_athletic_wear.svg"

var athleticTriangle = new Image()
athleticTriangle.src = "img/female_Triangle_athletic_wear.svg"

var maleDressHourglass = new Image()
maleDressHourglass.src = "img/male_hourglass_dress.svg"

var maleTriangleDress= new Image()
maleTriangleDress.src = "img/male_triangle_dress.svg"

var femalePearDress = new Image()
femalePearDress.src = "img/female_pear_dress.svg"

var femalePearTshirt = new Image()
femalePearTshirt.src = "img/female_pear_tshirtjeans.svg"

var femalePearAthletic = new Image()
femalePearAthletic.src = "img/female_pear_athletic.svg"

var femalePearSuit = new Image()
femalePearSuit.src = "img/female_pear_suit.svg"

var clothing = {
    "Female": {
        "Hourglass": {
            "clothingdress": dressHourglass,

        },
        "Triangle": {
            "clothingathletic": athleticTriangle,

        },
        "Pear": {
            "clothingdress" : femalePearDress,
            "clothingtshirtjeans" : femalePearTshirt,
            "clothingathletic" : femalePearAthletic,

        },
        "Apple": {
            "clothingdress": dressApple,
            "clothingathletic": athleticApple,

        },
        "Rectangle": {
            "clothingdress": dressRectangle,

        },
    },
    "Male": {
        "Hourglass": {
            "clothingdress": maleDressHourglass,

        },
        "Triangle": {
            "clothingdress" : maleTriangleDress,
    
        },
        "Pear": {


        },
        "Circle": {





            
        },
        "Rectangle": {





            
        },
    },
};