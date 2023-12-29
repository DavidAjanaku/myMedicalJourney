function openTab(tabName) {
  const tabs = ['general', 'pediatrician', 'ent', 'dentist', 'orthopeadic'];
  tabs.forEach(tab => {
    const tabContent = document.getElementById(tab + 'Tab');
    if (tab === tabName) {
      tabContent.style.display = 'block';
    } else {
      tabContent.style.display = 'none';
    }
  });
}

// the general shows by default
document.addEventListener('DOMContentLoaded', function () {
  openTab('general');
});

function filterByRating() {
  const selectedRating = document.getElementById('ratingFilter').value;
  const doctorCards = document.querySelectorAll('.doctor-card');

  doctorCards.forEach(card => {
    const ratingElement = card.querySelector('.doctor-content p:last-child');
    const rating = ratingElement ? parseFloat(ratingElement.innerText.split(': ')[1]).toFixed(1) : 0;

    console.log(`Rating for ${card.querySelector('h3').innerText}: ${rating}`);

    if (selectedRating === 'all' || rating >= parseFloat(selectedRating)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}


