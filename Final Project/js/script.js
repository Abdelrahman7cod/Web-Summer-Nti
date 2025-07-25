document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Form submitted!'); 
});


function initMap() {
  const office = { lat: 18.5355, lng: 73.8851 }; 
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: office
  });
  new google.maps.Marker({ position: office, map });
}



/*    */


  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent successfully!');
  });