function initialize() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoiam9vc2hpIiwiYSI6ImNsaDRjeTBiazBqeG0zZ281enNzOXR4cjcifQ.eLxwYoRL5rhHhQxjv9mZkg';
    const map = new mapboxgl.Map({
        container: document.getElementById("map"), // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [78.9629, 20.5937], // starting position [lng, lat]
        zoom: 4, // starting zoom
    });

    map.on('load', () => {
        map.addSource('route', {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [
                        [-122.483696, 37.833818],
                        [-122.483482, 37.833174],
                        [-122.483396, 37.8327],
                        [-122.483568, 37.832056],
                        [-122.48404, 37.831141],
                        [-122.48404, 37.830497],
                        [-122.483482, 37.82992],
                        [-122.483568, 37.829548],
                        [-122.48507, 37.829446],
                        [-122.4861, 37.828802],
                        [-122.486958, 37.82931],
                        [-122.487001, 37.830802],
                        [-122.487516, 37.831683],
                        [-122.488031, 37.832158],
                        [-122.488889, 37.832971],
                        [-122.489876, 37.832632],
                        [-122.490434, 37.832937],
                        [-122.49125, 37.832429],
                        [-122.491636, 37.832564],
                        [-122.492237, 37.833378],
                        [-122.493782, 37.833683]
                    ]
                }
            }
        });
        map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'route',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': '#888',
                'line-width': 8
            }
        });
    });


    var marker = new mapboxgl.Marker()
    map.on('click', function (e) {
        // handle click event here
        // get the coordinates of the clicked location;
        var longitude = e.lngLat.lng;
        var latitude = e.lngLat.lat;
        // do something with the coordinates, e.g. display them on the page
        // Set marker options.
        marker.remove();
        marker = new mapboxgl.Marker({
            color: "#b20000",
            draggable: true
        }).setLngLat([longitude, latitude])
            .addTo(map);
        DotNet.invokeMethodAsync('test.Client', 'SayHello', longitude, latitude);
    });
}




