(function () {
    'use strict';

    function onPositionReceived(position){
    console.log(position);
    }
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onPositionReceived, locationNotReceived, {timeout:5});
    
} () );

////// just a COPY AND PASTE comparison for now
//////(var myLocation = document.getElementById("my-coordinates")
//////
//////function getLocation() {
//////  if(navigator.geolocation){
//////    navigator.geolocation.getCurrentPosition(displayPosition)
//////  } else {
//////   myLocation.innerHTML = "Not available"
//////  }
//////}
//////
//////function displayPosition(position) {
//////  myLocation.innerHTML = "Longitude: " + position.coords.longitude + " Latitude: " + position.coords.latitude
//////}
