
var setStart = async function() {
    
    document.addEventListener("keydown", onDocumentKeyDown, false);
    
}

function onDocumentKeyDown(event) {
    var keyCode = event.which;
    console.log("Entro");
    if (keyCode == 65) {
        console.log("Vuelta izq");
        tron_bike_blue.rotateY(Math.PI/2);
    }
    if (keyCode == 68) {
        console.log("Vuelta der");
        tron_bike_blue.rotateY(-Math.PI/2);
    }
    if (keyCode == 74) {
        console.log("Vuelta izq");
        tron_bike_blue.rotateY(Math.PI/2);
    }
    if (keyCode == 76) {
        console.log("Vuelta der");
        tron_bike_blue.rotateY(-Math.PI/2);
    }
};
