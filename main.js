        //create map container
        var map = L.map('map').setView([37.89107798661859, -121.91759862164699], 10.25);
    
        //add map image tyles to map 
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        var locations = [
                [37.929810353187975, -122.0748552425516],
                [38.019047, -121.898251],
                [37.806325, -121.672724],
                [37.87239738738917, -122.22062356735398],
        ];

        for (var i =0; i<locations.length; i++){
                marker = new L.marker;([locations[i][1],locations[i][2]])
                .bindPopup(locations[i][0])
                .addTo(map);
        }