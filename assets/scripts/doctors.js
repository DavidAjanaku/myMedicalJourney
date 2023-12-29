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
  let foundDoctors = false;

  doctorCards.forEach(card => {
    const ratingElement = card.querySelector('.doctor-content p:last-child');
    const rating = ratingElement ? parseFloat(ratingElement.innerText.split(': ')[1]).toFixed(1) : 0;

    if (selectedRating === 'all' || rating >= parseFloat(selectedRating)) {
      card.style.display = 'flex';
      foundDoctors = true;
    } else {
      card.style.display = 'none';
    }
  });

  // Get the element where you want to display the message
  const messageElement = document.getElementById('noDoctorsMessage');

  if (!foundDoctors) {
    // Display a message when no doctors match the selected rating
    messageElement.innerHTML = 'No doctors with this rating.';
  } else {
    // Clear the message when doctors are found
    messageElement.innerHTML = 'No doctors with this rating.';
  }
}



