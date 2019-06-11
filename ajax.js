let myLocation = ((pos) => {
    
    let lat = pos.coords.latitude,
        long = pos.coords.longitude,
        coords = lat + ', ' + long;

    document.getElementById('google_map').setAttribute('src', 'https://maps.google.co.uk?q='+ coords +'&z=60&output=embed')
})

document.getElementById('get_location').onclick(() => {
    navigator.geolocation.getCurrentPosition(myLocation);
    return false;
});

//https://www.google.com/maps/embed?q=