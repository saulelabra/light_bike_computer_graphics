class Panel {
    constructor() {
        //var lineMaterial = new THREE.LineBasicMaterial({color: 0xff00ff, linewidth:2});
    }

    createWall(bike, bikePosition) {
        if(bike.color == 0)
            var newPlane = plane.clone();
        else
            var newPlane = plane2.clone();
        newPlane.position.x = bikePosition.x;
        newPlane.position.y = bikePosition.y;
        newPlane.position.z = bikePosition.z;
        scene.add( newPlane );
        //console.log("coords %j", newPlane.rotation);
    }
}