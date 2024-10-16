function createScene(container) {
    
    views = [
        {
            left: 0,
            bottom: 0,
            width: 0.5,
            height: 1.0,
            background: new THREE.Color( 0.5, 0.5, 0.7 ),
            eye: [ 0, 0, 20 ],
            up: [ 0, 0, 0 ],
            fov: 30,
            updateCamera: function ( camera, scene ) {
              camera.position.y = 4;
            }
        },
        {
            left: 0.5,
            bottom: 0,
            width: 0.5,
            height: 1.0,
            background: new THREE.Color( 0.7, 0.7, 0.5 ),
            eye: [ 0, 0, 20 ],
            up: [ 0, 0, 0 ],
            fov: 30,
            updateCamera: function ( camera, scene ) {
                camera.position.y = 4;
            }
        }
    ];
    scene = new THREE.Scene();

    var view = null;

    view = views[0];
    camera1 = new THREE.PerspectiveCamera( view.fov, window.innerWidth / window.innerHeight, 1, 10000 );
    camera1.position.fromArray( view.eye );
    camera1.up.fromArray( view.up );
    view.camera = camera1;

    view = views[1];
    camera2 = new THREE.PerspectiveCamera( view.fov, window.innerWidth / window.innerHeight, 1, 10000 );
    camera2.position.fromArray( view.eye );
    camera2.up.fromArray( view.up );
    view.camera = camera2;

    var light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 0, 0, 1 );
    scene.add( light );
    // shadow
    //canvas.width = 128;
    //canvas.height = 128;
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    //renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );
    stats = new Stats();
    root = new THREE.Object3D;

    var directionalLight = new THREE.DirectionalLight( 0xffffff, 1.0 );
    scene.add( directionalLight );

    ambientLight = new THREE.AmbientLight ( 0x888888 );
    root.add(ambientLight);

    // Create a group to hold the objects
    group = new THREE.Object3D;
    root.add(group);
    
    // Create planes and add it to the group
    planeMeshGroup = createPlanes();

    group.add( planeMeshGroup );
    planeMeshGroup.castShadow = false;
    planeMeshGroup.receiveShadow = true;
    
    // Import light bike obj and add it to the group with the cameras
    loadBlueBikeMTL();
    loadGreenBikeMTL();

    // instantiate a listener
    var audioListener = new THREE.AudioListener();

    // add the listener to the camera
    camera1.add( audioListener );

    // instantiate audio object
    var oceanAmbientSound = new THREE.Audio( audioListener );

    // add the audio object to the scene
    scene.add( oceanAmbientSound );

    var loader = new THREE.AudioLoader();

    // load a resource (music)
    loader.load(
        // resource URL
        '../music.mp3',
    
        // onLoad callback
        function ( audioBuffer ) {
            // set the audio object buffer to the loaded object
            oceanAmbientSound.setBuffer( audioBuffer );
    
            // play the audio
            oceanAmbientSound.play();
        },
    
        // onProgress callback
        function ( xhr ) {
            console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
        },
    
        // onError callback
        function ( err ) {
            console.log( 'An error happened' );
        }
    );

    // Now add the group to our scene
    scene.add( root );
}

function createPlanes() {
    // Create a texture map for planes
    var plane_map = new THREE.TextureLoader().load(mapUrl);
    plane_map.wrapS = plane_map.wrapT = THREE.RepeatWrapping;
    plane_map.repeat.set(20, 20);

    // Create texture map for ramps
    var ramp_map = new THREE.TextureLoader().load(mapUrl);
    ramp_map.wrapS = ramp_map.wrapT = THREE.RepeatWrapping;
    ramp_map.repeat.set(2, 2);

    var color = 0xffffff;

    var planesGroup = new THREE.Object3D;

    // Level 1
    var plane_geometry_1 = new THREE.PlaneGeometry(200, 200, 100, 100);
    var plane1 = new THREE.Mesh(plane_geometry_1, new THREE.MeshPhongMaterial({color:color, map:plane_map, side:THREE.DoubleSide}));
    plane1.rotation.x = -Math.PI / 2;

    //Ramp 1
    var ramp_geometry_1 = new THREE.PlaneGeometry(20, 20, 100, 100);
    var ramp1 = new THREE.Mesh(ramp_geometry_1, new THREE.MeshPhongMaterial({color:color, map:ramp_map, side:THREE.DoubleSide}));
    ramp1.rotation.x = -Math.PI / 2 + 0.52;
    ramp1.position.y = 5;
    ramp1.position.x = -80;
    ramp1.position.z = -20;

    //Ramp 2
    var ramp_geometry_2 = new THREE.PlaneGeometry(20, 20, 100, 100);
    var ramp2 = new THREE.Mesh(ramp_geometry_2, new THREE.MeshPhongMaterial({color:color, map:ramp_map, side:THREE.DoubleSide}));
    ramp2.rotation.x = Math.PI / 2 - 0.52;
    ramp2.position.y = 15;
    ramp2.position.x = 80;
    ramp2.position.z = -20;

    //Level 2
    var plane_geometry_2 = new THREE.PlaneGeometry(180, 102.68, 100, 100);
    var plane2 = new THREE.Mesh(plane_geometry_2, new THREE.MeshPhongMaterial({color:color, map:plane_map, side:THREE.DoubleSide}));
    plane2.rotation.x = -Math.PI / 2;
    plane2.position.y = 10;
    plane2.position.z = -80;

    //Level 3
    var plane_geometry_3 = new THREE.PlaneGeometry(80, 102.68, 100, 100);
    var plane3 = new THREE.Mesh(plane_geometry_3, new THREE.MeshPhongMaterial({color:color, map:plane_map, side:THREE.DoubleSide}));
    plane3.rotation.x = -Math.PI / 2;
    plane3.position.x = 50;
    plane3.position.y = 20;
    plane3.position.z = 40;

    planesGroup.add(plane1);
    planesGroup.add(ramp1);
    planesGroup.add(plane2);
    planesGroup.add(ramp2);
    planesGroup.add(plane3);

    return planesGroup;
}

