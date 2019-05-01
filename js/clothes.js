var clothes = ""

var radios = document.forms["formclothing"].elements["myradio"];
for (var i = 0; i < radios.length; i++) { 
    radios[i].onclick = function() {
        clothes = this.value
        drawAvatar()
    }
}

var dressHourglass = new Image()
dressHourglass.src = "img/female_hourglass_dress.svg"
var dressPear = new Image()
dressPear.src = "img/female_pear_dress.svg"
var dressRectangle = new Image()
dressRectangle = "img/female_rectangle_dress.svg"


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
        "Circle": {
 
    
    
    
    
            "clothingswim": null,
        },
        "Rectangle": {
 
    
    
    
    
            "clothingswim": null,
        },
    "Male": {
        "Hourglass": {
 




            "clothingswim": null,
        },
        "Triangle": {

    
    
    
    
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
        "Pear":{
            "clothingdress": dressPear,
        },
        "Rectangle":{
            "clothingdress": dressRectangle,
        },
    },
},
};