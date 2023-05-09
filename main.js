var locations = [
        ["<img class='icon1' src='images/IMG_6286.jpg'>", 37.972742, -121.740818],
        ["<img class='icon1' src='images/IMG_6352.jpg'>",38.019047, -121.898251],
        ["<img class='icon1' src='images/Vasco_Rd_WindMillsHDR.jpg'>", 37.806325, -121.672724],
        ["<img class='icon1' src='images/San_Francisco.jpg'>", 37.87239738738917, -122.22062356735398],
        ["<img class='icon1' src='images/mt_diablo-109.jpg'>", 37.967373, -121.735475],
        ["<img class='icon1' src='images/IMG_6374.jpg'>", 38.011057, -122.015636],
        ["<img class='icon1' src='images/Oakland_pier.jpg'>", 37.805238, -122.333107],
        ["<img class='icon1' src='images/Air_Bart.jpg'>", 37.741817, -122.197539],
        ["<img class='icon1' src='images/Japanese_Gardens_Hayward.jpg'>", 37.678252, -122.079873],
        ["<img class='icon1' src='images/Emeryville_sf.jpg'>", 37.837321, -122.315151]
];
       //create map container
        var map = L.map('map').setView([37.89107798661859, -121.91759862164699], 10.25);
    
        //add map image tyles to map 
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);


        for (var i =0; i<locations.length; i++){
                marker = new L.marker([locations[i][1],locations[i][2]])
                .addTo(map)
                .bindPopup(locations[i][0])
                .openPopup();
        }