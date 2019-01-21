
// navigator.geolocation.getCurrentPosition(success, error);

//         function success(position) {
//             console.log(position.coords.latitude)
//             console.log(position.coords.longitude)

//             var lat = position.coords.latitude;
//             var long = position.coords.longitude;

//             var geocoding = "https://open.mapquestapi.com/geocoding/v1/reverse?key=5E8U1BWt24IXnRkcMymXdyeDKFRKD70c&location=" + lat + "," + long + " "; 
//             $.getJSON(geocoding).done(function(response) {
//                 console.log(response);
                
                
//             })

//         }

//         function error(err) {
//             console.log(err)
//         }

$.ajax({
    url: "https://geoip-db.com/jsonp",
    jsonpCallback: "callback",
    dataType: "jsonp",
    success: function( location ) {
        $('#country').html(location.country_name);
        $('#state').html(location.state);
        $('#city').html(location.city + ",");
        $('#latitude').html(location.latitude);
        $('#longitude').html(location.longitude);
        $('#ipv4').html(location.IPv4);
        console.log(location);  
    }
});		

var now = new moment();
console.log(now.format('MMMM Do YYYY, h:mm:ss a'));
document.getElementById("time").innerHTML = (now.format('MMMM Do YYYY, h:mm:ss a'));