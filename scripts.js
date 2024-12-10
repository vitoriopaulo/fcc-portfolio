const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const close = document.getElementById('close');
const menuLinks = document.querySelectorAll('.mobile-menu .menu-content a');

// Open the mobile menu
hamburger.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
});

// Close the mobile menu when the close button is clicked
close.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

// Close the menu and scroll to the section when a link is clicked
menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = link.getAttribute('href').substring(1); // Get the ID without the #
    const targetSection = document.getElementById(targetId);

    // Scroll to the target section
    targetSection.scrollIntoView({ behavior: 'smooth' });

    // Close the mobile menu
    mobileMenu.style.display = 'none';
  });
});

// Close the menu when clicking outside the modal
window.addEventListener('click', (event) => {
  if (event.target === mobileMenu) {
    mobileMenu.style.display = 'none';
  }
});
