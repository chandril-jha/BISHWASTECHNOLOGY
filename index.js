// JavaScript for toggling the burger menu with animation
document.addEventListener('DOMContentLoaded', function() {
    // Get the burger menu icon and the navigation menu
    var burger = document.getElementById('burger-menu');
    var nav = burger.nextElementSibling;

    // Add event listener for the burger menu icon
    burger.addEventListener('click', function() {
        // Toggle 'active' class for burger menu icon
        this.classList.toggle('active');
        // Toggle 'collapsed' and 'expanded' classes for navigation menu
        nav.classList.toggle('collapsed');
        nav.classList.toggle('expanded');
    });
});

// JavaScript for toggling dark mode with local storage
document.addEventListener('DOMContentLoaded', function() {
    // Get the dark mode toggle switch and check if dark mode is enabled
    var darkModeSwitch = document.getElementById('darkbtn');
    var isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Initialize dark mode based on local storage
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeSwitch.checked = true;
    }

    // Add event listener for dark mode toggle switch
    darkModeSwitch.addEventListener('change', function(event) {
        // Toggle 'dark-mode' class on body
        document.body.classList.toggle('dark-mode');
        // Store dark mode preference in local storage
        localStorage.setItem('darkMode', event.target.checked);
    });
});

// JavaScript for the education section accordion
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        // Get the content of the accordion item
        const accordionContent = button.nextElementSibling;
        // Toggle aria-expanded attribute and display style of accordion content
        button.setAttribute('aria-expanded', accordionContent.style.display === 'block' ? 'false' : 'true');
        accordionContent.style.display = accordionContent.style.display === 'block' ? 'none' : 'block';
    });
});
