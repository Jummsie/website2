function hamburg(){
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
  }
  
  function cancel(){
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
  }
// Typewriter effect for different roles
const roles = ["an Actor", "a Musician", "a TV Personality", "a Lawyer"];
let roleIndex = 0;
let charIndex = 0;
let currentRole = '';
const typeSpeed = 150; // Speed of typing
const eraseSpeed = 100; // Speed of erasing
const delayBetweenRoles = 1500; // Delay before starting to erase

const rolesElement = document.getElementById('roles'); // Target the roles element


// Type writer effect only if the 'roles' element exists
if (rolesElement) {
function typeWriter() {
    if (charIndex < roles[roleIndex].length) {
        currentRole += roles[roleIndex].charAt(charIndex);
        rolesElement.textContent = currentRole;
        charIndex++;
        setTimeout(typeWriter, typeSpeed);
    } else {
        setTimeout(eraseRole, delayBetweenRoles); // Wait before starting to erase
    }
}

function eraseRole() {
    if (charIndex > 0) {
        currentRole = currentRole.substring(0, charIndex - 1);
        rolesElement.textContent = currentRole;
        charIndex--;
        setTimeout(eraseRole, eraseSpeed);
    } else {
        roleIndex = (roleIndex + 1) % roles.length; // Move to the next role
        setTimeout(typeWriter, typeSpeed); // Start typing the next role
    }
}

// Start the typewriter effect after the page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(typeWriter, delayBetweenRoles);
});
} else {
  console.error('Element with id "roles" not found.');
}


    // JavaScript to toggle the "View More" functionality
    const viewMoreBtn = document.getElementById('view-more-btn');
    const hiddenItems = document.querySelectorAll('.gallery-item.hidden');

    // Only add event listener if 'viewMoreBtn' exists
    if (viewMoreBtn){
    viewMoreBtn.addEventListener('click', function () {
        hiddenItems.forEach(item => {
            item.classList.toggle('hidden'); // Toggle the 'hidden' class
        });

        // Change button text based on the state
        if (viewMoreBtn.textContent === 'View More') {
            viewMoreBtn.textContent = 'View Less';
        } else {
            viewMoreBtn.textContent = 'View More';
        }
    });
  } else {
    console.error('Element with id "view-more-btn" not found.');
  }
// JavaScript to toggle the "View More" functionality
const viewMorePortfolioBtn = document.getElementById('view-more-portfolio-btn');
const hiddenItemsPortfolio = document.querySelectorAll('.portfolio-item.hidden'); // Assume hidden items have 'hidden' class

viewMorePortfolioBtn.addEventListener('click', function () {
    hiddenItemsPortfolio.forEach(item => {
        item.classList.toggle('hidden'); // Toggle the 'hidden' class
    });

    // Change button text based on the state
    if (viewMorePortfolioBtn.textContent === 'View More') {
        viewMorePortfolioBtn.textContent = 'View Less';
    } else {
        viewMorePortfolioBtn.textContent = 'View More';
    }
});

  document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('active');
  });


    