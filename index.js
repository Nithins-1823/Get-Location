function sendLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const accu = position.coords.accuracy;

         document.getElementById("latitude").textContent = latitude;
        document.getElementById("longitude").textContent = longitude;
        document.getElementById("accuracy").textContent = accu;

        console.log(`Latitude is ${latitude},\nLongitude is ${longitude}\nAccuracy is ${accu}`);
      },
      (error) => {
        console.error("Something went wrong ", error.message);
      }
    );
  } else {
    console.log("Geolocation is not enabled for this browser");
  }
}



  
  
