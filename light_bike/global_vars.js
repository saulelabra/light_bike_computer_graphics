//Misc
var renderer = null;
var scene = null;
var camera1 = null;
var camera2 = null;
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
var planeMeshGroup = null;

//Models
var light_bike_url = "../models/Light_Cycle/HQ_Movie\ cycle.mtl";
var tron_bike_blue = null;
var tron_bike_green = null;

//Camera
var mouseX = 0, mouseY = 0;
var windowWidth, windowHeight;
var views = null;
var stats = null;

//Movement
var rotateAnim_duration = 0.2;
var bikeSpeed = -0.5;
var blueRotateAnim = new KF.KeyFrameAnimator;
var greenRotateAnim = new KF.KeyFrameAnimator;
var canRotate_blue = null;
var canRotate_green = null;

//Trail green
var trail_width = 0.5;
var geometry = new THREE.BoxGeometry( trail_width, 1.5, trail_width);
var material = new THREE.MeshBasicMaterial( {color: "#00FC0F", side: THREE.DoubleSide, opacity: 0.5, transparent:true} );
var planeGreen = new THREE.Mesh( geometry, material );

//Trail2 blue
var material2 = new THREE.MeshBasicMaterial( {color: "#23F9EC", side: THREE.DoubleSide, opacity: 0.5, transparent:true} );
var planeBlue = new THREE.Mesh( geometry, material2 );

//Death animation
var bikeDeath = new KF.KeyFrameAnimator;
var bikeOffLimits = new KF.KeyFrameAnimator;
var count = 0;
var deathAnim = false;

//Colliders
var arrPlaneCoords = [];