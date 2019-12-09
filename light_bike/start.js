
var setStart = async function() {
    
    if(roundOver == false) {
        if (tron_bike_blue != undefined && tron_bike_green != undefined) {
            scene.add(tron_bike_blue);
            scene.add(tron_bike_green);
        }
        document.addEventListener("keydown", onDocumentKeyDown, false);
        var x = new Panel();
        x.createWall();
    }
    
    
}


