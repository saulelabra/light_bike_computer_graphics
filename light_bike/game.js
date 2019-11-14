//Misc
var renderer = null;
var scene = null;
var camera = null;
var root = null;
var bikes_group = null;
var group = null;
var animator = null;

//Lights
var directionalLight = null;
var spotLight = null;
var ambientLight = null;

//Environment
var mapUrl = "../images/grid.png";
var SHADOW_MAP_WIDTH = 2048, SHADOW_MAP_HEIGHT = 2048;

//Models
var light_bike_url = "../models/Light_Cycle/HQ_Movie\ cycle.mtl";
var tron_bike = null;

function createScene(canvas) {
    // Create the Three.js renderer and attach it to our canvas
    renderer = new THREE.WebGLRenderer( { canvas: canvas, antialias: true } );

    // Set the viewport size
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Turn on shadows
    renderer.shadowMap.enabled = true;
    // Options are THREE.BasicShadowMap, THREE.PCFShadowMap, PCFSoftShadowMap
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // Create a new Three.js scene
    scene = new THREE.Scene();

    // Add  a camera so we can view the scene
    camera = new THREE.PerspectiveCamera( 45, canvas.width / canvas.height, 1, 4000 );
    camera.position.set(0, 15, 120);
    scene.add(camera);
        
    // Create a group to hold all the objects
    root = new THREE.Object3D;

    var directionalLight = new THREE.DirectionalLight( 0xffffff, 1.0 );
    scene.add( directionalLight );

    ambientLight = new THREE.AmbientLight ( 0x888888 );
    root.add(ambientLight);

    // Create a group to hold the objects
    group = new THREE.Object3D;
    root.add(group);
    //root.add(bike_group);

    // Create a texture map
    var map = new THREE.TextureLoader().load(mapUrl);
    map.wrapS = map.wrapT = THREE.RepeatWrapping;
    map.repeat.set(8, 8);

    var color = 0xffffff;

    // Put in a ground plane to show off the lighting
    geometry = new THREE.PlaneGeometry(200, 200, 50, 50);
    var mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color:color, map:map, side:THREE.DoubleSide}));

    mesh.rotation.x = -Math.PI / 2;
    mesh.position.y = -4.02;

    // Import light bike mtl
    loadBikeMTL();
    
    // Add the mesh to our group
    group.add( mesh );
    mesh.castShadow = false;
    mesh.receiveShadow = true;
    
    // Now add the group to our scene
    scene.add( root );
}

function run() {     
    requestAnimationFrame(function() { run(); });

    // Render the scene
    renderer.render( scene, camera );
    KF.update();
}

function loadBikeMTL() {

    var mtlLoader = new THREE.MTLLoader();
  
    mtlLoader.load( '../models/classicTronGreen/classic-1982-tron-light-cycle-green.mtl', function( materials ) {

        console.log("loading mtl");
        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials( materials );

        objLoader.load('../models/classicTronGreen/classic-1982-tron-light-cycle-green.obj', function ( object ) {
            console.log("loading obj");

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

            player2 = object;

            player2.position.y = 5;
            player2.position.x = 5;
            player2.scale.set(20, 20, 20);
            player2.rotation.y = Math.PI/4;
            scene.add( player2 );
        });
    });    
}