class Panel {
    constructor() {
        //var lineMaterial = new THREE.LineBasicMaterial({color: 0xff00ff, linewidth:2});
    }

    createWall(bike, bikePosition) {
        if (bike != undefined) {
            if(bike.color == 0) {
                var newPlane = planeGreen.clone();
            }         
            else
                var newPlane = planeBlue.clone();
            newPlane.position.x = bikePosition.x;
            newPlane.position.y = bikePosition.y;
            newPlane.position.z = bikePosition.z;
            arrPlaneCoords.push(newPlane.position);
            scene.add( newPlane );
        }
    }
}