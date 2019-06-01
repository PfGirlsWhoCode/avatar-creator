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
athleticTriangle.src = "img/female_triangle_athletic_wear.svg"

var maleHourglassDress = new Image()
maleHourglassDress.src = "img/male_hourglass_dress.svg"

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

var femaleTriangleDress = new Image()
femaleTriangleDress.src = "img/female_triangle_dress.svg"

var femaleTriangleSuit = new Image()
femaleTriangleSuit.src = "img/female_triangle_suit.svg"

var femaleHourglassSuit = new Image()
femaleHourglassSuit.src = "img/female_hourglass_suit.svg"

var femaleAppleSuit = new Image()
femaleAppleSuit.src = "img/female_apple_suit.svg"

var femaleRectangleSuit = new Image()
femaleRectangleSuit.src = "img/female_rectangle_suit.svg"

var femaleRectangleAthletic = new Image()
femaleRectangleAthletic.src = "img/female_rectangle_athletic.svg"

var femaleHourglassAthletic = new Image()
femaleHourglassAthletic.src = "img/female_hourglass_athletic.svg"

var femaleTriangleTShirtJeans = new Image()
femaleTriangleTShirtJeans.src = "img/female_triangle_tshirtjeans.svg"

var femaleAppleTShirtJeans = new Image()
femaleAppleTShirtJeans.src = "img/female_apple_tshirtjeans.svg"

var femaleRectangleTShirtJeans = new Image()
femaleRectangleTShirtJeans.src = "img/female_rectangle_tshirtjeans.svg"

var femaleHourglassTShirtJeans = new Image()
femaleHourglassTShirtJeans.src = "img/female_hourglass_tshirtjeans.svg"

var malePearDress = new Image()
malePearDress.src = "img/male_pear_dress.svg"

var maleRectangleDress = new Image()
maleRectangleDress.src = "img/male_rectangle_dress.svg"

var maleAppleDress = new Image()
maleAppleDress.src = "img/male_apple_dress.svg"

var malePearSuit = new Image()
malePearSuit.src = "img/male_pear_suit.svg"

var maleRectangleSuit = new Image()
maleRectangleSuit.src = "img/male_rectangle_suit.svg"

var maleAppleSuit = new Image()
maleAppleSuit.src = "img/male_apple_suit.svg"

var maleHourglassSuit = new Image()
maleHourglassSuit.src = "img/male_hourglass_suit.svg"

var maleTriangleSuit = new Image()
maleTriangleSuit.src = "img/male_triangle_suit.svg"

var malePearTShirtJeans = new Image()
malePearTShirtJeans.src = "img/male_pear_tshirtjeans.svg"

var maleRectangleTShirtJeans = new Image()
maleRectangleTShirtJeans.src = "img/male_rectangle_tshirtjeans.svg"

var maleAppleTShirtJeans = new Image()
maleAppleTShirtJeans.src = "img/male_apple_tshirtjeans.svg"

var maleHourglassTShirtJeans = new Image()
maleHourglassTShirtJeans.src = "img/male_hourglass_tshirtjeans.svg"

var maleTriangleTShirtJeans = new Image()
maleTriangleTShirtJeans.src = "img/male_triangle_tshirtjeans.svg"

var malePearAthletic = new Image()
malePearAthletic.src = "img/male_pear_athletic.svg"

var maleRectangleAthletic = new Image()
maleRectangleAthletic.src = "img/male_rectangle_athletic.svg"

var maleAppleAthletic = new Image()
maleAppleAthletic.src = "img/male_apple_athletic.svg"

var maleTriangleAthletic = new Image()
maleTriangleAthletic.src = "img/male_triangle_athletic.svg"

var maleHourglassAthletic = new Image()
maleHourglassAthletic.src = "img/male_hourglass_athletic.svg"

var clothing = {
    "Female": {
        "Hourglass": {
            "clothingdress": dressHourglass,
            "clothingathletic" : femaleHourglassAthletic,
            "clothingsuit" : femaleHourglassSuit,
            "clothingtshirtjeans" : femaleHourglassTShirtJeans,
        },
        "Triangle": {
            "clothingathletic": athleticTriangle,
            "clothingdress" : femaleTriangleDress,
            "clothingsuit" : femaleTriangleSuit,
            "clothingtshirtjeans" : femaleTriangleTShirtJeans,
        },
        "Pear": {
            "clothingdress" : femalePearDress,
            "clothingtshirtjeans" : femalePearTshirt,
            "clothingathletic" : femalePearAthletic,
            "clothingsuit" : femalePearSuit,
        },
        "Apple": {
            "clothingdress": dressApple,
            "clothingathletic": athleticApple,
            "clothingtshirtjeans": femaleAppleTShirtJeans,
            "clothingsuit" : femaleAppleSuit,
        },
        "Rectangle": {
            "clothingdress": dressRectangle,
            "clothingsuit" : femaleRectangleSuit,
            "clothingtshirtjeans" : femaleRectangleTShirtJeans,
            "clothingathletic" : femaleRectangleAthletic,
        },
    },
    "Male": {
        "Hourglass": {
            "clothingdress": maleHourglassDress,
            "clothingsuit" : maleHourglassSuit,
            "clothingathletic" : maleHourglassAthletic,
            "clothingtshirtjeans" : maleHourglassTShirtJeans,
        },
        "Triangle": {
            "clothingdress" : maleTriangleDress,
            "clothingsuit" : maleTriangleSuit,
            "clothingtshirtjeans" : maleTriangleTShirtJeans,
            "clothingathletic": maleTriangleAthletic,
        },
        "Pear": {
            "clothingdress": malePearDress,
            "clothingsuit": malePearSuit,
            "clothingathletic": malePearAthletic,
            "clothingtshirtjeans": malePearTShirtJeans,
        },
        "Apple": {
            "clothingdress": maleAppleDress,
            "clothingsuit": maleAppleSuit,
            "clothingtshirtjeans": maleAppleTShirtJeans,
            "clothingathletic": maleAppleAthletic,
        },
        "Rectangle": {
            "clothingdress": maleRectangleDress,
            "clothingsuit": maleRectangleSuit,
            "clothingathletic": maleRectangleAthletic,
            "clothingtshirtjeans": maleRectangleTShirtJeans
        },
    },
};