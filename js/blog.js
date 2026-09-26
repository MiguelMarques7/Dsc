/**
 * DSC (Domingos Silva & Cunha, Lda.)
 * Technical Blog & Article Reader Module (Fully Bilingual PT / EN)
 */

const DSC_ARTICLES = [
  {
    id: "gsm-durabilidade",
    pt: {
      category: "ESPECIFICAÇÕES B2B",
      date: "Setembro 2026",
      readTime: "5 min de leitura",
      title: "Gramagem (GSM) vs. Durabilidade: Como especificar toalhas para o setor contract",
      subtitle: "Porque é que a toalha mais pesada nem sempre é a mais rentável para cadeias hoteleiras e lavandarias industriais.",
      snippet: "Compreender porque nem sempre a toalha mais pesada é a mais eficiente. Analisamos tempos de secagem em lavandarias industriais, perda de fibras e custos energéticos operacionais.",
      readBtn: "Ler Artigo Completo",
      ctaBtn: "Falar Sobre Este Tema",
      closeBtn: "Fechar",
      content: `
        <h4>O Mito da Gramagem Excessiva</h4>
        <p>No retalho de consumo, o consumidor associa frequentemente a gramagem elevada (GSM &mdash; gramas por metro quadrado) a um artigo de luxo supremo. Toalhas de 700g a 800g transmitem uma sensação de opulência e volume imediato. No entanto, quando transpomos esta especificação para o universo do contract hoteleiro e das lavandarias industriais, uma toalha excessivamente pesada pode transformar-se num passivo financeiro e operacional.</p>
        
        <h4>A Equação Económica do Ciclo de Lavagem</h4>
        <p>Em operações hoteleiras com rotações diárias de centenas ou milhares de quartos, o custo de aquisição da toalha representa menos de 15% do seu custo total de propriedade (TCO) ao longo do ciclo de vida. Os restantes 85% concentram-se no consumo energético de lavagem, secagem em túnel ou calandra e no custo de transporte logístico por quilo.</p>
        
        <div class="my-6 border border-dsc-line bg-slate-50 p-5 font-mono text-xs">
          <div class="font-bold text-dsc-navy uppercase mb-2">Simulação DSC: Impacto Energético em 10.000 Lavagens</div>
          <div class="space-y-1.5 text-dsc-body">
            <div class="flex justify-between border-b border-dsc-line/60 pb-1">
              <span>Toalha Standard 500 g/m²:</span>
              <span class="text-dsc-navy font-semibold">Tempo médio de secagem: 24 min | Custo base: 1.00x</span>
            </div>
            <div class="flex justify-between border-b border-dsc-line/60 pb-1">
              <span>Toalha Contract 600 g/m²:</span>
              <span class="text-dsc-navy font-semibold">Tempo médio de secagem: 29 min | Custo base: 1.21x (+21%)</span>
            </div>
            <div class="flex justify-between">
              <span>Toalha Hi-Dense 750 g/m²:</span>
              <span class="text-dsc-navy font-semibold">Tempo médio de secagem: 41 min | Custo base: 1.70x (+70%)</span>
            </div>
          </div>
        </div>

        <h4>O Ponto Ótimo: Gramagem vs. Estrutura do Fio</h4>
        <p>A engenharia têxtil desenvolvida na DSC demonstra que a resistência mecânica não advém da quantidade bruta de algodão, mas sim da seleção criteriosa do fio. Uma toalha de <strong>550 a 600 g/m² construída com fio retorcido 24/2 na urdidura e laçada de turco dupla</strong> apresenta maior resistência à tração e menor perda de fibras (linting) do que uma toalha de 700 g/m² tecida com fio cardado simples de baixa torção.</p>

        <h4>Recomendações Práticas para Especificadores B2B</h4>
        <ul class="list-disc pl-5 space-y-2 text-xs font-light text-dsc-body my-4">
          <li><strong>Hotéis Boutique & Suítes de Luxo:</strong> 550 a 600 g/m² em algodão penteado de fibra longa para um equilíbrio perfeito entre opulência tátil e tempo de secagem.</li>
          <li><strong>Hotelaria Corporate & Resorts de Alto Tráfego:</strong> 500 a 550 g/m² com laçada curta compacta e bainhas com pesponto duplo e travamento de 4 cantos.</li>
          <li><strong>Tapetes de Saída de Banho:</strong> 850 a 950 g/m² em fio retorcido 2-ply para garantir ancoragem no piso e absorção ultrarrápida sem deslizamento.</li>
        </ul>
      `
    },
    en: {
      category: "B2B SPECIFICATIONS",
      date: "September 2026",
      readTime: "5 min read",
      title: "GSM vs. Durability: Specifying High-Performance Towels for the Contract Sector",
      subtitle: "Why the heaviest towel is not always the most cost-effective for luxury hotel chains and commercial laundries.",
      snippet: "Understanding why heavy towels can increase laundry operating costs. We analyze tumble dry cycles, lint shedding, and total cost of ownership.",
      readBtn: "Read Full Article",
      ctaBtn: "Inquire About This Topic",
      closeBtn: "Close",
      content: `
        <h4>The Myth of Excessive Fabric Weight</h4>
        <p>In consumer retail, high fabric weight (GSM &mdash; grams per square meter) is often associated with supreme luxury. Towels ranging from 700g to 800g convey an immediate sensation of plush volume. However, when specifying for hospitality contracts and industrial laundry chains, an overly dense towel can quickly become an operational and financial liability.</p>
        
        <h4>The Economic Equation of the Wash Cycle</h4>
        <p>In hospitality operations turning over hundreds or thousands of rooms daily, the initial towel acquisition cost represents less than 15% of its total cost of ownership (TCO) across its lifetime. The remaining 85% is consumed by thermal energy in tunnel washing, tumble drying or calenders, and per-kilogram logistics transport.</p>
        
        <div class="my-6 border border-dsc-line bg-slate-50 p-5 font-mono text-xs">
          <div class="font-bold text-dsc-navy uppercase mb-2">DSC Simulation: Energy Impact Over 10,000 Industrial Wash Cycles</div>
          <div class="space-y-1.5 text-dsc-body">
            <div class="flex justify-between border-b border-dsc-line/60 pb-1">
              <span>Standard 500 g/m² Towel:</span>
              <span class="text-dsc-navy font-semibold">Average Drying Time: 24 min | Cost Baseline: 1.00x</span>
            </div>
            <div class="flex justify-between border-b border-dsc-line/60 pb-1">
              <span>Contract 600 g/m² Towel:</span>
              <span class="text-dsc-navy font-semibold">Average Drying Time: 29 min | Cost Baseline: 1.21x (+21%)</span>
            </div>
            <div class="flex justify-between">
              <span>Hi-Dense 750 g/m² Towel:</span>
              <span class="text-dsc-navy font-semibold">Average Drying Time: 41 min | Cost Baseline: 1.70x (+70%)</span>
            </div>
          </div>
        </div>

        <h4>The Sweet Spot: GSM vs. Yarn Construction</h4>
        <p>Textile engineering at DSC demonstrates that mechanical tensile strength comes not from raw bulk, but from disciplined yarn selection. A <strong>550 to 600 g/m² towel built with 24/2 plied ring-spun warp and double-loop terry pile</strong> exhibits superior tensile strength and significantly lower lint shedding than a 700 g/m² towel woven from coarse single carded yarn.</p>

        <h4>Practical Recommendations for B2B Sourcing Managers</h4>
        <ul class="list-disc pl-5 space-y-2 text-xs font-light text-dsc-body my-4">
          <li><strong>Boutique Hotels & Luxury Suites:</strong> 550 to 600 g/m² in long-staple combed cotton for the ideal balance between plush hand-feel and drying speed.</li>
          <li><strong>Corporate Hospitality & High-Traffic Resorts:</strong> 500 to 550 g/m² with low-profile anti-snag loops and reinforced double-lock hemmed corners.</li>
          <li><strong>Bath Mats:</strong> 850 to 950 g/m² in 2-ply plied ring-spun yarn to ensure firm floor anchoring and instant non-slip moisture absorption.</li>
        </ul>
      `
    }
  },
  {
    id: "zero-twist-vs-retorcido",
    pt: {
      category: "I&D DE MATÉRIAS-PRIMAS",
      date: "Agosto 2026",
      readTime: "6 min de leitura",
      title: "Fios Zero-Twist vs. Fios Retorcidos: Qual a estrutura certa para o seu mercado?",
      subtitle: "Uma comparação técnica ao microscópio entre a laçada aberta de torção zero e o fio retorcido clássico 24/2.",
      snippet: "Uma comparação técnica ao microscópio entre a laçada aberta de torção zero e o fio retorcido clássico 24/2. Como o tipo de fiação dita o ciclo de vida do artigo de banho.",
      readBtn: "Ler Artigo Completo",
      ctaBtn: "Falar Sobre Este Tema",
      closeBtn: "Fechar",
      content: `
        <h4>A Física da Torção no Fio de Algodão</h4>
        <p>A torção é o processo mecânico fundamental que confere coesão às fibras descontínuas de algodão. Quanto mais torções por polegada (TPI) forem aplicadas, mais compacto, rígido e resistente à tração se torna o fio. No entanto, este aumento de resistência reduz o espaço intersticial entre as fibras, diminuindo a maciez inicial e a velocidade instantânea de absorção capilar.</p>

        <h4>Tecnologia Zero-Twist: O Segredo da Nuvem Têxtil</h4>
        <p>O fio Zero-Twist representa um dos maiores triunfos da fiação moderna. As fibras nobres de algodão de fibra extralonga (ELS) são envolvidas por um filamento auxiliar de álcool polivinílico solúvel em água (PVA). Durante a tecelagem, o fio possui a rigidez necessária para suportar a tensão dos teares de alta velocidade.</p>
        <p>Na etapa de enobrecimento e lavagem industrial a quente na unidade DSC, o filamento de PVA dissolve-se por completo, libertando as fibras de algodão no interior da laçada. O resultado é uma estrutura alveolar aberta que retém micro-bolsas de ar, proporcionando absorção quase instantânea (&lt; 2 segundos) e extrema maciez sem amaciadores nocivos.</p>

        <h4>Fio Retorcido 2-Cabos (2-Ply / 24/2): O Campeão da Resistência</h4>
        <p>Por oposição, o fio retorcido une dois cabos individuais numa espiral contínua de elevada tenacidade. É a solução por excelência para a linha Contract. A laçada compacta resiste ao atrito constante, não desfila facilmente e suporta centenas de ciclos de lavagem industrial com cloro.</p>
      `
    },
    en: {
      category: "R&D & RAW MATERIALS",
      date: "August 2026",
      readTime: "6 min read",
      title: "Zero-Twist vs. 2-Ply Ring Spun: Selecting the Right Yarn Structure for Your Brand",
      subtitle: "A microscopic technical comparison between open zero-twist loops and classic 24/2 plied ring-spun yarns.",
      snippet: "How yarn twisting physics dictate towel life cycles, capillary water absorption speed, and anti-snag resistance.",
      readBtn: "Read Full Article",
      ctaBtn: "Inquire About This Topic",
      closeBtn: "Close",
      content: `
        <h4>The Physics of Cotton Yarn Twist</h4>
        <p>Twist is the foundational mechanical force binding staple cotton fibers together. Applying higher twists per inch (TPI) yields a denser, stiffer yarn with elevated tensile breaking strength. However, this compactness reduces capillary interstitial space, lowering initial tactile softness and delaying instantaneous water absorption.</p>

        <h4>Zero-Twist Engineering: The Cloud Effect</h4>
        <p>Zero-Twist yarns represent one of modern spinning's greatest milestones. Premium extra-long staple (ELS) cotton fibers are temporarily bound by a water-soluble polyvinyl alcohol (PVA) carrier filament. This filament provides the requisite warp tensile stability to withstand high-speed air-jet and rapier loom tensions.</p>
        <p>During DSC's hot industrial finishing and scouring baths, the PVA filament dissolves completely, allowing the long cotton fibers to bloom open inside the loop. The result is an open, micro-aerated structure delivering instant capillary moisture uptake (&lt; 2 seconds) and supreme velour plushness without chemical silicones.</p>

        <h4>2-Ply Plied Yarn (24/2 Ring-Spun): Maximum Contract Longevity</h4>
        <p>Conversely, 2-ply yarns fuse two individual threads in a continuous high-tenacity spiral. It represents the gold standard for hospitality. Its dense loop profile resists abrasive snagging, preventing pulled threads caused by jewelry or luggage, and endures hundreds of intensive laundry cycles under chlorine and 90°C thermal sanitization.</p>
      `
    }
  },
  {
    id: "algodao-reciclado-desafios",
    pt: {
      category: "SUSTENTABILIDADE APLICADA",
      date: "Julho 2026",
      readTime: "5 min de leitura",
      title: "Algodão Reciclado no Turco: Desafios de resistência mecânica e toque final",
      subtitle: "Como balancear fibras regeneradas com algodão virgem de fibra longa para garantir conformidade ESG sem sacrificar a qualidade.",
      snippet: "Como combinar fios reciclados com algodão virgem de fibra longa para atingir os critérios de sustentabilidade internacional sem abdicar da sensação aveludada.",
      readBtn: "Ler Artigo Completo",
      ctaBtn: "Falar Sobre Este Tema",
      closeBtn: "Fechar",
      content: `
        <h4>O Desafio Técnico da Fibra Curta</h4>
        <p>A desfibragem mecânica de sobras têxteis pré-consumo corta inevitavelmente o comprimento das fibras de algodão. Enquanto o algodão virgem de qualidade possui um comprimento de fibra de 28 a 34 mm, o algodão reciclado pós-desfibragem apresenta frequentemente comprimentos inferiores a 18 mm.</p>
        <p>Num artigo plano isto pode ser compensado com maior torção. Mas numa toalha turco &mdash; onde as laçadas estão expostas &mdash; fibras curtas resultam em desprendimento de cotão (linting). A DSC resolve isto com uma arquitetura de blending estratégico: 40% de fio reciclado na urdidura e trama de suporte, e 100% algodão biológico virgem GOTS no fio de laçada que contacta com a pele.</p>
      `
    },
    en: {
      category: "APPLIED SUSTAINABILITY",
      date: "July 2026",
      readTime: "5 min read",
      title: "Recycled Cotton in Terry Fabrics: Overcoming Tensile and Hand-Feel Challenges",
      subtitle: "Balancing mechanically regenerated fibers with virgin long-staple cotton to meet ESG targets without sacrificing softness.",
      snippet: "Strategic blending techniques to meet circularity requirements and GRS standards while eliminating excessive linting.",
      readBtn: "Read Full Article",
      ctaBtn: "Inquire About This Topic",
      closeBtn: "Close",
      content: `
        <h4>The Short-Fiber Mechanical Hurdle</h4>
        <p>Mechanically shredding pre-consumer textile clips inevitably degrades fiber length. While premium virgin cotton possesses a staple length of 28 to 34 mm, mechanically regenerated fibers often drop below 18 mm.</p>
        <p>In flat woven fabrics, high twist compensates for fiber brevity. In terry towels, however &mdash; where loops are exposed to skin abrasion &mdash; short fibers generate excessive tumble linting. DSC engineers resolve this via differential blending: up to 40% traceable recycled cotton in the foundational warp and weft ground, while maintaining 100% GOTS-certified virgin long-staple cotton in the pile loops that contact the skin.</p>
      `
    }
  },
  {
    id: "quimica-corantes-reativos",
    pt: {
      category: "ENOBRECIMENTO & COR",
      date: "Junho 2026",
      readTime: "4 min de leitura",
      title: "Química dos Corantes Reativos: Como atingir solidez 4-5 a lavagens a 90ºC",
      subtitle: "A ligação molecular covalente que impede a perda de cor em toalhas submetidas a desinfeção intensiva.",
      snippet: "Os segredos termodinâmicos da fixação de corantes sob banhos otimizados e a eliminação de substâncias perigosas para assegurar a conformidade OEKO-TEX Standard 100 Classe I.",
      readBtn: "Ler Artigo Completo",
      ctaBtn: "Falar Sobre Este Tema",
      closeBtn: "Fechar",
      content: `
        <h4>Ligação Covalente vs. Adsorção Física</h4>
        <p>Ao contrário dos corantes diretos ou pigmentares que aderem apenas à superfície da fibra por forças fracas de van der Waals, os <strong>corantes reativos</strong> formam uma verdadeira ligação química covalente com os grupos hidroxila (-OH) da celulose do algodão. Uma vez fixada, a molécula de cor passa a fazer parte integrante da própria cadeia polimérica do tecido.</p>
        <p>Na DSC, aplicamos banhos de baixa relação (1:5) com curvas térmicas progressivas e processos rigorosos de 'soap-off' que eliminam qualquer resíduo hidrolisado, garantindo classificação 4-5 segundo a norma ISO 105-C06 e total conformidade com a OEKO-TEX Standard 100 Classe I.</p>
      `
    },
    en: {
      category: "DYEING & FINISHING",
      date: "June 2026",
      readTime: "4 min read",
      title: "Reactive Dye Chemistry: Achieving 4-5 Colorfastness at 90°C Commercial Washes",
      subtitle: "The molecular covalent bond that prevents bleeding and discoloration in bath linens subjected to intensive laundering.",
      snippet: "Thermodynamic secrets of dye fixation in short-liquor ratio baths and OEKO-TEX Standard 100 Class I chemical safety compliance.",
      readBtn: "Read Full Article",
      ctaBtn: "Inquire About This Topic",
      closeBtn: "Close",
      content: `
        <h4>Covalent Bonds vs. Physical Surface Adsorption</h4>
        <p>Unlike direct or pigment dyes that merely adhere via weak surface van der Waals forces, <strong>reactive dyes</strong> forge genuine covalent chemical bonds with the hydroxyl (-OH) groups of cotton cellulose. Once chemically locked, the dye molecule becomes an intrinsic component of the polymer chain itself.</p>
        <p>At DSC, computer-controlled low-liquor ratio dyeing (1:5) combined with exhaustive multi-stage soap-off washes strips away non-fixed hydrolyzed dye, guaranteeing Grade 4-5 wash fastness under ISO 105-C06 standards alongside OEKO-TEX Standard 100 Class I certification.</p>
      `
    }
  },
  {
    id: "diretiva-espr-passaporte-dpp",
    pt: {
      category: "REGULAMENTAÇÃO EUROPEIA",
      date: "Maio 2026",
      readTime: "7 min de leitura",
      title: "O Impacto da Diretiva Europeia ESPR & Passaporte Digital (DPP) nos Têxteis-Lar",
      subtitle: "O que as marcas europeias de banho e cama precisam de preparar para cumprir as metas de conformidade 2026/2027.",
      snippet: "Um guia prático sobre os novos requisitos comunitários de ecodesign, etiquetagem digital por QR Code e declaração de pegada hídrica e carbónica por lote produzido.",
      readBtn: "Ler Artigo Completo",
      ctaBtn: "Falar Sobre Este Tema",
      closeBtn: "Fechar",
      content: `
        <h4>O Fim da Opacidade Têxtil na União Europeia</h4>
        <p>O regulamento europeu de Ecodesign para Produtos Sustentáveis (ESPR) institui o <strong>Passaporte Digital do Produto (DPP)</strong> obrigatório a partir de 2026/2027. Cada artigo têxtil deverá conter um identificador digital (QR Code em etiqueta duradoura) detalhando a origem da fibra, percentagem de reciclagem, pegada hídrica e de carbono, e diretrizes de reciclabilidade em fim de vida.</p>
        <p>A DSC já entrega aos seus clientes B2B toda a matriz de dados auditada necessária para alimentar os passaportes digitais das suas marcas, simplificando a conformidade aduaneira e comercial na UE.</p>
      `
    },
    en: {
      category: "EU REGULATIONS",
      date: "May 2026",
      readTime: "7 min read",
      title: "The Impact of EU ESPR & Digital Product Passports (DPP) on Home Textiles",
      subtitle: "What European bath and bed linen brands must prepare for 2026/2027 Ecodesign compliance.",
      snippet: "A practical guide to EU ecodesign criteria, sewn-in QR code data architecture, and lot-level carbon and water footprint tracking.",
      readBtn: "Read Full Article",
      ctaBtn: "Inquire About This Topic",
      closeBtn: "Close",
      content: `
        <h4>The End of Textile Opacity Across the EU</h4>
        <p>The European Union's Ecodesign for Sustainable Products Regulation (ESPR) establishes the mandatory <strong>Digital Product Passport (DPP)</strong> beginning in 2026/2027. Every textile piece entering the single market will require a machine-readable data carrier (durable sewn-in QR code) mapping raw fiber provenance, chemical safety clearances, carbon and water footprint metrics, and circular end-of-life recycling pathways.</p>
        <p>DSC manufactures ready-to-integrate batch data packages for private label clients, equipping brands with verified technical audit trails that pass European customs inspections effortlessly.</p>
      `
    }
  },
  {
    id: "waffle-vs-turco-logistica",
    pt: {
      category: "ENGENHARIA DE PRODUTO",
      date: "Abril 2026",
      readTime: "5 min de leitura",
      title: "Estruturas Waffle vs. Turco Clássico: Otimização de Peso e Custos Logísticos",
      subtitle: "Como a densidade volumétrica do ninho de abelha permite expedir até +38% de peças por contentor marítimo ou camião rodoviário.",
      snippet: "Análise comparativa da eficiência espacial entre o felpo tradicional de laçada alta e as estruturas alveolar favo. Impacto direto nas margens operacionais de distribuidores internacionais.",
      readBtn: "Ler Artigo Completo",
      ctaBtn: "Falar Sobre Este Tema",
      closeBtn: "Fechar",
      content: `
        <h4>O Paradoxo do Ar no Transporte Têxtil</h4>
        <p>O felpo clássico de banho transporta imenso ar no interior das suas laçadas. Em envios transfronteiriços faturados por peso volumétrico (cubagem), grande parte do orçamento logístico paga o transporte de espaço vazio.</p>
        <p>A estrutura favo tridimensional (waffle) compacta-se com eficiência máxima na embalagem primária, expandindo-se no primeiro contacto com a água. Em testes reais de carga, um contentor marítimo de 40 pés HC consegue acomodar 19.600 toalhas waffle (420 GSM) contra 14.200 toalhas de turco clássico (550 GSM) &mdash; um ganho imediato de +38% em volume útil e substancial redução nas emissões de transporte por unidade comercializada.</p>
      `
    },
    en: {
      category: "PRODUCT ENGINEERING",
      date: "April 2026",
      readTime: "5 min read",
      title: "Waffle Weave vs. Classic Terry: Volumetric Optimization and Freight Savings",
      subtitle: "How honeycomb 3D density enables shipping up to +38% more units per 40ft high-cube sea container or freight truck.",
      snippet: "Comparative analysis of spatial packaging efficiency and rapid drying speeds for eco-conscious luxury brands and resort spas.",
      readBtn: "Read Full Article",
      ctaBtn: "Inquire About This Topic",
      closeBtn: "Close",
      content: `
        <h4>The Paradox of Air in Freight Logistics</h4>
        <p>Classic looped terry toweling inherently traps substantial air volume between yarns. On long-distance sea and truck shipments billed by volumetric weight (cube rating), brands expend significant capital transporting compressed empty air.</p>
        <p>Engineered 3D waffle (honeycomb) structures nest flat during initial folding, only expanding to their full moisture-retention geometry upon first washing. In container loading simulations, a standard 40ft HC shipping container accommodates 19,600 waffle towels (420 GSM) versus 14,200 classic terry towels (550 GSM) &mdash; yielding an instant +38% boost in payload capacity alongside dramatic per-unit freight carbon savings.</p>
      `
    }
  }
];

let activeArticleId = null;

function getBlogLang() {
  if (typeof window.getCurrentLanguage === 'function') {
    return window.getCurrentLanguage();
  }
  const saved = localStorage.getItem('dsc_lang');
  return saved === 'en' ? 'en' : 'pt';
}

function renderBlogCards() {
  const container = document.getElementById('blog-grid');
  if (!container) return;

  const lang = getBlogLang();

  container.innerHTML = DSC_ARTICLES.map((art) => {
    const data = art[lang] || art.pt;
    return `
      <article onclick="openArticleById('${art.id}')" class="p-8 bg-dsc-white hover:bg-slate-50 transition-all duration-200 cursor-pointer flex flex-col justify-between h-full rounded-none interactive-card group border border-dsc-line">
        <div>
          <div class="font-mono text-[10px] text-dsc-navy uppercase tracking-widest mb-4 flex items-center justify-between">
            <span class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-dsc-gold"></span>
              <span>${data.category}</span>
            </span>
            <span class="text-dsc-muted font-normal">${data.readTime}</span>
          </div>
          <h3 class="font-serif text-2xl font-normal tracking-tight text-dsc-navy mb-3 leading-snug group-hover:text-dsc-navy transition-colors">
            ${data.title}
          </h3>
          <p class="text-xs text-dsc-body font-light leading-relaxed mb-8 line-clamp-3">
            ${data.snippet}
          </p>
        </div>
        <div class="flex justify-between items-center border-t border-dsc-line/80 pt-4 mt-auto">
          <span class="font-mono text-[10px] uppercase tracking-widest text-dsc-muted">${data.date}</span>
          <span class="arrow-trigger font-sans text-xs uppercase font-medium tracking-wider text-dsc-navy flex items-center gap-1.5">
            <span>${data.readBtn}</span>
            <span class="arrow-target text-dsc-gold font-bold">&rarr;</span>
          </span>
        </div>
      </article>
    `;
  }).join('');
}

window.openArticleById = function(id) {
  const article = DSC_ARTICLES.find(a => a.id === id);
  if (!article) return;

  activeArticleId = id;
  const lang = getBlogLang();
  const data = article[lang] || article.pt;

  const modal = document.getElementById('article-reader-modal');
  if (!modal) return;

  document.getElementById('reader-category').innerText = data.category;
  document.getElementById('reader-date').innerText = `${data.date} • ${data.readTime}`;
  document.getElementById('reader-title').innerText = data.title;
  document.getElementById('reader-subtitle').innerText = data.subtitle;
  document.getElementById('reader-body').innerHTML = data.content;

  const sampleBtn = document.getElementById('reader-sample-btn');
  if (sampleBtn) {
    sampleBtn.innerText = `${data.ctaBtn} →`;
    sampleBtn.href = `contactos.html?subject=${encodeURIComponent(data.title)}`;
  }

  window.history.replaceState(null, null, `#${article.id}`);

  if (typeof window.translateElement === 'function') {
    window.translateElement(modal);
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
};

window.closeArticleModal = function() {
  const modal = document.getElementById('article-reader-modal');
  if (!modal) return;

  activeArticleId = null;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';

  window.history.replaceState(null, null, window.location.pathname);
};

document.addEventListener('DOMContentLoaded', () => {
  renderBlogCards();

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeArticleModal();
  });

  const modal = document.getElementById('article-reader-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeArticleModal();
    });
  }

  // Listen for languageChanged event to re-render in real-time
  window.addEventListener('languageChanged', (e) => {
    renderBlogCards();
    if (activeArticleId) {
      openArticleById(activeArticleId);
    }
  });

  // Handle URL hash directly on initial load
  if (window.location.hash) {
    const articleId = window.location.hash.replace('#', '');
    if (articleId) openArticleById(articleId);
  }
});
