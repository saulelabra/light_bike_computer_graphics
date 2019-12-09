async function loadGreenBikeMTL() {

    var mtlLoader = new THREE.MTLLoader();
  
    mtlLoader.load( '../models/classicTronGreen/classic-1982-tron-light-cycle-green.mtl', function( materials ) {
        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials( materials );

        objLoader.load('../models/classicTronGreen/classic-1982-tron-light-cycle-green.obj', function ( object ) {
            tron_bike_green = object;
            tron_bike_green.add(camera2);
            tron_bike_green.death = false;
            tron_bike_green.deathAnim = false;
            tron_bike_green.limits = true;
            tron_bike_green.rampAnim = new KF.KeyFrameAnimator;
            tron_bike_green.jumpAnim = new KF.KeyFrameAnimator;
            tron_bike_green.up = 0;
            tron_bike_green.color = 0;
            tron_bike_green.position.x += 10;
            tron_bike_green.initialPosition = -10;
            camera2.position.z += 10;
            tron_bike_green.position.x = -10;
            
            scene.add( tron_bike_green );
        });
    });    
}

async function loadBlueBikeMTL() {
    var mtlLoader2 = new THREE.MTLLoader();

    mtlLoader2.load( '../models/classicTronBlue/classic-1982-tron-light-cycle-blue.mtl', function( materials ) {
        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials( materials );

        objLoader.load('../models/classicTronBlue/classic-1982-tron-light-cycle-blue.obj', function ( object ) {
            tron_bike_blue = object;
            tron_bike_blue.add(camera1);
            tron_bike_blue.death = false;
            tron_bike_blue.deathAnim = false;
            tron_bike_blue.limits = true;
            tron_bike_blue.rampAnim = new KF.KeyFrameAnimator;
            tron_bike_blue.jumpAnim = new KF.KeyFrameAnimator;
            tron_bike_blue.up = 0;
            tron_bike_blue.color = 1;
            tron_bike_blue.initialPosition = 10;

            camera1.position.z += 10;
            tron_bike_blue.position.x = 10;
            
            scene.add( tron_bike_blue );
        });
    });
    
}