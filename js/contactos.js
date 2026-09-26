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

  // 1. Google Maps & Interactive Map Controller
  const gmapIframe = document.getElementById('dsc-google-map-iframe');
  const leafletContainer = document.getElementById('dsc-interactive-map');
  const btnGmap = document.getElementById('map-btn-gmap');
  const btnSat = document.getElementById('map-btn-sat');
  const btnLeaflet = document.getElementById('map-btn-leaflet');

  let leafletMapInstance = null;

  function initLeafletMap() {
    if (leafletMapInstance || !leafletContainer || typeof L === 'undefined') return;
    try {
      leafletMapInstance = L.map('dsc-interactive-map', {
        center: DSC_COORDS,
        zoom: DSC_ZOOM,
        maxZoom: 19,
        minZoom: 10,
        scrollWheelZoom: false,
        zoomControl: true
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; CARTO &copy; OpenStreetMap',
        maxZoom: 19
      }).addTo(leafletMapInstance);

      const factoryIcon = L.divIcon({
        className: 'dsc-custom-map-pin',
        html: `
          <div style="position: relative; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center;">
            <div style="position: absolute; width: 36px; height: 36px; border-radius: 50%; background: rgba(179, 152, 96, 0.35); animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
            <div style="position: relative; width: 28px; height: 28px; background: #070D1E; border: 2px solid #B39860; box-shadow: 0 4px 14px rgba(7, 13, 30, 0.5); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #FFFFFF; font-weight: bold; font-family: monospace; font-size: 11px;">
              DSC
            </div>
            <div style="position: absolute; bottom: -4px; width: 0; height: 0; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 6px solid #B39860;"></div>
          </div>
        `,
        iconSize: [44, 44],
        iconAnchor: [22, 40],
        popupAnchor: [0, -36]
      });

      const popupContent = `
        <div style="font-family: 'Plus Jakarta Sans', sans-serif; padding: 4px; max-width: 220px;">
          <div style="font-family: monospace; font-size: 9px; text-transform: uppercase; letter-spacing: 0.12em; color: #B39860; font-weight: bold; margin-bottom: 2px;">
            Sede Fabril & Produção Têxtil
          </div>
          <div style="font-family: 'Cormorant Garamond', Georgia, serif; font-size: 17px; font-weight: 600; color: #070D1E; line-height: 1.15;">
            DSC — Domingos Silva & Cunha
          </div>
          <div style="font-size: 11px; color: #62748E; margin-top: 4px; line-height: 1.3;">
            Rua Quinta do Pinheiro, N.º 74<br>4795-376 Roriz, Santo Tirso
          </div>
          <div style="margin-top: 8px; padding-top: 6px; border-top: 1px solid #E2E8F0; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-family: monospace; font-size: 9px; color: #059669; font-weight: 600;">● Em Operação</span>
            <a href="https://www.google.com/maps/dir/?api=1&destination=41.34860,-8.38420" target="_blank" rel="noopener" style="font-family: monospace; font-size: 10px; text-transform: uppercase; color: #070D1E; font-weight: bold; text-decoration: underline;">
              Traçar Rota &rarr;
            </a>
          </div>
        </div>
      `;

      const marker = L.marker(DSC_COORDS, { icon: factoryIcon }).addTo(leafletMapInstance);
      marker.bindPopup(popupContent).openPopup();
      setTimeout(() => { leafletMapInstance.invalidateSize(); }, 300);
    } catch (e) {
      console.warn("Leaflet map initialization:", e);
    }
  }

  function setMapActive(type) {
    if (type === 'gmap') {
      if (gmapIframe) {
        gmapIframe.src = "https://maps.google.com/maps?q=41.348600,-8.384200+(DSC+-+Domingos+Silva+%26+Cunha+Lda)&t=m&z=17&ie=UTF8&iwloc=B&output=embed";
        gmapIframe.style.opacity = "1";
        gmapIframe.style.pointerEvents = "auto";
      }
      if (leafletContainer) {
        leafletContainer.style.opacity = "0";
        leafletContainer.style.pointerEvents = "none";
      }
      if (btnGmap) btnGmap.className = "px-3 py-1.5 bg-dsc-navy text-white font-medium transition-all";
      if (btnSat) btnSat.className = "px-3 py-1.5 text-dsc-body hover:text-dsc-navy transition-all";
      if (btnLeaflet) btnLeaflet.className = "px-3 py-1.5 text-dsc-body hover:text-dsc-navy transition-all hidden sm:inline-block";
    } else if (type === 'sat') {
      if (gmapIframe) {
        gmapIframe.src = "https://maps.google.com/maps?q=41.348600,-8.384200+(DSC+-+Domingos+Silva+%26+Cunha+Lda)&t=k&z=18&ie=UTF8&iwloc=B&output=embed";
        gmapIframe.style.opacity = "1";
        gmapIframe.style.pointerEvents = "auto";
      }
      if (leafletContainer) {
        leafletContainer.style.opacity = "0";
        leafletContainer.style.pointerEvents = "none";
      }
      if (btnSat) btnSat.className = "px-3 py-1.5 bg-dsc-navy text-white font-medium transition-all";
      if (btnGmap) btnGmap.className = "px-3 py-1.5 text-dsc-body hover:text-dsc-navy transition-all";
      if (btnLeaflet) btnLeaflet.className = "px-3 py-1.5 text-dsc-body hover:text-dsc-navy transition-all hidden sm:inline-block";
    } else if (type === 'leaflet') {
      initLeafletMap();
      if (gmapIframe) {
        gmapIframe.style.opacity = "0";
        gmapIframe.style.pointerEvents = "none";
      }
      if (leafletContainer) {
        leafletContainer.style.opacity = "1";
        leafletContainer.style.pointerEvents = "auto";
        if (leafletMapInstance) setTimeout(() => { leafletMapInstance.invalidateSize(); }, 200);
      }
      if (btnLeaflet) btnLeaflet.className = "px-3 py-1.5 bg-dsc-navy text-white font-medium transition-all hidden sm:inline-block";
      if (btnGmap) btnGmap.className = "px-3 py-1.5 text-dsc-body hover:text-dsc-navy transition-all";
      if (btnSat) btnSat.className = "px-3 py-1.5 text-dsc-body hover:text-dsc-navy transition-all";
    }
  }

  if (btnGmap) btnGmap.addEventListener('click', () => setMapActive('gmap'));
  if (btnSat) btnSat.addEventListener('click', () => setMapActive('sat'));
  if (btnLeaflet) btnLeaflet.addEventListener('click', () => setMapActive('leaflet'));

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
