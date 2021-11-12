var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

const defaultLocation = {
  latitude: 43.7296141,
  longitude: -79.4845983,
};

const postLocation = (latitude, longitude) => {
  fetch('/api/locations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      latitude,
      longitude,
    }),
  });
};

function success(pos) {
  var crd = pos.coords;

  const { latitude, longitude } = crd;
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

// var map = L.map('mapid').setView([43.7296141, -79.4845983], 20);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution:
//     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// }).addTo(map);

// L.marker([43.7296141, -79.4845983])
//   .addTo(map)
//   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//   .openPopup();
