// Function to set the height equal to the width of a element
function setHeightEqualToWidth(element) {
                   
    var width = element.offsetWidth;
    element.style.height = width + "px";
}

var elements = document.querySelectorAll('.inner-service .img-col img');
elements.forEach(el => {
    setHeightEqualToWidth(el);
});
var elements2 = document.querySelectorAll('.testimonials-inner-container');
elements2.forEach(el2 => {
    setHeightEqualToWidth(el2);
});

var elements3 = document.querySelectorAll('.projects-inner-single .card-img-top img');
elements3.forEach(el3 => {
    setHeightEqualToWidth(el3);
});

window.addEventListener('resize', function() {
    elements.forEach(el => {
    setHeightEqualToWidth(el);
});

window.addEventListener('resize', function() {
    elements2.forEach(el2 => {
        setHeightEqualToWidth(el2);
    })
});

window.addEventListener('resize', function() {
    elements3.forEach(el3 => {
        setHeightEqualToWidth(el3);
    })
});



});