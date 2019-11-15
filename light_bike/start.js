
var setStart = async function() {
    
    document.addEventListener("keydown", onDocumentKeyDown, false);
    
}

function onDocumentKeyDown(event) {
    var keyCode = event.which;
    console.log("Entro");
    if (keyCode == 65) {
        tron_bike_blue.rotateY(Math.PI/2);
    }
    if (keyCode == 68) {
        tron_bike_blue.rotateY(-Math.PI/2);
    }
    if (keyCode == 74) {
        tron_bike_green.rotateY(Math.PI/2);
    }
    if (keyCode == 76) {
        tron_bike_green.rotateY(-Math.PI/2);
    }
};
