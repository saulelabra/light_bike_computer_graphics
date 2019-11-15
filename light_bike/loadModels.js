function loadBikeMTL() {

    var mtlLoader = new THREE.MTLLoader();
  
    mtlLoader.load( '../models/classicTronGreen/classic-1982-tron-light-cycle-green.mtl', function( materials ) {

        console.log("loading mtl");
        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials( materials );

        objLoader.load('../models/classicTronGreen/classic-1982-tron-light-cycle-green.obj', function ( object ) {
            console.log("loading obj");
            tron_bike_green = object;
            player1 = object;

            player1.position.y = 5;
            player1.position.x = -5;
            player1.scale.set(20, 20, 20);
            player1.rotation.y = Math.PI/4;
            scene.add( player1 );
        });
    });

    var mtlLoader2 = new THREE.MTLLoader();

    mtlLoader2.load( '../models/classicTronBlue/classic-1982-tron-light-cycle-blue.mtl', function( materials ) {

        console.log("loading mtl");
        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials( materials );

        objLoader.load('../models/classicTronBlue/classic-1982-tron-light-cycle-blue.obj', function ( object ) {
            console.log("loading obj");
            tron_bike_blue = object;
            player2 = object;

            player2.position.y = 5;
            player2.position.x = 5;
            player2.scale.set(20, 20, 20);
            player2.rotation.y = Math.PI/4;
            scene.add( player2 );
        });
    });    
}