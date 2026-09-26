# DSC — Domingos Silva & Cunha, Lda.
### Portal Institucional B2B • Engenharia & Manufatura de Têxteis-Lar

<p align="center">
  <img src="https://img.shields.io/badge/Made%20in-Portugal%20%F0%9F%87%B5%F0%9F%87%B9-0B1E48?style=for-the-badge&logoColor=white" alt="Made in Portugal" />
  <img src="https://img.shields.io/badge/Idioma-100%25%20Portugu%C3%AAs-F59E0B?style=for-the-badge&labelColor=0B1E48" alt="Idioma Português" />
  <img src="https://img.shields.io/badge/Status-Produção%20Pronta-success?style=for-the-badge&color=10B981" alt="Status" />
  <img src="https://img.shields.io/badge/Stack-HTML5%20%2B%20Tailwind%20%2B%20Vanilla%20JS-38BDF8?style=for-the-badge&logo=javascript&logoColor=white" alt="Stack" />
</p>

---

## 1. Visão Geral do Projeto

A **DSC (Domingos Silva & Cunha, Lda.)** é uma unidade fabril têxtil sediada em Roriz, Santo Tirso, no coração do Vale do Ave (Norte de Portugal) — um dos mais prestigiados clusters têxteis da Europa. A DSC especializa-se no desenvolvimento, tecelagem e confeção de têxteis-lar e felpos de alto rendimento para marcas de retalho de prestígio, hotelaria de luxo (5 estrelas / resorts) e soluções de *Private Label*.

Este repositório alberga o **Portal Institucional B2B** da empresa — uma plataforma digital de alto padrão estético e técnico, construída para servir compradores, gestores de sourcing, arquitetos de interiores e diretores de compras industriais.

---

## 2. Destaques & Funcionalidades

- **100% em Português Nativo**: Interface limpa, direta e sem sobrecargas de tradução, com terminologia industrial têxtil rigorosa.
- **Design Industrial & Editorial Sofisticado**: Tipografia contemporânea (*Cormorant Garamond*, *Plus Jakarta Sans* e *JetBrains Mono*), paleta cromática de alta manufatura europeia (Azul Marinho `#0B1E48`, Dourado Âmbar `#F59E0B` e Superfície `#F8FAFD`).
- **Simulador Interativo de Gramagem (GSM)**: Ferramenta de cálculo técnico que demonstra em tempo real o comportamento de absorção, toque e segmento recomendado para densidades de 350 a 950 g/m².
- **Fichas Técnicas Laboratoriais Interativas**: Modal dinâmico com especificações detalhadas para 8 referências técnicas do catálogo (composição, título de fio, estrutura de laçada, tempo de absorção DIN, tolerância de lavagem e certificações).
- **Caderno Técnico & Artigos de I&D**: 6 ensaios técnicos aprofundados sobre calibração de gramagens, física de torção de fios, Passaporte Digital do Produto (DPP) e eficiência energética em lavandaria industrial.
- **Marcos Históricos & Bodas de Prata**: Secção dedicada à trajetória fabril da DSC, comemoração dos 25 anos de atividade, galardões PME Líder / PME Excelência e projetos de sustentabilidade.
- **Matriz Operacional de Serviços (Ciclo Integral vs. Modular)**: Seletor interativo para orçamentação de ciclo completo *Turnkey Full-Package* ou etapas industriais isoladas (Fiação, Urdissagem, Tecelagem, Tinturaria e Confeção).
- **Geolocalização & Mapa Fabril de Alta Precisão**: Integração com Google Maps (visão de ruas e satélite HD) com coordenadas exatas da fábrica na Rua Quinta do Pinheiro, 74, em Roriz (`41.342554, -8.384385`) e tempos de ligação logística ao Porto de Leixões e Aeroporto Francisco Sá Carneiro (OPO).
- **Formulário de Sourcing B2B Inteligente**: Sistema com pré-seleção automática de referências de amostras a partir do catálogo ou serviços, com presets rápidos e feedback visual.

---

## 3. Estrutura de Páginas do Portal

| Página | Ficheiro | Conteúdo Principal |
| :--- | :--- | :--- |
| **Página Principal** | [`html/index.html`](html/index.html) | Hero institucional, métricas de capacidade fabril, cartões de linhas de referência, simulador de GSM e pilares estratégicos. |
| **Sobre Nós** | [`html/sobre.html`](html/sobre.html) | Herança fabril, capacidade instalada (2.500 Ton./Ano), carrossel de segmentos de atuação, parque de teares Jacquard e cronologia industrial. |
| **Serviços** | [`html/servicos.html`](html/servicos.html) | As 6 etapas da cadeia de valor, matriz interativa de modo Integral vs. Modular e modelos de cooperação (Full-Package, CMT, Private Label). |
| **Catálogo** | [`html/catalogo.html`](html/catalogo.html) | 8 referências técnicas de banho com filtros de categoria, modal de ficha técnica laboratorial e solicitação direta de amostras. |
| **Sustentabilidade** | [`html/sustentabilidade.html`](html/sustentabilidade.html) | Os 4 pilares ecológicos (matérias-primas, energia solar, gestão hídrica, economia circular), certificações globais (OEKO-TEX, GOTS, ISO, Sedex) e prontidão para o Passaporte Digital (DPP). |
| **Caderno Técnico & Blog** | [`html/blog.html`](html/blog.html) | Grelha de ensaios técnicos de engenharia têxtil com leitor em modal e grelha de marcos históricos e distinções da empresa. |
| **Contactos & Sourcing** | [`html/contactos.html`](html/contactos.html) | Coordenadas GPS da fábrica em Roriz, mapa interativo Google Maps, ligações de exportação, canais diretos por departamento, FAQ para compradores e formulário técnico. |

---

## 4. Arquitetura de Ficheiros

```
├── index.html                  # Redirecionamento canónico para html/index.html
├── html/                       # Páginas do portal
│   ├── index.html              # Página Principal B2B
│   ├── sobre.html              # Herança fabril & Parque Industrial
│   ├── servicos.html           # Modelo de produção vertical e modular
│   ├── catalogo.html           # Catálogo técnico de banho
│   ├── sustentabilidade.html   # Práticas ESG & Certificações
│   ├── blog.html               # Caderno técnico & Artigos de I&D
│   └── contactos.html          # Sourcing, mapa logístico & formulário
├── js/                         # Scripts modulares em Vanilla JS
│   ├── main.js                 # Scripts globais (menu mobile, scroll, simulador GSM, toasts)
│   ├── catalogo.js             # Fichas técnicas (DSC_SPECS) e filtros do catálogo
│   ├── blog.js                 # Artigos técnicos (DSC_ARTICLES) e leitor em modal
│   ├── servicos.js             # Interatividade da matriz modular de produção
│   ├── contactos.js            # Lógica do formulário de pedidos técnicos e mapa fabril
│   └── tailwind-config.js      # Configuração dos tokens e cores do Tailwind CSS
├── css/
│   └── style.css               # Estilos personalizados, tipografia e micro-animações
└── assets/                     # Fotografias industriais e imagens dos artigos
```

---

## 5. Como Executar Localmente

O projeto foi concebido em arquitetura web estática moderna, sem necessidade de passos de compilação ou instalação de dependências pesadas:

```bash
# 1. Clonar o repositório
git clone https://github.com/MiguelMarques7/Dsc.git
cd Dsc

# 2. Iniciar um servidor estático local:

# Opção A: Com Python 3
python3 -m http.server 8000

# Opção B: Com Node.js / npx
npx serve .

# 3. Abrir no navegador:
# http://localhost:8000
```

---

## 6. Informações Institucionais

- **Empresa**: Domingos Silva & Cunha, Lda.
- **Sede & Unidade Fabril**: Rua Quinta do Pinheiro, N.º 74 · 4795-364 Roriz, Santo Tirso, Portugal
- **Telefone**: +351 252 870 070
- **Email Comercial**: comercial@dsc.pt
- **NIF**: 505 528 606
- **Cluster**: Vale do Ave, Norte de Portugal

---

© 2026 Domingos Silva & Cunha, Lda. Todos os direitos reservados.