var moveBike = function(bike) {
    if (bike != null) {
        bike.translateZ(bikeSpeed);

    }
    
}

function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == 65 && !blueRotateAnim.running) {
        //tron_bike_blue.rotateY(Math.PI/2);
        rotateBike(tron_bike_blue, Math.PI/2, blueRotateAnim);
    }
    if (keyCode == 68 && !blueRotateAnim.running) {
        //tron_bike_blue.rotateY(-Math.PI/2);
        rotateBike(tron_bike_blue, -Math.PI/2, blueRotateAnim);
    }
    if (keyCode == 74 && !greenRotateAnim.running) {
        rotateBike(tron_bike_green, Math.PI/2, greenRotateAnim);
    }
    if (keyCode == 76 && !greenRotateAnim.running) {
        rotateBike(tron_bike_green, -Math.PI/2, greenRotateAnim);
    }
};

function rotateBike(object, direction, rotateAnim) {
    //rotateAnim = new KF.KeyFrameAnimator;
    rotateAnim.init({ 
        interps:
            [
                { 
                    keys:[0, 1], 
                    values:[
                        { y: object.rotation.y },
                        { y: object.rotation.y + direction}
                    ],
                    target:object.rotation
                }
            ],
        loop: false,
        duration: rotateAnim_duration * 1000,
    });
    rotateAnim.start();
    object.canRotate = false;
}