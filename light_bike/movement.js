var moveBike = function(bike) {
    if (bike != null) {
        if(bike.death == true)
        {
            deathBike(bike, bike.position.z);
            bike.position.x = bike.initialPosition;
            bike.position.y = 0;
            bike.position.z = 0;
            bike.rotation.x = 0;
            bike.rotation.y = 0;
            bike.rotation.z = 0;
            bike.death = false;
        }
        else
        {
            if(bike.limits == false)
            {
                BikeOffLimits(bike, bike.position.y)
                bike.death = true;
            }
            else
            {
                if(bike.death == false && bike.limits == true)
                {
                    bike.translateZ(bikeSpeed);
                    panel = new Panel();
                    panel.createWall(bike, bike.position);
                    if(bike.position.y == 0)
                    {
                        if(bike.position.z <= -100 || bike.position.z >= 100 || bike.position.x <= -100 || bike.position.x >=100)
                        {
                            bike.limits = false;
                        }
                        else
                        {
                            if(bike.position.z >= -12 && bike.position.x >= -90 && bike.position.z <= -11 && bike.position.x <= -70)
                                prev_pos = 1;
                            if(bike.position.z >= -11 && bike.position.x >= -90 && bike.position.z <= -10 && bike.position.x <= -70)
                            {
                                if(prev_pos > 0)
                                    bike.death = true;
                                else
                                {
                                    prev_pos = 0;
                                    BikeonRamp1(bike, bike.rampAnim);
                                }
                            }
                        }
                    }
                    if(bike.position.y == 10)
                    {
                        if(bike.position.z <= -130)
                        {
                            bike.limits = false;
                        }
                        else
                        {
                            if(bike.position.z >= -31 && bike.position.x >= -90 && bike.position.z <= -30 && bike.position.x <= -70)
                            {
                                if(bike.up > 2) 
                                {
                                    DownBikeonRamp1(bike, bike.rampAnim);
                                    bike.up = 0;
                                }
                                else
                                    bike.up++;
                            }
                            if(bike.position.z >= -30 && bike.position.x >= 70 && bike.position.z <= -29 && bike.position.x <= 90)
                            {
                                BikeonRamp2(bike, bike.rampAnim);
                            }
                            else
                            {
                                if(bike.position.x <= 69 && bike.position.x>= -69 && bike.position.z >= -31 && bike.position.z <= -30)
                                {
                                    JumptoFloor(bike, bike.jumpAnim);
                                } 
                            }
                        }
                    }
                    if(bike.position.y == 20)
                    {
                        if(bike.position.z >= -11 && bike.position.x >= 70 && bike.position.z <= -10 && bike.position.x <= 90)
                        {
                            if(bike.up > 2) 
                            {
                                DownBikeonRamp2(bike, bike.rampAnim);
                                bike.up = 0;
                            }
                            else
                                bike.up++;

                        }
                        else
                            {
                                if(bike.position.x <= 10 || bike.position.x>= 90 || bike.position.z >= 90)
                                {
                                    JumptoFloor2(bike, bike.jumpAnim);
                                } 
                                else
                                {
                                    if(bike.position.z >= -11 && bike.position.x <= 69 && bike.position.z <= -10)
                                    {
                                        JumptoFloor2(bike, bike.jumpAnim);
                                    }

                                }
                            }
                    }
                    
                }
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
    if (object.deathAnim === false) {
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
                            { y: object.position.y + 0.2, z: bike_position },
                            { y: object.position.y + 0.2, z: bike_position}
                        ],
                        target:object.position
                    }
                ],
            loop: false,
            duration: rotateAnim_duration * 1000,
        });
        bikeDeath.start();
        object.deathAnim = true;
    }
    
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
                    target:object.children[0].rotation
                },
                { 
                    keys:[0, 1], 
                    values:[
                        { y: bike_position.y},
                        { y: bike_position.y - 5}
                    ],
                    target:object.children[0].position
                },

                { 
                    keys:[0, 1], 
                    values:[
                        { x:0},
                        { x:-Math.PI/2}
                    ],
                    target:object.children[1].rotation
                },
                { 
                    keys:[0, 1], 
                    values:[
                        { y: bike_position.y},
                        { y: bike_position.y - 5}
                    ],
                    target:object.children[1].position
                },
                { 
                    keys:[0, 1], 
                    values:[
                        { x:0},
                        { x:-Math.PI/2}
                    ],
                    target:object.children[2].rotation
                },
                { 
                    keys:[0, 1], 
                    values:[
                        { y: bike_position.y},
                        { y: bike_position.y - 5}
                    ],
                    target:object.children[2].position
                },
                { 
                    keys:[0, 1], 
                    values:[
                        { x:0},
                        { x:-Math.PI/2}
                    ],
                    target:object.children[3].rotation
                },
                { 
                    keys:[0, 1], 
                    values:[
                        { y: bike_position.y},
                        { y: bike_position.y - 5}
                    ],
                    target:object.children[3].position
                }
            ],
        loop: false,
        duration: rotateAnim_duration * 1000,
    });
    bikeOffLimits.start();
}

function BikeonRamp1(object, rampAnim){
    rampAnim.init({ 
        interps:
            [
                { 
                    keys:[0, 0.25, 0.5, 0.75, 1], 
                    values:[
                        { y: object.position.y + 2, z: -14 },
                        { y: object.position.y + 4, z: -18 },
                        { y: object.position.y + 6, z: -22 },
                        { y: object.position.y + 8, z: -26 },
                        { y: object.position.y + 10, z: -30 }
                    ],
                    target:object.position
                }
            ],
        loop: false,
        duration: rotateAnim_duration * 1000,
    });
    rampAnim.start();
}

function DownBikeonRamp1(object, rampAnim){
    rampAnim.init({ 
        interps:
            [
                { 
                    keys:[0, 0.25, 0.5, 0.75, 1], 
                    values:[
                        { y: object.position.y - 2, z: -26 },
                        { y: object.position.y - 4, z: -22 },
                        { y: object.position.y - 6, z: -18 },
                        { y: object.position.y - 8, z: -14 },
                        { y: object.position.y - 10, z: -10 }
                    ],
                    target:object.position
                }
            ],
        loop: false,
        duration: rotateAnim_duration * 1000,
    });
    rampAnim.start();
}

function BikeonRamp2(object, rampAnim){
    rampAnim.init({ 
        interps:
            [
                { 
                    keys:[0, 0.25, 0.5, 0.75, 1], 
                    values:[
                        { y: object.position.y + 2, z: -26 },
                        { y: object.position.y + 4, z: -22 },
                        { y: object.position.y + 6, z: -18 },
                        { y: object.position.y + 8, z: -14 },
                        { y: object.position.y + 10, z: -10 }
                    ],
                    target:object.position
                }
            ],
        loop: false,
        duration: rotateAnim_duration * 1000,
    });
    rampAnim.start();
}

function DownBikeonRamp2(object, rampAnim){
    rampAnim.init({ 
        interps:
            [
                { 
                    keys:[0, 0.25, 0.5, 0.75, 1], 
                    values:[
                        { y: object.position.y - 2, z: -14 },
                        { y: object.position.y - 4, z: -18 },
                        { y: object.position.y - 6, z: -22 },
                        { y: object.position.y - 8, z: -26 },
                        { y: object.position.y - 10, z: -30 }
                    ],
                    target:object.position
                }
            ],
        loop: false,
        duration: rotateAnim_duration * 1000,
    });
    rampAnim.start();
}

function JumptoFloor(object, jumpAnim)
{
    jumpAnim.init({ 
        interps:
            [
                { 
                    keys:[0, 0.25, 0.5, 0.75, 1], 
                    values:[
                        { y: object.position.y - 2},
                        { y: object.position.y - 4},
                        { y: object.position.y - 6},
                        { y: object.position.y - 8},
                        { y: object.position.y - 10}
                    ],
                    target:object.position
                }
            ],
        loop: false,
        duration: rotateAnim_duration * 1000,
    });
    jumpAnim.start();
}

function JumptoFloor2(object, jumpAnim)
{
    jumpAnim.init({ 
        interps:
            [
                { 
                    keys:[0, 0.25, 0.5, 0.75, 1], 
                    values:[
                        { y: object.position.y - 4},
                        { y: object.position.y - 8},
                        { y: object.position.y - 12},
                        { y: object.position.y -16},
                        { y: object.position.y - 20}
                    ],
                    target:object.position
                }
            ],
        loop: false,
        duration: rotateAnim_duration * 1000,
    });
    jumpAnim.start(); 
}