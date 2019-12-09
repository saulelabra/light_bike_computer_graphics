
var controller = async function() {
    
    if(roundOver == false) {
        document.addEventListener("keydown", onDocumentKeyDown, false);
        var x = new Panel();
        x.createWall();
    }
    
    
}


