function initmap() {
    const placeId = 'Luana+Gomes+Beauty+%26+Co./@-15.8266269,-48.0635289,15.08z/data=!4m6!3m5!1s0x935a3bf5124f33ff:0xfd728cffab8b1cf6!8m2!3d-15.8229267!4d-48.0629413!16s%2Fg%2F11v3rnp825'; // Coloque aqui o Place ID
  
    const service = new google.maps.places.PlacesService(document.getElementById('google-reviews'));
  
    service.getDetails({
      placeId: placeId,
    }, function(place, status) {
      if (status === 'OK') {
        const reviews = place.reviews;
        if (reviews && reviews.length > 0) {
          const reviewsContainer = document.getElementById('google-reviews');
          reviews.forEach(function(review) {
            const reviewElement = document.createElement('div');
            reviewElement.className = 'review';
            reviewElement.innerHTML = `<p>${review.text}</p>`;
            reviewsContainer.appendChild(reviewElement);
          });
        }
      }
    });
  }
  