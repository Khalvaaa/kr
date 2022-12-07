// Initialize and add the map
function initMap() {
    const location = {lat: 49.9913461340721, lng: 36.230021411666684};
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: location,
    });
    new google.maps.Marker({
        position: location,
        map: map,
        title: "KHALVA NAILS"
    });
}

window.initMap = initMap;