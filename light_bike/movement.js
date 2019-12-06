var moveBike = function(bike) {
    if (bike != null) {
        if(bike.death == true)
        {
            deathBike(bike, bike.position.z)
        }
        if(bike.limits == false && count == 0)
        {
            BikeOffLimits(bike, bike.position.y)
            count++;
        }
        else
        {
            if(bike.death == false && bike.limits == true)
            {
                bike.translateZ(bikeSpeed);
                panel = new Panel();
                panel.createWall(bike.position);
                if(bike.position.z <= -100 || bike.position.z >= 100)
                    bike.limits = false;
                
            }
        }
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

function deathBike(object, bike_position) {
    //rotateAnim = new KF.KeyFrameAnimator;
    bikeDeath.init({ 
        interps:
            [
                { 
                    keys:[0, 1], 
                    values:[
                        { z:0},
                        { z:Math.PI/2}
                    ],
                    target:object.rotation
                },
                { 
                    keys:[0, 1], 
                    values:[
                        { y: 0.2, z: bike_position },
                        { y: 0.2, z: bike_position}
                    ],
                    target:object.position
                }
            ],
        loop: false,
        duration: rotateAnim_duration * 1000,
    });
    bikeDeath.start();
}

function BikeOffLimits(object, bike_position) {
    //rotateAnim = new KF.KeyFrameAnimator;
    bikeOffLimits.init({ 
        interps:
            [
                { 
                    keys:[0, 1], 
                    values:[
                        { x:0},
                        { x:-Math.PI/2}
                    ],
                    target:object.rotation
                },
                { 
                    keys:[0, 1], 
                    values:[
                        { y: bike_position},
                        { y: bike_position - 5}
                    ],
                    target:object.position
                }
            ],
        loop: false,
        duration: rotateAnim_duration * 1000,
    });
    bikeOffLimits.start();
}