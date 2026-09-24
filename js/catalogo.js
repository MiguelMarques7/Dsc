/**
 * DSC (Domingos Silva & Cunha, Lda.)
 * Catalog Filtering & Interaction Module
 */

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('#filter-controls button');
  const items = document.querySelectorAll('#catalog-grid > div');
  const countEl = document.getElementById('item-count');

  if (!buttons.length || !items.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // 1. Update filter buttons styles
      buttons.forEach(b => {
        b.classList.remove('bg-dsc-navy', 'text-white', 'border-dsc-navy');
        b.classList.add('bg-dsc-white', 'text-dsc-body', 'border-dsc-line');
      });
      btn.classList.remove('bg-dsc-white', 'text-dsc-body', 'border-dsc-line');
      btn.classList.add('bg-dsc-navy', 'text-white', 'border-dsc-navy');

      // 2. Filter catalog items
      const filter = btn.getAttribute('data-filter');
      let visibleCount = 0;

      items.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filter === 'all' || itemCategory === filter) {
          item.style.display = 'flex';
          setTimeout(() => { 
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 30);
          visibleCount++;
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(6px)';
          setTimeout(() => { 
            item.style.display = 'none'; 
          }, 250);
        }
      });

      // 3. Update counter element
      if (countEl) {
        countEl.innerText = visibleCount;
      }
    });
  });

  // 4. Check URL query parameters (e.g. ?cat=contract from footer)
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('cat');
  if (catParam) {
    const targetBtn = Array.from(buttons).find(b => b.getAttribute('data-filter') === catParam);
    if (targetBtn) {
      targetBtn.click();
    }
  }
});
