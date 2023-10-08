

var theBall = document.querySelector("#footballBall");
if (!theBall) throw "can't find element #footballBall";

var theField = document.querySelector("#footballField");
if (!theField) throw "can't find element #footballField";

theField.addEventListener("click", getClickPosition, false);

function getClickPosition(e) {
    var xPosition = e.layerX;
    console.log("xPoisition = " + xPosition);
    var yPosition = e.layerY;
    console.log("yPoisition = " + yPosition);

    console.log("Field Width = " + theField.clientWidth);
    console.log("Field Height = " + theField.clientHeight);

    if ((xPosition < (theField.clientWidth - 66)) && (xPosition > 50) &&
        (yPosition < (theField.clientHeight - 50)) && (yPosition > 50))
        {
            var translate3dValue = "translate3d(" + (xPosition - 50) + "px," + (yPosition -50) + "px, 0)";
            theBall.style.transform = translate3dValue;
        }


}




