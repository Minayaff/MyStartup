var myLatlng = new google.maps.LatLng(40.409264, 49.867092);
var myOptions = {
    zoom: 13,
    center: myLatlng
}
var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
var infoWindow;
var service;
google.maps.event.addListener(map, 'click', function (event) {
    service = new google.maps.places.PlacesService(map);
    infoWindow = new google.maps.InfoWindow();
    var request = {
        location: event.latLng,
        keyword: 'food',
        radius: 500
    };
    service.radarSearch(request, callback);

});

function callback(results, status) {
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
        console.error(status);
        return;
    }
    for (var i = 0, result; result = results[i]; i++) {
        addMarker(result);
    }
}

function addMarker(place) {
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        icon: {
            url: 'http://maps.gstatic.com/mapfiles/circle.png',
            anchor: new google.maps.Point(10, 10),
            scaledSize: new google.maps.Size(10, 17)
        }
    });

    google.maps.event.addListener(marker, 'click', function () {
        service.getDetails(place, function (result, status) {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
                console.error(status);
                return;
            }
            infoWindow.setContent(result.name + "<br>" + result.formatted_address + "<br>" + result.formatted_phone_number);
            infoWindow.open(map, marker);
        });
    });
}





let locarionArray = [];
document.getElementById('mapClick').addEventListener('click',(e)=>{
    e.preventDefault;
    locarionArray.push(document.querySelector('.title.full-width').innerText);
    for (let i = 0; i < 3; i++) { locarionArray.push(document.querySelector('.address').children[i].innerText); }
    console.dir(locarionArray);
});


