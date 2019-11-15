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
var tron_bike_blue = null;
var tron_bike_green = null;