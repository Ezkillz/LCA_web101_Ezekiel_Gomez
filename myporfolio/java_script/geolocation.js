var loc= document.getElementById('mylocation');

function mylocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        loc:innerHTML = "location tracking not possible";
    }
function showPosition(position){
    loc.innerHTML = "longitude: " + position.coords.longitude + "Latitude: ";
}
}
