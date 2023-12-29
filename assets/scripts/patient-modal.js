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
function submitForm(event) {
    event.preventDefault();

    // Show the confirmation modal
    const confirmationModal = document.getElementById('confirmationModal');
    confirmationModal.style.display = 'flex';

    // Close the appointment modal
    closeModal();
}

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
