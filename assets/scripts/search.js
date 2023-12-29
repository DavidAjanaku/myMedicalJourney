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
  
];

const searchInput = document.getElementById("searchInput");
const searchSuggestions = document.getElementById("searchSuggestions");
const doctorDetailsContainer = document.getElementById("doctorDetails");

// displays  search suggestions when  input field is clicked.
searchInput.addEventListener("click", function () {

  // shows the default suggestions
  displayDefaultSuggestions();
});

// function is to display default suggestions
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

  // this is to show the  suggestions
  searchSuggestions.style.display = "block";
}

searchSuggestions.addEventListener("click", function (event) {
  const selectedSpecialty = event.target.textContent.trim().toLowerCase();
  let filteredDoctors;

  if (selectedSpecialty === "general") {
    filteredDoctors = doctorsData.filter(
      (doctor) => doctor.specialty.toLowerCase() === "general"
    );
  } else {
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

  const mainContainerHTML = `
    <div class="main-container">
      ${doctorDetailsHTML}
    </div>
  `;

  doctorDetailsContainer.innerHTML = mainContainerHTML;

  searchSuggestions.style.display = "none";
});

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

// cloes the suggestions when clicking outside the search input, suggestions, and doctor details
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
    searchSuggestions.style.display = "none";
    doctorDetailsContainer.innerHTML = ""; 
  }
});
