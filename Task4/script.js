var counter = +0;

var redLight = document.querySelector('#btnRed');
if (!redLight) throw "could not find #btnRed";

var yellowLight = document.querySelector('#btnYellow');
if (!yellowLight) throw "could not find #btnYellow";

var greenLight = document.querySelector('#btnGreen');
if (!greenLight) throw "could not find #btnGreen";

function btnClicked(e){

    console.log("counter = " + counter);

    if (counter % 4 == 0)
    {
        redLight.style["color"] = 'grey';
        yellowLight.style['color'] = 'grey';
        greenLight.style['color'] = 'green';
        
    }

    if (counter % 4 == 1)
    {
        redLight.style["color"] = 'grey';
        yellowLight.style['color'] = 'yellow';
        greenLight.style['color'] = 'grey';
        
    }

    if (counter % 4 == 2)
    {
        redLight.style["color"] = 'red';
        yellowLight.style['color'] = 'grey';
        greenLight.style['color'] = 'grey';
        
    }

    if (counter % 4 == 3)
    {
        redLight.style["color"] = 'red';
        yellowLight.style['color'] = 'yellow';
        greenLight.style['color'] = 'grey';
        
    }




    counter++;

}






