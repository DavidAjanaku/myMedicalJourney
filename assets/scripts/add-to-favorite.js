// Function to show the added modal
function showAddedModal() {
  const addedModal = document.getElementById("addedModal");
  addedModal.style.display = "block";

  // Remove the modal after 2 seconds
  setTimeout(() => {
    addedModal.style.display = "none";
  }, 2000);
}

// Add a click event listener to the heart icon
const heartIcon = document.getElementById("heartIcon");
if (heartIcon) {
  heartIcon.addEventListener("click", showAddedModal);
}
