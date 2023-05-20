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
