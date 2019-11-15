async function loadBikeMTL() {

    var mtlLoader = new THREE.MTLLoader();
  
    mtlLoader.load( '../models/classicTronGreen/classic-1982-tron-light-cycle-green.mtl', function( materials ) {
        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials( materials );

        objLoader.load('../models/classicTronGreen/classic-1982-tron-light-cycle-green.obj', function ( object ) {
            tron_bike_green = object;
            
            scene.add( tron_bike_green );
        });
    });

    var mtlLoader2 = new THREE.MTLLoader();

    mtlLoader2.load( '../models/classicTronBlue/classic-1982-tron-light-cycle-blue.mtl', function( materials ) {
        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials( materials );

        objLoader.load('../models/classicTronBlue/classic-1982-tron-light-cycle-blue.obj', function ( object ) {
            tron_bike_blue = object;
        
            scene.add( tron_bike_blue );
        });
    });
    
}