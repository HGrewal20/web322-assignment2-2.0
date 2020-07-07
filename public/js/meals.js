const items = [
    {
        id: 1,
        name: 'barbecue-bbq-beef-cooked-410648',
        sizeW: 320,
        sizeH: 320,
        price: 16.99
    },
    {
        id: 2,
        name: 'fried-meat-on-white-plate-2338407',
        sizeW: 320,
        sizeH: 320,
        price: 16.99
    },
    {
        id: 3,
        name: 'selective-focus-photography-of-cooked-food-1639561',
        sizeW: 320,
        sizeH: 320,
        price: 16.99
    },
    {
        id: 4,
        name: 'steak-meat-raw-herbs-65175',
        sizeW: 320,
        sizeH: 320,
        price: 16.99
    }
];

window.onload = function() {
    for(var i = 0; i < items.length; i++) {
        var elem = document.createElement("img");
        var src = "images/" + items[i].name + ".jpg";
        var size_width = items[i].sizeW;
        var size_height = items[i].sizeH;
        elem.setAttribute("src", src);
        elem.setAttribute("width", size_width);
        elem.setAttribute("height", size_height);
        document.getElementById("images").appendChild(elem);
    }
}