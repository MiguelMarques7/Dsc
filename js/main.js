/**
 * DSC (Domingos Silva & Cunha, Lda.)
 * Core Global Application Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Internationalization
  if (typeof window.getCurrentLanguage === 'function' && typeof window.setLanguage === 'function') {
    window.setLanguage(window.getCurrentLanguage());
  }

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuCloseBtn = document.getElementById('mobile-menu-close-btn');

  function openMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('menu-closed');
    mobileMenu.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('menu-open');
    mobileMenu.classList.add('menu-closed');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (mobileMenu.classList.contains('menu-open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileMenuCloseBtn) {
    mobileMenuCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeMobileMenu();
    });
  }

  // Close mobile menu on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('menu-open')) {
      closeMobileMenu();
    }
  });

  // 3. Highlight Active Navigation Links
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a, #mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // 4. Header Shadow on Scroll
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('shadow-sm');
      } else {
        header.classList.remove('shadow-sm');
      }
    }, { passive: true });
  }
});

/**
 * Global Toast Notification Helper
 * @param {string} message - Message to display
 * @param {number} duration - Milliseconds before hiding
 */
window.showDscToast = function(message, duration = 4000) {
  let toast = document.getElementById('dsc-toast-container');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'dsc-toast-container';
    toast.className = 'dsc-toast';
    document.body.appendChild(toast);
  }
  
  toast.innerText = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
};
