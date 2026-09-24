/**
 * DSC (Domingos Silva & Cunha, Lda.)
 * Contacts & Technical Request Form Module
 */

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const ref = params.get('ref');
  const name = params.get('name');
  const scope = params.get('scope');

  const contactSection = document.getElementById('contact-section');
  const sampleBadge = document.getElementById('sample-badge');
  const sampleRefName = document.getElementById('sample-ref-name');
  const scopeSelect = document.getElementById('form-scope-select');
  const textarea = document.getElementById('form-specs');
  const contactForm = document.getElementById('b2b-contact-form');

  // Handle Specific Item Sample Request
  if (ref) {
    if (sampleBadge && sampleRefName) {
      sampleBadge.classList.remove('hidden');
      sampleRefName.innerText = `${ref} — ${name ? decodeURIComponent(name).replace(/\+/g, ' ') : ''}`;
    }

    if (scopeSelect) {
      const optSample = scopeSelect.querySelector('option[value="opt_sample"]');
      if (optSample) optSample.classList.remove('hidden');
      scopeSelect.value = 'opt_sample';
      scopeSelect.classList.add('bg-dsc-surface', 'text-dsc-navy', 'border-dsc-navy');
    }

    const updateTextareaPrefill = () => {
      if (!textarea) return;
      const currentLang = (typeof window.getCurrentLanguage === 'function') ? window.getCurrentLanguage() : 'pt';
      if (typeof window.getNestedValue === 'function' && window.dictionary) {
        let tmpl = window.getNestedValue(window.dictionary[currentLang], "contacts.form.sample_prefill");
        if (tmpl) textarea.value = tmpl.replace('{ref}', ref);
      }
    };

    updateTextareaPrefill();
    window.addEventListener('languageChanged', updateTextareaPrefill);

    if (contactSection) {
      setTimeout(() => {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }

  // Handle Modular Scope Selection
  if (scope && !ref) {
    const currentLang = (typeof window.getCurrentLanguage === 'function') ? window.getCurrentLanguage() : 'pt';
    const isEn = currentLang === 'en';

    if (textarea) {
      textarea.value = isEn
        ? `Selected modular phases: ${scope.toUpperCase()}\nPlease provide additional specifications for your project...`
        : `Fases modulares selecionadas: ${scope.toUpperCase()}\nPor favor forneça mais detalhes sobre o seu projeto...`;
    }

    if (scopeSelect) {
      scopeSelect.value = 'opt2'; // Modular service
    }

    if (contactSection) {
      setTimeout(() => {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }

  // Handle Form Submission with Toast Feedback
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const currentLang = (typeof window.getCurrentLanguage === 'function') ? window.getCurrentLanguage() : 'pt';
      const successMessage = (currentLang === 'en')
        ? "Technical request submitted successfully! Our commercial department will review your specifications shortly."
        : "Pedido técnico enviado com sucesso! O nosso departamento comercial entrará em contacto brevemente.";

      if (typeof window.showDscToast === 'function') {
        window.showDscToast(successMessage, 5000);
      } else {
        alert(successMessage);
      }

      contactForm.reset();
      if (sampleBadge) sampleBadge.classList.add('hidden');
    });
  }
});
