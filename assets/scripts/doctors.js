document.addEventListener('DOMContentLoaded', function () {
  openTab('general');
});

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
function getCurrentTab() {
  const tabs = ['general', 'pediatrician', 'ent', 'dentist', 'orthopeadic'];
  for (const tab of tabs) {
    const tabContent = document.getElementById(tab + 'Tab');
    if (tabContent.style.display === 'block') {
      return tab;
    }
  }
  return '';
}

function filterByRating() {
  const selectedRating = document.getElementById('ratingFilter').value;
  const doctorCards = document.querySelectorAll('.doctor-card');
  let foundDoctors = 0; // Initialize the counter

  doctorCards.forEach(card => {
    const ratingElement = card.querySelector('.doctor-content p:last-child');
    const rating = ratingElement ? parseFloat(ratingElement.innerText.split(': ')[1]).toFixed(1) : 0;

    if (selectedRating === 'all' || rating >= parseFloat(selectedRating)) {
      card.style.display = 'flex';
      foundDoctors += 1; // Increment the counter when a doctor is found
    } else {
      card.style.display = 'none';
    }
  });

  // Get the element where you want to display the message
  const currentTab = getCurrentTab();
  const messageElement = document.getElementById(`no${currentTab}DoctorsMessage`);

  if (foundDoctors === 0) {
    // Display a message when no doctors match the selected rating
    messageElement.textContent = `No ${currentTab} doctors with this rating.`;
    messageElement.style.display = 'block'; // Show the message element
  } else {
    // Hide the message when a doctor is found
    messageElement.style.display = 'none';
  }
}


