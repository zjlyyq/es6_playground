var color = "blue";

function changeColor() {
    var anotherColor = "red";
    function swapColors() {
        var tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;
        // 这里可以访问color、anotherColor和tempColor 
    }
    // 这里可以访问color和anotherColor，但不能访问tempColor
    swapColors();
}

// 这里只能访问color 
changeColor();

var color = "blue";
function changeColor() {
    var localColor = "green";
    if (color === "blue") {
        color = "red";
    } else {
        color = "blue";
    }
    console.log()
}
changeColor();
alert("Color is now " + color);