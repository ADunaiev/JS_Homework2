

function makeResizableDiv(div) {
    const element = document.querySelector('#myText');
    if(!element) throw "cant find Selector #myText";

    
    const resizer = document.querySelector('.resizer');
    if(!resizer) throw "cant find Selector .resizer";

    const minimum_size = 20;
    let original_width = 0;
    let original_height = 0;
    let original_x = 0;
    let original_y = 0;
    let original_mouse_x = 0;
    let original_mouse_y = 0;

    resizer.addEventListener('mousedown', function(e) {
    e.preventDefault()
    original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
    original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
    original_x = element.getBoundingClientRect().left;
    original_y = element.getBoundingClientRect().top;
    original_mouse_x = e.pageX;
    original_mouse_y = e.pageY;
    window.addEventListener('mousemove', resize)
    window.addEventListener('mouseup', stopResize)
    })
    
    function resize(e) {

        const width = original_width + (e.pageX - original_mouse_x);
        const height = original_height + (e.pageY - original_mouse_y)
        if (width > minimum_size) {
        element.style.width = width + 'px'
        }
        if (height > minimum_size) {
        element.style.height = height + 'px'
        }

    }
    
    function stopResize() {
    window.removeEventListener('mousemove', resize);
    }
}
    
    
    makeResizableDiv('.resizable')