/**
 * DSC (Domingos Silva & Cunha, Lda.)
 * Core Global Application Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // 0. Ensure Footer B2B Translation Keys (Standard SIDI pattern)
  if (window.dictionary) {
    if (window.dictionary.pt) {
      Object.assign(window.dictionary.pt, {
        footer_cta_badge: "Capacidade Fabril Europeia",
        footer_cta_title: "Pronto para elevar os padrões da sua coleção têxtil?",
        footer_cta_btn: "Iniciar Diálogo Técnico",
        footer_bio: "Desenvolvimento e engenharia de têxteis-lar e felpos de alto rendimento. Combinamos coleções de marca própria com produção modular flexível para mercados internacionais.",
        footer_col_nav: "Estrutura",
        footer_col_spec: "Especialidade",
        footer_col_mill: "Instalações & Logística",
        nav_about: "Sobre nós",
        nav_services: "Serviços",
        nav_catalog: "Produtos",
        nav_sustainability: "Sustentabilidade",
        nav_blog: "Blog",
        nav_contact: "Contactos",
        footer_legal_terms: "Termos B2B",
        footer_legal_privacy: "Privacidade",
        footer_legal_complaints: "Livro de Reclamações"
      });
    }
    if (window.dictionary.en) {
      Object.assign(window.dictionary.en, {
        footer_cta_badge: "European Manufacturing Capacity",
        footer_cta_title: "Ready to engineer your upcoming home textile collection?",
        footer_cta_btn: "Initiate Technical Sourcing",
        footer_bio: "Engineering and manufacturing high-performance home and bath linens. Uniting in-house brand collections with flexible modular manufacturing for global export.",
        footer_col_nav: "Navigation",
        footer_col_spec: "Specialization",
        footer_col_mill: "Mill Facilities & Logistics",
        nav_about: "About Us",
        nav_services: "Services",
        nav_catalog: "Products",
        nav_sustainability: "Sustainability",
        nav_blog: "Blog",
        nav_contact: "Contact",
        footer_legal_terms: "B2B Terms",
        footer_legal_privacy: "Privacy Policy",
        footer_legal_complaints: "Complaints Book"
      });
    }
  }

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
