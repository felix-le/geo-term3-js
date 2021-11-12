var map = L.map('mapid').setView([43.653225, -79.383186], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([43.653225, -79.383186])
  .addTo(map)
  .bindPopup("Hey I'm here!")
  .openPopup();
