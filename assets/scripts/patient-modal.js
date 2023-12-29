// patient-modal.js

// Function to open the "Book Appointment" modal
function openModal() {
    const modal = document.getElementById('appointmentModal');
    modal.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('appointmentModal');
    modal.style.display = 'none';
}

// Function to handle form submission


// Function to close the confirmation modal
function closeConfirmationModal() {
    const confirmationModal = document.getElementById('confirmationModal');
    confirmationModal.style.display = 'none';
}

// Function to open the "Book Appointment" modal again
function openBookAppointmentModal() {
    closeConfirmationModal();
    openModal();
}

// Attach the submitForm function to the form submit event
const appointmentForm = document.getElementById('appointmentForm');
appointmentForm.addEventListener('submit', submitForm);

// Attach the openModal function to the "Book Appointment" button
const bookAppointmentBtn = document.getElementById('bookAppointmentBtn');
bookAppointmentBtn.addEventListener('click', openModal);


// appointment confirmation modal


function submitForm() {
    // Logic to submit the form (you can add your logic here)

    // Close the appointment modal
    closeModal();

    // Show the "Appointment Confirmed" modal
    showConfirmationModal();
  }

  // Function to show the confirmation modal
  function showConfirmationModal() {
    const confirmationModal = document.getElementById("confirmationModal");
    confirmationModal.style.display = "block";

    // Remove the modal after 3 seconds
    setTimeout(() => {
      confirmationModal.style.display = "none";
    }, 3000);
  }

  // Function to close the appointment modal
  function closeModal() {
    const appointmentModal = document.getElementById("appointmentModal");
    appointmentModal.style.display = "none";
  }