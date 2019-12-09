function setStart() {
    arrPlaneCoords = [];
    roundOver = false;
    tron_bike_green.death = false;
    tron_bike_blue.death = false;
    tron_bike_green.deathAnim = false;
    tron_bike_blue.deathAnim = false;
    tron_bike_green.limits = true;
    tron_bike_blue.limits = true;

    tron_bike_blue.position.x = -20;
    tron_bike_blue.position.y = 0;
    tron_bike_blue.position.z = 0;
    tron_bike_blue.rotation.x = 0;
    tron_bike_blue.rotation.y = 0;
    tron_bike_blue.rotation.z = 0;

    tron_bike_green.position.x = 20;
    tron_bike_green.position.y = 0;
    tron_bike_green.position.z = 0;
    tron_bike_green.rotation.x = 0;
    tron_bike_green.rotation.y = 0;
    tron_bike_green.rotation.z = 0;

    controller();
}