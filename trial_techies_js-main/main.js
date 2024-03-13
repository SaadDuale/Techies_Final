import profileData from "./profiles.js";

// Function to generate HTML for a single profile card
function generateProfileCard(profile) {
  return `
    <div id="${profile.id}" class="profile">
      <div class="textContent">
        <h2 class="name">${profile.name}</h2>
        <p class="description">${profile.description}</p>
      </div>
      <img class="picture" src="${profile.imageUrl}" alt="${profile.name}" />
    </div>
  `;
}

// Function to generate profile cards for all profiles and insert them into the DOM
function generateProfiles(profiles) {
  // Select the container element where profile cards will be appended
  const allProfilesSection = document.querySelector(".allProfiles");

  // Generate HTML for all profiles using the map function and join them into a single string
  const profileCardsHTML = profiles
    .map((profile) => generateProfileCard(profile))
    .join("");

  // Set the inner HTML of the container element to the generated profile cards HTML
  allProfilesSection.innerHTML = profileCardsHTML;
}

// Generate profile cards for the given profile data and insert them into the DOM
generateProfiles(profileData);
