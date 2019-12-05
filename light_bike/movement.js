var moveBike = function(bike, camera) {
    if (bike != null && camera != null) {
        bike.translateZ(-0.02);
        camera.position.z = bike.position.z + 25;
        camera.position.x = bike.position.x;
    }
    
}

function onDocumentKeyDown(event) {
    event.preventDefault();
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

    if(keyCode == 38) {
        console.log("pushed up");
        camera1.position.z += 10;
    }

    if(keyCode == 40) {
        console.log("pushed down");
        camera1.position.z -= 10;
    }

    if(keyCode == 37) {
        console.log("pushed left");
        camera1.position.x -= 10;
    }

    if(keyCode == 39) {
        console.log("pushed right");
        camera1.position.x += 10;
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