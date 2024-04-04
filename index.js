// JavaScript for the burger menu toggle with animation 
document.addEventListener('DOMContentLoaded', function() {
    var burger = document.getElementById('burger-menu');
    var nav = burger.nextElementSibling;

    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('collapsed');
        nav.classList.toggle('expanded');
    });
});

// JavaScript for the dark mode toggle with local storage
document.addEventListener('DOMContentLoaded', function() {
    var darkModeSwitch = document.getElementById('darkbtn');
    var isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Initialize the dark mode based on local storage
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeSwitch.checked = true;
    }

    darkModeSwitch.addEventListener('change', function(event) {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', event.target.checked);
    });
});

// JavaScript for the education section
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        button.setAttribute('aria-expanded', accordionContent.style.display === 'block' ? 'false' : 'true');
        accordionContent.style.display = accordionContent.style.display === 'block' ? 'none' : 'block';
    });
});
