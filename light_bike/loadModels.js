async function loadGreenBikeMTL() {

    var mtlLoader = new THREE.MTLLoader();
  
    mtlLoader.load( '../models/classicTronGreen/classic-1982-tron-light-cycle-green.mtl', function( materials ) {
        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials( materials );

        objLoader.load('../models/classicTronGreen/classic-1982-tron-light-cycle-green.obj', function ( object ) {
            tron_bike_green = object;
            tron_bike_green.add(camera2);

            camera2.position.z += 10;
            
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

            camera1.position.z += 10;
            
            scene.add( tron_bike_blue );
        });
    });
    
}