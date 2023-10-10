document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    if (!elems) throw "don't find Selector .tooltipped";

    var instances = M.Tooltip.init(elems);

    
    for (let elem of elems)
    {
        console.log(elem);
        var parentElem = elem.parentElement.parentElement;
        var elemHeight = -parentElem.offsetTop + elem.offsetTop;
        console.log(elemHeight);

        if (elemHeight < 36)
        {
            elem.setAttribute('data-position', 'bottom');
            //elem.tooltip();
        }
    }


});