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
var rotateAnim_duration = 0.5;
var bikeSpeed = -0.05;
var blueRotateAnim = new KF.KeyFrameAnimator;
var greenRotateAnim = new KF.KeyFrameAnimator;
var canRotate_blue = null;
var canRotate_green = null;