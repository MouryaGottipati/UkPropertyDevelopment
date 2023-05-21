const menuItems = document.querySelectorAll('.menu li');
const submenuItems = document.querySelectorAll('.submenu li');
const sections = Array.from(document.querySelectorAll('.content section'));

// Hide all sections except for the home section
sections.forEach(section => {
    if (section.className !== 'home') {
        section.style.display = 'none';
    }
});

menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', function() {
        const sectionId = this.id;

        const section = document.querySelector('.' + sectionId);

        if (section) {
            // Hide all sections except for the selected section
            sections.forEach(otherSection => {
                if (otherSection !== section) {
                    otherSection.style.display = 'none';
                }
            });

            section.style.display = 'block';

            // Check if the selected menu item has a submenu
            const submenu = this.querySelector('.submenu');
            if (submenu) {

                submenuItems.forEach(submenuItem => {
                    submenuItem.addEventListener('click', function(event) {
                        event.stopPropagation();
                        const subSectionId = this.id;
                        const subSection = document.querySelector('.' + subSectionId);
                        if (subSection) {
                            // Hide all sections except for the selected section
                            sections.forEach(otherSection => {
                                if (otherSection !== subSection) {
                                    otherSection.style.display = 'none';
                                }
                            });

                            subSection.style.display = 'block';
                        }
                    });
                });
            }
        }
    });
});

const screenWidth = window.innerWidth;
if (screenWidth <= 767) {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    menuIcon.addEventListener('click', handleMenuIconClick);
    const main = document.getElementById('main');
    // Function to handle menu icon click
    function handleMenuIconClick() {
        // if (menu.style.getPropertyValue('display').toString().toLowerCase() !== 'none') {

        // }
        // else {

        // }

        if (menuIcon.classList.contains('open')) {
            // The 'open' class is present
            // Perform actions when the class is present
            menuIcon.classList.remove('open');
            menu.style.display = 'none';
            main.style.marginBottom = 150 + 'px';


        } else {
            // The 'open' class is not present
            // Perform actions when the class is not present
            menuIcon.classList.toggle('open');
            menu.style.display = 'block';
            main.style.marginBottom = 250 + 'px';

        }

    }

    // // Function to handle menu item click
    // function handleMenuItemClick() {
    //   menuIcon.classList.remove('open');

    //   menu.style.display = 'none';
    // }

    // Attach click event listeners

    // menuItems.forEach(menuItem => {
    //   menuItem.addEventListener('click', handleMenuItemClick);
    // });
}