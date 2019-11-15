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

    setStart();
}

function createPlanes() {
    // Create a texture map for planes
    var plane_map = new THREE.TextureLoader().load(mapUrl);
    plane_map.wrapS = plane_map.wrapT = THREE.RepeatWrapping;
    plane_map.repeat.set(20, 20);

    // Create texture map for ramps
    var ramp_map = new THREE.TextureLoader().load(mapUrl);
    ramp_map.wrapS = ramp_map.wrapT = THREE.RepeatWrapping;
    ramp_map.repeat.set(20, 20);

    var color = 0xffffff;

    var planesGroup = new THREE.Object3D;

    // Level 1
    var plane_geometry_1 = new THREE.PlaneGeometry(200, 200, 100, 100);
    var plane1 = new THREE.Mesh(plane_geometry_1, new THREE.MeshPhongMaterial({color:color, map:plane_map, side:THREE.DoubleSide}));
    plane1.rotation.x = -Math.PI / 2;

    //Ramp 1
    var ramp_geometry_1 = new THREE.PlaneGeometry(20, 20, 100, 100);
    var ramp1 = new THREE.Mesh(ramp_geometry_1, new THREE.MeshPhongMaterial({color:color, map:ramp_map, side:THREE.DoubleSide}));
    ramp1.rotation.x = -Math.PI / 2.5;

    //Level 2
    var plane_geometry_2 = new THREE.PlaneGeometry(200, 200, 100, 100);
    var plane2 = new THREE.Mesh(plane_geometry_2, new THREE.MeshPhongMaterial({color:color, map:plane_map, side:THREE.DoubleSide}));
    plane2.rotation.x = -Math.PI / 2;
    plane2.position.y = 10;

    //Level 3
    var plane_geometry_3 = new THREE.PlaneGeometry(200, 200, 100, 100);
    var plane3 = new THREE.Mesh(plane_geometry_3, new THREE.MeshPhongMaterial({color:color, map:plane_map, side:THREE.DoubleSide}));
    plane3.rotation.x = -Math.PI / 2;
    plane3.position.y = 20;

    planesGroup.add(plane1);
    planesGroup.add(ramp1);
    planesGroup.add(plane2);
    planesGroup.add(plane3);

    return planesGroup;
}

