var selected = false;

var myBookList = document.querySelector('#myOrderedList');
if (!myBookList) throw "can't find Selector #myOrderedList";

function liClicked(e) {
    console.log(e);

    if (selected == true)
    {
        for (let listItem of myBookList.children)
        {
            listItem.style["background-color"] = 'lemonchiffon';
        }
    }

    e.target.style["background-color"] = 'orange';
    selected = true;
}