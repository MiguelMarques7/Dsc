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

  // 1. Initialize High-Zoom Amplified Map (Leaflet)
  const mapContainer = document.getElementById('dsc-interactive-map');
  if (mapContainer && typeof L !== 'undefined') {
    try {
      const map = L.map('dsc-interactive-map', {
        center: DSC_COORDS,
        zoom: DSC_ZOOM,
        maxZoom: 19,
        minZoom: 10,
        scrollWheelZoom: false,
        zoomControl: true
      });

      // Map Layers
      const streetLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; OpenStreetMap',
        maxZoom: 19
      }).addTo(map);

      const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '&copy; Esri, Maxar, Earthstar Geographics',
        maxZoom: 19
      });

      // Custom Industrial Factory Pin Icon
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

      const marker = L.marker(DSC_COORDS, { icon: factoryIcon }).addTo(map);
      marker.bindPopup(popupContent).openPopup();

      // Street vs Satellite Controls
      const btnStreet = document.getElementById('map-btn-street');
      const btnSat = document.getElementById('map-btn-sat');
      const btnRecenter = document.getElementById('map-btn-recenter');

      if (btnStreet && btnSat) {
        btnStreet.addEventListener('click', () => {
          if (map.hasLayer(satelliteLayer)) {
            map.removeLayer(satelliteLayer);
          }
          if (!map.hasLayer(streetLayer)) {
            map.addLayer(streetLayer);
          }
          btnStreet.className = "px-3 py-1.5 bg-dsc-navy text-white font-medium transition-all";
          btnSat.className = "px-3 py-1.5 text-dsc-body hover:text-dsc-navy transition-all";
        });

        btnSat.addEventListener('click', () => {
          if (map.hasLayer(streetLayer)) {
            map.removeLayer(streetLayer);
          }
          if (!map.hasLayer(satelliteLayer)) {
            map.addLayer(satelliteLayer);
          }
          btnSat.className = "px-3 py-1.5 bg-dsc-navy text-white font-medium transition-all";
          btnStreet.className = "px-3 py-1.5 text-dsc-body hover:text-dsc-navy transition-all";
        });
      }

      if (btnRecenter) {
        btnRecenter.addEventListener('click', () => {
          map.flyTo(DSC_COORDS, DSC_ZOOM, { duration: 1.2 });
          marker.openPopup();
        });
      }

      // Handle window resize or orientation changes
      setTimeout(() => { map.invalidateSize(); }, 250);
    } catch (err) {
      console.warn("Leaflet map initialization fallback:", err);
    }
  }

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
