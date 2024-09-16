document.querySelector('form.search').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting
    
    const searchInput = document.querySelector('.search input').value.toLowerCase();
    const recipeCards = document.querySelectorAll('.recipe-card');
    let found = false;

    recipeCards.forEach(function (card) {
        const recipeTitle = card.querySelector('h2').textContent.toLowerCase();
        const recipeDesc = card.querySelector('p').textContent.toLowerCase();

        if (recipeTitle.includes(searchInput) || recipeDesc.includes(searchInput)) {
            card.style.display = 'block'; // Show the matching card
            found = true;
        } else {
            card.style.display = 'none'; // Hide the non-matching card
        }
    });

    if (!found) {
        alert('No matching recipes found!');
    }
});

// index.js
// function toggleMenu() {
//     const navBar = document.querySelector('.nav-bar');
//     navBar.classList.toggle('active'); // Toggles the active class to slide the menu in and out
// }

// index.js

function toggleMenu() {
    const navBar = document.querySelector('.nav-bar');
    const overlay = document.querySelector('.overlay');
    navBar.classList.toggle('active'); // Toggles the active class to slide the menu in and out
    overlay.classList.toggle('active'); // Toggle the overlay visibility
}

// Function to close the menu when a link is clicked
function closeMenu() {
    const navBar = document.querySelector('.nav-bar');
    const overlay = document.querySelector('.overlay');
    navBar.classList.remove('active'); // Remove the active class to hide the menu
    overlay.classList.remove('active'); // Remove the overlay visibility
}

// Add event listener to menu links
document.querySelectorAll('.nav-bar a').forEach(link => {
    link.addEventListener('click', function () {
        closeMenu(); // Close menu when link is clicked
    });
});

