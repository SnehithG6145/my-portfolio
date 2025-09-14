document.addEventListener("DOMContentLoaded", () => {
  console.log("E-Portfolio Loaded ✅");

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('header nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
