const doctorsData = [
  {
    name: "Dr. John Doe",
    specialty: "General",
    hospital: "City Hospital",
    ratings: 4.5,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*",
  },
  {
    name: "Dr. Jane Doe",
    specialty: "General",
    hospital: "City Hospital",
    ratings: 4.5,
    image:
      "https://www.yourfreecareertest.com/wp-content/uploads/2018/01/how_to_become_a_doctor.jpg",
  },
  {
    name: "Dr. John Doe",
    specialty: "General",
    hospital: "City Hospital",
    ratings: 4.5,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*",
  },
  {
    name: "Dr. Alice Smith",
    specialty: "Dentist",
    hospital: "Smile Clinic",
    ratings: 4.8,
    image: "alice_smith.jpg",
  },
  // Add more doctor details as needed
];

const searchInput = document.getElementById("searchInput");
const searchSuggestions = document.getElementById("searchSuggestions");
const doctorDetailsContainer = document.getElementById("doctorDetails");

// Display default search suggestions when the input field is clicked
searchInput.addEventListener("click", function () {
  // Show the default suggestions
  displayDefaultSuggestions();
});

// Function to display default suggestions
function displayDefaultSuggestions() {
  const defaultSuggestionsHTML = doctorsData
    .reduce((acc, doctor) => {
      if (!acc.includes(doctor.specialty)) {
        acc.push(doctor.specialty);
      }
      return acc;
    }, [])
    .map(
      (specialty) => `<div class="search-suggestion">
        <p class="specialty-name">${specialty}</p>
      </div>`
    )
    .join("");

  searchSuggestions.innerHTML = defaultSuggestionsHTML;

  // Show the suggestions
  searchSuggestions.style.display = "block";
}

// Display doctor details on specialty click
searchSuggestions.addEventListener("click", function (event) {
  const selectedSpecialty = event.target.textContent.trim().toLowerCase();
  let filteredDoctors;

  if (selectedSpecialty === "general") {
    // Filter for doctors under the 'General' specialty
    filteredDoctors = doctorsData.filter(
      (doctor) => doctor.specialty.toLowerCase() === "general"
    );
  } else {
    // Filter for doctors with the selected specialty
    filteredDoctors = doctorsData.filter(
      (doctor) => doctor.specialty.toLowerCase() === selectedSpecialty
    );
  }

  const doctorDetailsHTML = filteredDoctors
    .map(
      (doctor) => `
      <div class="doctor-detail">
        <div>
          <a href="./pages/about-me.html" class="doctor-flex">
            <div>
              <img src="${doctor.image}" class="doctor-image" alt="${doctor.name}">
            </div>
            <div>
              <span class="doctor-name">${doctor.name}</span>
              <div class="doctor-flexs">
                <p>${doctor.specialty}</p>
                <p>${doctor.hospital}</p>
              </div>
              <p>Ratings: ${doctor.ratings} <i class="fa-solid fa-star"></i></p>

            </div>
          </a>
        </div>
      </div>
    `
    )
    .join("");

  // Wrap doctor details in a main container
  const mainContainerHTML = `
    <div class="main-container">
      ${doctorDetailsHTML}
    </div>
  `;

  doctorDetailsContainer.innerHTML = mainContainerHTML;

  // Hide the suggestions after a selection
  searchSuggestions.style.display = "none";
});

// Update suggestions based on search input
searchInput.addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  const filteredSpecialties = doctorsData
    .filter((doctor) => doctor.specialty.toLowerCase().includes(searchTerm))
    .reduce((acc, doctor) => {
      if (!acc.includes(doctor.specialty)) {
        acc.push(doctor.specialty);
      }
      return acc;
    }, []);

  const suggestionsHTML = filteredSpecialties
    .map(
      (specialty) => `<div class="search-suggestion">
        <p class="specialty-name">${specialty}</p>
      </div>`
    )
    .join("");

  searchSuggestions.innerHTML = suggestionsHTML;

  // Show the suggestions
  searchSuggestions.style.display = "block";
});

// Close suggestions when clicking outside the search input, suggestions, and doctor details
document.addEventListener("click", function (event) {
  const isClickInsideSearch = searchInput.contains(event.target);
  const isClickInsideSuggestions = searchSuggestions.contains(event.target);
  const isClickInsideDoctorDetails = doctorDetailsContainer.contains(
    event.target
  );

  if (
    !isClickInsideSearch &&
    !isClickInsideSuggestions &&
    !isClickInsideDoctorDetails
  ) {
    // Clicked outside, hide the suggestions and doctor details
    searchSuggestions.style.display = "none";
    doctorDetailsContainer.innerHTML = ""; // Clear doctor details
  }
});
