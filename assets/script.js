/* ═══════════════════════════════════════════════════════════════
   ECHTJETZT - JAVASCRIPT
   Interactivity for Mobile Navigation & Community Features
   ═══════════════════════════════════════════════════════════════ */

// MOBILE NAVIGATION TOGGLE
document.addEventListener('DOMContentLoaded', function() {
  const navMobile = document.getElementById('navMobile');
  const navLinks = document.querySelector('.nav-links');

  if (navMobile && navLinks) {
    navMobile.addEventListener('click', function() {
      navLinks.style.display = navLinks.style.display === 'none' ? 'flex' : 'none';
    });
  }

  // POST FORM (for future use when backend is ready)
  const postBtn = document.getElementById('postBtn');
  const postInput = document.getElementById('postInput');

  if (postBtn) {
    postBtn.addEventListener('click', function() {
      if (postInput && postInput.value.trim()) {
        // Future: Send to backend
        console.log('Post submitted:', postInput.value);
        postInput.value = '';
      }
    });
  }

  // ACTIVE LINK HIGHLIGHTING
  const currentLocation = location.pathname;
  const navAnchors = document.querySelectorAll('.nav-links a');

  navAnchors.forEach(link => {
    if (link.getAttribute('href') === currentLocation) {
      link.classList.add('active');
    }
  });

  // SMOOTH SCROLL
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
