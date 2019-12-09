function run() {
    requestAnimationFrame( run );
    if(pause == false) {
        render();
        moveBike(tron_bike_blue);
        moveBike(tron_bike_green);
    
        stats.update();
        KF.update();
        
        checkCollision(tron_bike_blue);
        checkCollision(tron_bike_green);
        if (tron_bike_green.deathAnim == true || tron_bike_blue.deathAnim == true) {
            sleep(rotateAnim_duration * 1000).then(() => {
                // Do something after the sleep!
                scene.remove(scene.getObjectByName("tron_bike_blue"));
                scene.remove(scene.getObjectByName("tron_bike_green"));
                while(scene.getObjectByName( "plane" ) != undefined) {
                    scene.remove(scene.getObjectByName( "plane" ));
                }    
            });
        }
    }
    
    

//////////////////////////////////////Temporal///////////////////////////////////////////
    //controls.update();
////////////////////////////////////////////////////////////////////////////////////////puto commit
}

function render() {
    updateSize();
    for ( var ii = 0; ii < views.length; ++ ii ) {
        var view = views[ ii ];
        var camera = view.camera;
        view.updateCamera( camera, scene, mouseX, mouseY );
        var left = Math.floor( windowWidth * view.left );
        var bottom = Math.floor( windowHeight * view.bottom );
        var width = Math.floor( windowWidth * view.width );
        var height = Math.floor( windowHeight * view.height );
        renderer.setViewport( left, bottom, width, height );
        renderer.setScissor( left, bottom, width, height );
        renderer.setScissorTest( true );
        renderer.setClearColor( view.background );
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.render( scene, camera );
    }
}

function updateSize() {
    if ( windowWidth != window.innerWidth || windowHeight != window.innerHeight ) {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
        renderer.setSize( windowWidth, windowHeight );
    }
}

function checkCollision(bike) {
    var xMin;
    var xMax;
    var zMin;
    var zMax;
    for (var i=0;i<arrPlaneCoords.length - 10;i++) {
        xMin = arrPlaneCoords[i].x - bikeSpeed;
        xMax = arrPlaneCoords[i].x + bikeSpeed;
        zMin = arrPlaneCoords[i].z - bikeSpeed;
        zMax = arrPlaneCoords[i].z + bikeSpeed;
        
        if (bike.position.x < xMin && bike.position.x > xMax) {
            if (bike.position.z < zMin && bike.position.z > zMax)
            {
                if (bike.position.y === arrPlaneCoords[i].y) {
                    bike.death = true;
                }
                
            }
        }
            
        
    }
}

function stop() {
    if(pause == false) {
        pause = true;
    }else{
        pause = false;
    }       
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }