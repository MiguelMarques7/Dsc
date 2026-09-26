/**
 * DSC (Domingos Silva & Cunha, Lda.)
 * Contacts & Technical Request Form Module + Amplified Interactive Factory Map
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

  // Exact DSC Factory Coordinates in Roriz, Santo Tirso
  const DSC_COORDS = [41.34860, -8.38420];
  const DSC_ZOOM = 18;

  // 1. Google Maps Controller (Street View vs Satellite HD)
  const gmapIframe = document.getElementById('dsc-google-map-iframe');
  const btnGmap = document.getElementById('map-btn-gmap');
  const btnSat = document.getElementById('map-btn-sat');

  function setMapActive(type) {
    if (type === 'gmap') {
      if (gmapIframe) {
        gmapIframe.src = "https://maps.google.com/maps?q=41.348600,-8.384200+(DSC+-+Domingos+Silva+%26+Cunha+Lda)&t=m&z=17&ie=UTF8&iwloc=B&output=embed";
      }
      if (btnGmap) btnGmap.className = "px-3 py-1.5 bg-dsc-navy text-white font-medium transition-all";
      if (btnSat) btnSat.className = "px-3 py-1.5 text-dsc-body hover:text-dsc-navy transition-all";
    } else if (type === 'sat') {
      if (gmapIframe) {
        gmapIframe.src = "https://maps.google.com/maps?q=41.348600,-8.384200+(DSC+-+Domingos+Silva+%26+Cunha+Lda)&t=k&z=18&ie=UTF8&iwloc=B&output=embed";
      }
      if (btnSat) btnSat.className = "px-3 py-1.5 bg-dsc-navy text-white font-medium transition-all";
      if (btnGmap) btnGmap.className = "px-3 py-1.5 text-dsc-body hover:text-dsc-navy transition-all";
    }
  }

  if (btnGmap) btnGmap.addEventListener('click', () => setMapActive('gmap'));
  if (btnSat) btnSat.addEventListener('click', () => setMapActive('sat'));

  // Quick Preset Prefill Handler
  window.prefillSpecs = function(type) {
    if (!textarea) return;
    const currentLang = (typeof window.getCurrentLanguage === 'function') ? window.getCurrentLanguage() : 'pt';
    const isEn = (currentLang === 'en');
    
    if (type === 'hotel') {
      textarea.value = isEn 
        ? "Quotation request for Hospitality Contract Line: 2,500 pcs Bath Towels (550 GSM, 100% Ring-Spun Combed Cotton 24/2, White) + 1,000 pcs Bath Sheets (700 GSM)." 
        : "Pedido de cotação para Linha Hotelaria Contract: 2.500 toalhas de rosto (550g/m², fio retorcido 24/2 algodão penteado, cor branca) + 1.000 toalhões de banho (700g/m²).";
      if (scopeSelect) scopeSelect.value = 'opt0';
    } else if (type === 'plabel') {
      textarea.value = isEn
        ? "Private Label Collection Development: Customized terry line with Jacquard woven logo header, custom Pantone TCX dyed colors, and bespoke woven satin brand labels."
        : "Desenvolvimento de Coleção Private Label: Linha completa de banho com barra Jacquard personalizada, tinturaria em cor Pantone TCX exclusiva e etiquetas tecidas em cetim.";
      if (scopeSelect) scopeSelect.value = 'opt1';
    } else if (type === 'zerotwist') {
      textarea.value = isEn
        ? "Sample Box Request: Zero-Twist ultra-soft 600 GSM bath collection + Waffle spa line. Required for retail boutique touch & absorbency evaluation."
        : "Envio de Amostras: Coleção de banho Zero-Twist 600g/m² de toque aveludado + Linha Waffle. Pretendemos testar toque, absorção e estabilidade dimensional.";
      if (scopeSelect) scopeSelect.value = 'opt0';
    } else if (type === 'visit') {
      textarea.value = isEn
        ? "Technical Mill Visit Scheduling: Sourcing delegation meeting at DSC facilities in Roriz, Santo Tirso to inspect weaving capacity, Jacquard looms, and review fabric archives."
        : "Agendamento de Reunião & Visita Fabril: Reunião com a equipa de engenharia e compras nas instalações da DSC em Roriz, Santo Tirso, para inspecionar teares Jacquard e arquivo de artigos.";
      if (scopeSelect) scopeSelect.value = 'opt4';
    }
    textarea.focus();
  };

  // 2. Handle Specific Item Sample Request
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

  // 3. Handle Modular Scope Selection
  if (scope && !ref) {
    const currentLang = (typeof window.getCurrentLanguage === 'function') ? window.getCurrentLanguage() : 'pt';
    const isEn = currentLang === 'en';

    if (textarea) {
      textarea.value = isEn
        ? `Selected modular phases: ${scope.toUpperCase()}\nPlease provide additional technical specifications for your project...`
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

  // 4. Handle Form Submission with Toast Feedback
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
