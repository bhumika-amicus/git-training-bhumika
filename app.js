document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Add a subtle message to the home section
  const homeSection = document.querySelector('#home');
  
  if (homeSection) {
    const message = document.createElement('div');
    message.className = 'js-message';
    message.innerHTML = '<p><em>✓ JavaScript is working and linked properly.</em></p>';
    homeSection.appendChild(message);
  }
});
