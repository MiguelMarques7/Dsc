# DSC — Domingos Silva & Cunha, Lda.
### Portal Institucional B2B • Engenharia & Manufatura de Têxteis-Lar
### B2B Institutional Portal • Home Textile Engineering & Manufacturing

<p align="center">
  <img src="https://img.shields.io/badge/Made%20in-Portugal%20%F0%9F%87%B5%F0%9F%87%B9-0B1E48?style=for-the-badge&logoColor=white" alt="Made in Portugal" />
  <img src="https://img.shields.io/badge/Architecture-Bilingual%20PT%20%7C%20EN-F59E0B?style=for-the-badge&labelColor=0B1E48" alt="Bilingual" />
  <img src="https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge&color=10B981" alt="Status" />
  <img src="https://img.shields.io/badge/Stack-Vanilla%20JS%20%2B%20Tailwind-38BDF8?style=for-the-badge&logo=javascript&logoColor=white" alt="Stack" />
</p>

---

## 🌐 Idioma / Language
- [🇵🇹 Versão em Português](#-versão-em-português)
- [🇬🇧 English Version](#-english-version)

---

# 🇵🇹 Versão em Português

## 1. Visão Geral do Projeto

A **DSC (Domingos Silva & Cunha, Lda.)** é uma unidade fabril têxtil sediada no Vale do Ave (Norte de Portugal), um dos mais prestigiados clusters têxteis da Europa. Com mais de quatro décadas de experiência acumulada (desde 1984), a DSC especializa-se no desenvolvimento, tecelagem e confeção de têxteis-lar e felpos de alto rendimento para marcas de retalho de prestígio, hotelaria de luxo (5 estrelas / resorts) e private label internacional.

Este repositório alberga o **Portal Institucional B2B** da empresa — uma plataforma digital de alto padrão estético e técnico, construída para servir compradores internacionais, gestores de sourcing, arquitetos e diretores de compras industriais.

---

## 2. Destaques & Diferenciais

- **100% Bilingue em Tempo Real (PT $\leftrightarrow$ EN)**: Motor de internacionalização nativo com travessia recursiva de nós de texto (`TEXT_NODE`), permitindo alternar instantaneamente todo o website entre Português e Inglês sem recarregar a página e sem quebrar elementos estruturais.
- **Design Industrial Sofisticado (Norma SIDI)**: Paleta cromática rigorosa inspirada na manufatura europeia — Azul Marinho Profundo (`#0B1E48`, `#070D1E`), Branco Puro / Superfície Suave (`#F8FAFD`), e apontamentos funcionais em Dourado Âmbar (`#F59E0B`).
- **Fichas Técnicas Laboratoriais Interativas**: Modal dinâmico com especificações milimétricas para 8 artigos do catálogo (composição, título de fio, gramagem GSM, absorção em segundos DIN, solidez e certificados).
- **Caderno Técnico com Artigos Completos**: 6 ensaios de I&D e engenharia têxtil sobre calibração de gramagens, física de torção de fibras, Passaporte Digital do Produto (DPP) e lavandaria industrial.
- **Preparado para Amostragem B2B**: Formulário de sourcing com pré-preenchimento inteligente a partir de qualquer produto do catálogo ou artigo do blog.

---

## 3. Módulos & Páginas do Portal

| Página | Ficheiro | Conteúdo Principal |
| :--- | :--- | :--- |
| **Portal / Home** | `html/index.html` | Hero institucional, métricas de capacidade fabril, cartões de acesso setorial e pilares da engenharia limpa. |
| **Sobre Nós** | `html/sobre.html` | Cronologia histórica (1984–2026), parque de teares, matriz fotovoltaica e carrossel de segmentos de clientes. |
| **Serviços** | `html/servicos.html` | Matriz de 5 fases industriais, seletor de modo Integral vs. Modular, e tabela comparativa Full Package. |
| **Catálogo** | `html/catalogo.html` | 8 referências de banho com filtros de categoria, modal de ficha laboratorial, guia de tamanhos e roadmap de lead times. |
| **Sustentabilidade** | `html/sustentabilidade.html` | 4 pilares ecológicos (água, fibras orgânicas, química limpa, ética SMETA), certificações globais e prontidão para o Passaporte Digital (DPP). |
| **Caderno Técnico** | `html/blog.html` | Grelha de 6 artigos de engenharia têxtil com leitor de ensaios em modal e pré-encomenda de amostras. |
| **Contactos** | `html/contactos.html` | Geolocalização com coordenadas GPS, ligações logísticas (Leixões e OPO), FAQ interativa e formulário técnico B2B. |

---

## 4. Arquitetura Técnica & Sistema de Tradução

O projeto foi intencionalmente construído com tecnologias web limpas, garantindo máxima performance, zero dependências de compilação pesadas e compatibilidade universal:

```
├── index.html                  # Redirecionamento canónico para html/index.html
├── html/                       # 7 Páginas modulares completas
│   ├── index.html              # Página Principal B2B
│   ├── sobre.html              # Herança fabril & Parque Industrial
│   ├── servicos.html           # Modelo de produção vertical e modular
│   ├── catalogo.html           # Catálogo técnico de banho
│   ├── produtos.html           # Alias / Redirecionamento para catálogo
│   ├── sustentabilidade.html   # Práticas ESG & Certificações
│   ├── blog.html               # Caderno técnico & Artigos de I&D
│   └── contactos.html          # Sourcing, mapa logístico & formulário
├── js/
│   ├── i18n.js                 # Motor de tradução (678 frases mapeadas + DOM walker)
│   ├── main.js                 # Scripts globais (menu mobile, scroll, toasts)
│   ├── catalogo.js             # Fichas técnicas bilingues (DSC_SPECS) & filtros
│   ├── blog.js                 # Artigos bilingues (DSC_ARTICLES) & modal reader
│   ├── servicos.js             # Interatividade da matriz modular de produção
│   ├── contactos.js            # Lógica de preenchimento e submissão de amostras
│   └── tailwind-config.js      # Configuração dos tokens e cores do Tailwind
└── img/                        # Fotografias industriais e fichas de produto
```

### Como funciona o motor bilingue (`js/i18n.js`):
1. **Dicionário Estruturado**: Chaves `[data-i18n]` para cabeçalhos, rodapé e chamadas de ação.
2. **DOM Text-Node Walker**: Varre recursivamente nós folha de texto (`TEXT_NODE`), traduzindo tabelas, métricas e selos através de `GLOBAL_PHRASES`.
3. **Cache de Restauração (`_origText`)**: Garante que o texto original em Português é restaurado a 100% sem perdas ou formatações partidas.
4. **Formulários & Títulos**: Traduz em tempo real atributos `placeholder`, `<option>` de seletores e títulos `<title>` do navegador.
5. **Evento Global (`languageChanged`)**: Notifica componentes dinâmicos (como o catálogo e o blog) para atualizarem os seus dados instantaneamente.

---

## 5. Como Executar Localmente

Como o projeto é estático e modular, não requer instalação de dependências ou passos de compilação:

```bash
# 1. Clonar o repositório
git clone https://github.com/MiguelMarques7/Dsc.git
cd Dsc

# 2. Abrir diretamente no navegador ou iniciar um servidor estático simples:

# Opção A: Com Python 3
python3 -m http.server 8000

# Opção B: Com Node.js / npx
npx serve .

# 3. Aceder no navegador a:
# http://localhost:8000
```

---

<br />

---

# 🇬🇧 English Version

## 1. Project Overview

**DSC (Domingos Silva & Cunha, Lda.)** is a European textile manufacturing mill located in the Ave Valley (Northern Portugal), one of the world's most renowned textile clusters. With over four decades of engineering heritage (since 1984), DSC specializes in the design, weaving, and confection of high-performance home textiles and terry linens for luxury hospitality (5-star hotels & resorts), prestige retail brands, and global private label partners.

This repository contains the **B2B Institutional Portal** — an industrial digital platform designed specifically for international procurement directors, technical buyers, hotel chain operators, and textile brand founders.

---

## 2. Key Highlights & Features

- **100% Real-Time Bilingual Engine (PT $\leftrightarrow$ EN)**: Custom internationalization engine utilizing recursive DOM text-node traversal (`TEXT_NODE`), enabling instantaneous full-site language switching with zero page reloads and zero layout disruption.
- **European Industrial Aesthetic (SIDI Standard)**: Curated corporate color palette — Deep Industrial Navy (`#0B1E48`, `#070D1E`), Clean Soft Surface (`#F8FAFD`), and functional Amber Gold highlights (`#F59E0B`).
- **Interactive Laboratory Datasheets**: Dynamic modal displaying millimeter-accurate technical specs for 8 bath articles (fiber composition, yarn count, GSM density, DIN water absorption speed, washfastness, and eco-certifications).
- **Technical Journal with 6 Full R&D Papers**: In-depth textile engineering articles addressing GSM calibration, fiber twist mechanics, EU Digital Product Passport (DPP), and commercial laundry turnarounds.
- **B2B Sourcing & Sampling Integration**: Interactive inquiry form supporting pre-filled sampling requests linked directly from catalog references and technical articles.

---

## 3. Platform Modules & Pages

| Page | File | Core Content |
| :--- | :--- | :--- |
| **Institutional Portal** | `html/index.html` | Hero section, operational capacity metrics, sector portal cards, and DSC clean engineering pillars. |
| **About Us** | `html/sobre.html` | Mill history timeline (1984–2026), weaving loom park, solar photovoltaic array, and partner sectors carousel. |
| **Services** | `html/servicos.html` | 5-stage manufacturing matrix, Full Cycle (Turnkey) vs. Modular selection, and comparison table. |
| **Catalog** | `html/catalogo.html` | 8 technical bath references with category filters, laboratory datasheet modal, size chart, and lead time schedule. |
| **Sustainability** | `html/sustentabilidade.html` | 4 clean engineering pillars (water recycling, organic fibers, non-toxic chemistry, SMETA ethics), EU DPP readiness, and audit matrix. |
| **Technical Journal** | `html/blog.html` | 6 full R&D whitepapers with modal article reader and direct sample inquiry links. |
| **Contact & Sourcing** | `html/contactos.html` | Mill geolocation with GPS coordinates, logistics transit times (Leixões & OPO), interactive FAQ accordion, and B2B request form. |

---

## 4. Technical Architecture & Internationalization

Built with clean, lightweight web standards for maximum execution speed, zero compilation overhead, and optimal SEO compliance:

```
├── index.html                  # Canonical redirect to html/index.html
├── html/                       # 7 Modular production pages
│   ├── index.html              # B2B Institutional Home
│   ├── sobre.html              # Mill Heritage & Industrial Capacity
│   ├── servicos.html           # Vertical & Modular Manufacturing Model
│   ├── catalogo.html           # Technical Bath Linen Catalog
│   ├── produtos.html           # Alias / Redirect to catalog
│   ├── sustentabilidade.html   # ESG Practices & Environmental Compliance
│   ├── blog.html               # Technical Journal & R&D Articles
│   └── contactos.html          # Sourcing, Logistics Map & Inquiry Form
├── js/
│   ├── i18n.js                 # Master i18n engine (678 mapped phrases + DOM text walker)
│   ├── main.js                 # Global application scripts (mobile menu, scroll, toast)
│   ├── catalogo.js             # Bilingual datasheets (DSC_SPECS) & category filters
│   ├── blog.js                 # Bilingual essays (DSC_ARTICLES) & reader modal
│   ├── servicos.js             # Interactive production matrix state logic
│   ├── contactos.js            # Sample prefill and B2B request submission handling
│   └── tailwind-config.js      # Tailwind CSS color tokens and design system variables
└── img/                        # Industrial mill photography and product imagery
```

### Bilingual Translation Architecture (`js/i18n.js`):
1. **Structured Dictionary**: Key-based lookup (`[data-i18n]`) for navigation, footer, and core headings.
2. **Recursive DOM Text-Node Walker**: Traverses leaf `TEXT_NODE` elements, translating comparison tables, technical metrics, and badges via `GLOBAL_PHRASES`.
3. **Restoration Cache (`_origText`)**: Stores original Portuguese text nodes to guarantee 100% faithful restoration upon returning to PT.
4. **Form Controls & Page Titles**: Dynamically updates input/textarea `placeholder` attributes, `<select>` options, and document `<title>`.
5. **Event-Driven Updates**: Fires a custom `languageChanged` event to keep active modals, grids, and dynamic datasets updated in real-time.

---

## 5. Local Setup & Quick Start

Because the platform uses standard web technologies, no build tools or package managers are required:

```bash
# 1. Clone the repository
git clone https://github.com/MiguelMarques7/Dsc.git
cd Dsc

# 2. Open directly in your browser or run a simple local web server:

# Option A: Using Python 3
python3 -m http.server 8000

# Option B: Using Node.js / npx
npx serve .

# 3. Access in your browser:
# http://localhost:8000
```

---

## 6. Certifications & Industrial Compliance / Certificações Industriais

The manufacturing partner ecosystem aligns with the highest international quality, safety, and environmental standards:
- **OEKO-TEX® Standard 100 (Class I)**: Pediatric & sensitive skin safety certification.
- **GOTS (Global Organic Textile Standard)**: Certified organic cotton custody chain.
- **Sedex / SMETA 4-Pillars**: Independent social, labor, health, safety, and ethics audit.
- **ISO 9001 / ISO 14001**: Certified quality management and environmental systems.

---

## 7. License & Rights / Licença & Direitos

© 2026 **DSC (Domingos Silva & Cunha, Lda.)**. Todos os direitos reservados / All rights reserved.  
*Guimarães / Vizela — Vale do Ave, Portugal.*