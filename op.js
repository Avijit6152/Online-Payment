
document.addEventListener("DOMContentLoaded", function() {
  const sidebarLinks = document.querySelectorAll('.sidebar a');
  const sections = document.querySelectorAll('.section');

  sidebarLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetSectionId = this.getAttribute('data-section');
      sections.forEach(section => {
        if (section.id === targetSectionId) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    });
  });
});
