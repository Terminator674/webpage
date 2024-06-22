   // JavaScript to toggle settings submenu
   document.querySelector('.settings').addEventListener('click', function(event) {
    event.preventDefault();
    var settingsSubmenu = document.querySelector('.settings-submenu');
    settingsSubmenu.style.display = (settingsSubmenu.style.display === 'block') ? 'none' : 'block';
});
document.addEventListener('DOMContentLoaded', function() {
    var settingsButton = document.querySelector('.settings');
    var settingsSubmenu = document.querySelector('.settings-submenu');

    settingsButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        settingsSubmenu.classList.toggle('show'); // Toggle visibility of the settings submenu
    });
})

// Close settings submenu when clicking anywhere else on the page
document.addEventListener('click', function(event) {
    var clickedElement = event.target;
    var settingsSubmenu = document.querySelector('.settings-submenu');
    if (!clickedElement.closest('.title-bar')) {
        settingsSubmenu.style.display = 'none';
    }
 });
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function scrollHandler() {
    const elements = document.querySelectorAll('.animated');
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('appear');
        } else {
            element.classList.remove('appear');
        }
    });
}

// Attach scroll event listener
window.addEventListener('scroll', scrollHandler);

// Initial check on page load
document.addEventListener('DOMContentLoaded', scrollHandler);
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the links
    var homeLink = document.querySelector('.settings-submenu a[href="#"]');
    var aboutLink = document.querySelector('.settings-submenu a[href="#about"]');
    var projectsLink = document.querySelector('.settings-submenu a[href="#projects"]');
    
    // Add click event listeners
    homeLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        // Scroll to the content section
        document.querySelector('.content').scrollIntoView({ behavior: 'smooth' });
    });

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        // Scroll to the content-boxes section
        document.querySelector('.content-boxes').scrollIntoView({ behavior: 'smooth' });
    });

    projectsLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        // Scroll to the image-container section
        document.querySelector('.image-container').scrollIntoView({ behavior: 'smooth' });
    });
});
