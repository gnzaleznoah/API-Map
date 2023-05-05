        //create map container
        var map = L.map('map').setView([37.89107798661859, -121.91759862164699], 10.25);
    
        //add map image tyles to map 
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        L.marker(center).addTo(map); 
        L.marker([37.929810353187975, -122.0748552425516]).addTo(map);

        var imageUrl = ('images/IMG_6352.jpg'),
        imageBound = [center, [37.929810353187975, -122.0748552425516]];

        L.imageOverlay(imageUrl, imageBounds).addTo(map);

        //Add marker  to map
        // marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

        var popup = L.popup()
        .setLatLng([37.9674193596657, -121.73549953353124])
        .setContent('<img class="icon1" src="images/mt_diablo-109.jpg">')
        .openOn(map)
        .bindPopup(popup,{closeOnClick: false, autoClose: false});

        // var popup2 = L.popup()
        // .setLatLng([38.019047, -121.898251])
        // .setContent('<img class="icon1" src="images/IMG_6352.jpg">')
        // .openOn(map);


    

        // var img1Icon = L.icon({
        //     iconUrl: 'images/mt_diablo-109.jpg',

        //     iconSize:[38, 95], // size of icon
        //     iconAnchor:[22, 94], // point of icon which will correspond to marker's location 
        //     popupAnchor: [-3,-76] // point from which the popup should open relative to iconAnchor
        // });

        // // var myIcon = L.divIcon({className: 'icon1'});

        // L.marker([37.9674193596657, -121.73549953353124], {icon: myIcon}).addTo(map);