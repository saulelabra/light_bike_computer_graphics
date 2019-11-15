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
    //camera = new THREE.PerspectiveCamera( 45, canvas.width / canvas.height, 1, 4000 );
    //camera.position.set(0, 15, 120);
    //scene.add(camera);
    
    camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 1, 4000);
    camera_control = new THREE.OrbitControls(camera, canvas);
    camera.position.y = 10;
    camera.position.z = 10;
    camera_control.update();
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

    // Import light bike mtl
    loadBikeMTL();
    
    // Create planes and add it to the group
    planeMeshGroup = createPlanes();

    group.add( planeMeshGroup );
    planeMeshGroup.castShadow = false;
    planeMeshGroup.receiveShadow = true;
    
    // Now add the group to our scene
    scene.add( root );
}

function createPlanes() {
    // Create a texture map
    var map = new THREE.TextureLoader().load(mapUrl);
    map.wrapS = map.wrapT = THREE.RepeatWrapping;
    map.repeat.set(8, 8);

    var color = 0xffffff;

    var planesGroup = new THREE.Object3D;

    // Level 1
    var geometry1 = new THREE.PlaneGeometry(200, 200, 100, 100);
    var mesh1 = new THREE.Mesh(geometry1, new THREE.MeshPhongMaterial({color:color, map:map, side:THREE.DoubleSide}));
    mesh1.rotation.x = -Math.PI / 2;

    //Level 2
    var geometry2 = new THREE.PlaneGeometry(200, 200, 100, 100);
    var mesh2 = new THREE.Mesh(geometry2, new THREE.MeshPhongMaterial({color:color, map:map, side:THREE.DoubleSide}));
    mesh2.rotation.x = -Math.PI / 2;
    mesh2.position.y = 10;

    //Level 3
    var geometry3 = new THREE.PlaneGeometry(200, 200, 100, 100);
    var mesh3 = new THREE.Mesh(geometry3, new THREE.MeshPhongMaterial({color:color, map:map, side:THREE.DoubleSide}));
    mesh3.rotation.x = -Math.PI / 2;
    mesh3.position.y = 20;

    planesGroup.add(mesh1);
    planesGroup.add(mesh2);
    planesGroup.add(mesh3);

    return planesGroup;
}

