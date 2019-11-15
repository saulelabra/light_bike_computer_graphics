function run() {     
    requestAnimationFrame(function() { run(); });
    camera_control.update();
    // Render the scene
    renderer.render( scene, camera );
    KF.update();
}