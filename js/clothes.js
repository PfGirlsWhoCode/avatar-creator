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
var maleDressHourglass = new Image()
maleDressHourglass.src = "img/male_hourglass_dress.svg"
var maleTriangleDress= new Image()
maleTriangle.src = "img/male_triangle_dress.svg"

var clothing = {
    "Female": {
        "Hourglass": {
            "clothingdress": dressHourglass,




            "clothingswim": null,
        },
        "Triangle": {

    
    
    

            "clothingswim": null,
        },
        "Pear": {
 
    
    
    
    
            "clothingswim": null,
        },
        "Apple": {
            "clothingdress": dressApple,
            "clothingathletic": athleticApple,
    
    
    
            "clothingswim": null,
        },
        "Rectangle": {
            "clothingdress": dressRectangle,
    
    
    
    
            "clothingswim": null,
        },
    },
    "Male": {
        "Hourglass": {
            "clothingdress": maleDressHourglass,




            "clothingswim": null,
        },
        "Triangle": {
            "clothingdress" : maleTriangleDress,
    
    
    
    
            "clothingswim": null,
        },
        "Pear": {
     
        
        
        
        
            "clothingswim": null,
        },
        "Circle": {
     
        
        
        
        
            "clothingswim": null,
        },
        "Rectangle": {
     
        
        
        
        
            "clothingswim": null,
        },
    },
};