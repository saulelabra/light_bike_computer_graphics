function run() {     
    requestAnimationFrame(function() { run(); });

    // Render the scene
    renderer.render( scene, camera );
    KF.update();
}