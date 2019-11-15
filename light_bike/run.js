function run() {     
    requestAnimationFrame(function() { run(); });

    moveBike(tron_bike_blue);
    moveBike(tron_bike_green);


    camera_control.update();
    // Render the scene
    renderer.render( scene, camera );
    KF.update();
}