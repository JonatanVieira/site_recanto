(() => {
  const catalogue = document.querySelector("[data-wine-catalogue]");
  const filterBar = document.querySelector("[data-wine-filters]");
  const counter = document.querySelector("[data-wine-count]");

  if (!catalogue || !filterBar || !counter) return;

  const categories = [
    {
      id: "don-guerino",
      label: "Don Guerino",
      eyebrow: "Brasil · Alto Feliz, RS",
      description: "Uma vinícola gaúcha que apresenta brancos aromáticos, tintos de personalidade e espumantes para celebrar.",
      wines: [
        ["Sinais Sauvignon Blanc", "Sauvignon Blanc", "Alto Feliz · RS", 1, 0],
        ["Sinais Rosé Malbec", "Rosé · Malbec", "Alto Feliz · RS", 1, 1],
        ["Sinais Riesling", "Riesling", "Alto Feliz · RS", 1, 2],
        ["Sinais Malbec", "Malbec", "Alto Feliz · RS", 1, 3],
        ["Sinais Cabernet Sauvignon", "Cabernet Sauvignon", "Alto Feliz · RS", 2, 0],
        ["Sinais Merlot", "Merlot", "Alto Feliz · RS", 2, 1],
        ["Reserva Pinot Noir", "Pinot Noir", "Alto Feliz · RS", 2, 2],
        ["Reserva Chardonnay", "Chardonnay", "Alto Feliz · RS", 2, 3],
        ["Vintage Malbec", "Malbec", "Alto Feliz · RS", 3, 0],
        ["Vintage Torrontés", "Torrontés", "Alto Feliz · RS", 3, 1],
        ["Monteolivo Alvarinho", "Alvarinho", "Alto Feliz · RS", 3, 2],
        ["Espumante Brut Chardonnay", "Espumante Brut", "Alto Feliz · RS", 3, 3],
        ["Espumante Malbec Rosé", "Espumante Rosé", "Alto Feliz · RS", 4, 0],
        ["Espumante Moscatel", "Espumante Moscatel", "Alto Feliz · RS", 4, 1],
        ["Espumante Moscatel Rosé", "Espumante Moscatel Rosé", "Alto Feliz · RS", 4, 2],
        ["Espumante Demi Sec", "Espumante Demi-Sec", "Alto Feliz · RS", 4, 3]
      ]
    },
    {
      id: "dal-pizzol",
      label: "Dal Pizzol",
      eyebrow: "Brasil · Vale dos Vinhedos, RS",
      description: "Rótulos brasileiros de pequena produção, com uma coleção versátil para os momentos à mesa.",
      wines: [
        ["Trebbiano Toscano", "Branco", "Vale dos Vinhedos · RS", 5, 0],
        ["Chardonnay", "Branco", "Vale dos Vinhedos · RS", 5, 1],
        ["Brut Charmat", "Espumante Brut", "Vale dos Vinhedos · RS", 5, 2],
        ["Brut Charmat Rosé", "Espumante Rosé", "Vale dos Vinhedos · RS", 5, 3],
        ["Moscatel", "Espumante Moscatel", "Vale dos Vinhedos · RS", 5, 4],
        ["Gamay Beaujolais", "Tinto", "Vale dos Vinhedos · RS", 6, 0],
        ["Cabernet Franc", "Tinto", "Vale dos Vinhedos · RS", 6, 1],
        ["Touriga Nacional", "Tinto", "Vale dos Vinhedos · RS", 6, 2],
        ["Pinot Noir", "Tinto", "Vale dos Vinhedos · RS", 6, 3]
      ]
    },
    {
      id: "espumantes",
      label: "Champagnes & Espumantes",
      eyebrow: "França · Brasil · Itália",
      description: "Borbulhas para brindar à vista do mar — de clássicos internacionais a ótimas escolhas brasileiras.",
      wines: [
        ["Moët & Chandon Impérial Brut", "Champagne Brut", "Champagne · França", 7, 0],
        ["Veuve Clicquot Brut", "Champagne Brut", "Champagne · França", 7, 1],
        ["Chandon Riche Demi-Sec", "Espumante Demi-Sec", "Garibaldi · RS", 7, 2],
        ["Chandon Réserve Brut", "Espumante Brut", "Garibaldi · RS", 7, 3],
        ["Belvino Grillo Brut", "Espumante Brut", "Sicília · Itália", 8, 0]
      ]
    },
    {
      id: "brancos",
      label: "Vinhos Brancos",
      eyebrow: "Brasil · Argentina · Chile · Portugal",
      description: "Frescor, fruta e mineralidade para acompanhar pescados, frutos do mar e a paisagem da Ilhota.",
      wines: [
        ["Luiz Argenta Chardonnay Clássico", "Chardonnay", "Flores da Cunha · RS", 8, 1],
        ["Luiz Argenta Gewürztraminer Jovem", "Gewürztraminer", "Flores da Cunha · RS", 8, 2],
        ["Luiz Argenta Sauvignon Blanc Jovem", "Sauvignon Blanc", "Flores da Cunha · RS", 8, 3],
        ["Sol Sul Torrontés", "Torrontés", "Mendoza · Argentina", 9, 0],
        ["Uko Sauvignon Blanc Estate", "Sauvignon Blanc", "Mendoza · Argentina", 9, 1],
        ["Luigi Bosca La Linda Chardonnay", "Chardonnay", "Mendoza · Argentina", 9, 2],
        ["Luigi Bosca Sauvignon Blanc", "Sauvignon Blanc", "Mendoza · Argentina", 9, 3],
        ["Parrales Chardonnay Reserva", "Chardonnay", "Chile", 10, 0],
        ["Terranoble Sauvignon Blanc Estate Reserve", "Sauvignon Blanc", "Vale Central · Chile", 10, 1],
        ["Casa Santos Lima Confidencial", "Branco", "Lisboa · Portugal", 10, 2],
        ["Herdade do Esporão Bico Amarelo", "Branco", "Alentejo · Portugal", 11, 1],
        ["Cartuxa Colheita", "Branco", "Alentejo · Portugal", 12, 0],
        ["Libalis", "Branco", "Espanha", 12, 1]
      ]
    },
    {
      id: "vinhos-verdes",
      label: "Vinhos Verdes",
      eyebrow: "Portugal · Região dos Vinhos Verdes",
      description: "Brancos portugueses de acidez vibrante e final refrescante, ideais para acompanhar a cozinha do mar.",
      wines: [
        ["Caves do Casalinho Monte Mar", "Vinho Verde", "Portugal", 11, 0],
        ["Quinta de Gomariz Loureiro", "Vinho Verde · Loureiro", "Vinho Verde · Portugal", 11, 2],
        ["Quinta de Gomariz Alvarinho", "Vinho Verde · Alvarinho", "Vinho Verde · Portugal", 11, 3]
      ]
    },
    {
      id: "roses",
      label: "Vinhos Rosés",
      eyebrow: "Brasil · Argentina · África do Sul · França",
      description: "Leves, elegantes e cheios de frescor para uma tarde longa à beira-mar.",
      wines: [
        ["Luiz Argenta Rosé Jovem", "Rosé", "Flores da Cunha · RS", 12, 2],
        ["Uko Malbec Estate Rosé", "Rosé · Malbec", "Mendoza · Argentina", 13, 0],
        ["Libalis Rosé", "Rosé", "Espanha", 13, 1],
        ["Nederburg Rosé", "Rosé", "África do Sul", 13, 2],
        ["Claude Val Rosé", "Rosé", "Languedoc · França", 14, 0]
      ]
    },
    {
      id: "tintos",
      label: "Vinhos Tintos",
      eyebrow: "Brasil · Argentina · Chile · Portugal",
      description: "Tintos de diversas intensidades para harmonizar com receitas marcantes e conversas sem pressa.",
      wines: [
        ["Luiz Argenta Shiraz Jovem", "Shiraz", "Flores da Cunha · RS", 14, 1],
        ["Uko Malbec Estate", "Malbec", "Mendoza · Argentina", 14, 2],
        ["Uko Cabernet Sauvignon Estate", "Cabernet Sauvignon", "Mendoza · Argentina", 15, 0],
        ["Uko Red Blend Estate", "Blend Tinto", "Mendoza · Argentina", 15, 1],
        ["Luigi Bosca La Linda Malbec", "Malbec", "Mendoza · Argentina", 15, 2],
        ["Pulenta Estate La Flor de Pulenta Malbec", "Malbec", "Mendoza · Argentina", 15, 3],
        ["Luigi Bosca Malbec", "Malbec", "Mendoza · Argentina", 16, 0],
        ["Ola Po Cabernet Sauvignon", "Cabernet Sauvignon", "Chile", 16, 1],
        ["Parrales Pinot Noir Reserva", "Pinot Noir", "Chile", 16, 2],
        ["Terranoble Carménère Estate Reserve", "Carménère", "Vale Central · Chile", 16, 3],
        ["Terranoble Cabernet Sauvignon Estate Reserve", "Cabernet Sauvignon", "Vale Central · Chile", 17, 0],
        ["Casa Santos Lima Confidencial", "Tinto", "Lisboa · Portugal", 17, 1],
        ["Cartuxa Colheita", "Tinto", "Alentejo · Portugal", 17, 2],
        ["Forte Ambrone", "Tinto", "Itália", 17, 3]
      ]
    },
    {
      id: "especiais",
      label: "Rótulos Especiais",
      eyebrow: "Argentina · Portugal",
      description: "Uma seleção para quem quer explorar garrafas de maior complexidade e experiências memoráveis.",
      wines: [
        ["DV Catena Chardonnay", "Chardonnay", "Mendoza · Argentina", 18, 0],
        ["Angélica Zapata Chardonnay", "Chardonnay", "Mendoza · Argentina", 18, 1],
        ["Pêra-Manca Branco", "Branco", "Alentejo · Portugal", 18, 2],
        ["DV Catena Malbec", "Malbec", "Mendoza · Argentina", 19, 0],
        ["Alma Negra", "Blend Tinto", "Argentina", 19, 1],
        ["Angélica Zapata Malbec", "Malbec", "Mendoza · Argentina", 19, 2],
        ["Pulenta Gran Malbec X", "Malbec", "Mendoza · Argentina", 19, 3]
      ]
    }
  ];

  const profile = (style) => {
    if (style.includes("Espumante") || style.includes("Champagne")) return "Borbulhas elegantes, pensadas para brindar e acompanhar sabores leves do mar.";
    if (style.includes("Vinho Verde")) return "Branco português de perfil fresco e vibrante, uma ótima escolha para pratos do mar.";
    if (style.includes("Rosé")) return "Uma escolha delicada e refrescante, perfeita para os dias de sol na Ilhota.";
    if (style.includes("Branco") || /Chardonnay|Sauvignon|Riesling|Torrontés|Alvarinho|Loureiro|Gewürztraminer|Trebbiano|Grillo/.test(style)) return "Frescor e delicadeza para harmonizar com pescados, frutos do mar e momentos à mesa.";
    return "Um tinto selecionado para acompanhar pratos marcantes e encontros que se prolongam.";
  };

  const grapeInfo = (name, style) => {
    const grapes = {
      "Sinais Sauvignon Blanc": "Sauvignon Blanc",
      "Sinais Rosé Malbec": "Malbec",
      "Sinais Riesling": "Riesling",
      "Sinais Malbec": "Malbec",
      "Sinais Cabernet Sauvignon": "Cabernet Sauvignon",
      "Sinais Merlot": "Merlot",
      "Reserva Pinot Noir": "Pinot Noir",
      "Reserva Chardonnay": "Chardonnay",
      "Vintage Malbec": "Malbec",
      "Vintage Torrontés": "Torrontés",
      "Monteolivo Alvarinho": "Alvarinho",
      "Espumante Brut Chardonnay": "Chardonnay",
      "Espumante Malbec Rosé": "Malbec",
      "Espumante Moscatel": "Moscato",
      "Espumante Moscatel Rosé": "Moscato",
      "Espumante Demi Sec": "Corte de uvas brancas",
      "Trebbiano Toscano": "Trebbiano Toscano",
      "Brut Charmat": "Corte de uvas brancas",
      "Brut Charmat Rosé": "Corte de uvas tintas",
      "Moscatel": "Moscato",
      "Gamay Beaujolais": "Gamay",
      "Cabernet Franc": "Cabernet Franc",
      "Touriga Nacional": "Touriga Nacional",
      "Pinot Noir": "Pinot Noir",
      "Moët & Chandon Impérial Brut": "Pinot Noir, Meunier e Chardonnay",
      "Veuve Clicquot Brut": "Pinot Noir, Meunier e Chardonnay",
      "Chandon Riche Demi-Sec": "Corte de uvas brancas e tintas",
      "Chandon Réserve Brut": "Chardonnay, Pinot Noir e Riesling Itálico",
      "Belvino Grillo Brut": "Grillo",
      "Luiz Argenta Chardonnay Clássico": "Chardonnay",
      "Luiz Argenta Gewürztraminer Jovem": "Gewürztraminer",
      "Luiz Argenta Sauvignon Blanc Jovem": "Sauvignon Blanc",
      "Sol Sul Torrontés": "Torrontés",
      "Uko Sauvignon Blanc Estate": "Sauvignon Blanc",
      "Luigi Bosca La Linda Chardonnay": "Chardonnay",
      "Luigi Bosca Sauvignon Blanc": "Sauvignon Blanc",
      "Parrales Chardonnay Reserva": "Chardonnay",
      "Terranoble Sauvignon Blanc Estate Reserve": "Sauvignon Blanc",
      "Casa Santos Lima Confidencial": "Corte da vinícola",
      "Caves do Casalinho Monte Mar": "Arinto, Loureiro e Trajadura",
      "Herdade do Esporão Bico Amarelo": "Alvarinho, Loureiro e Avessa",
      "Quinta de Gomariz Loureiro": "Loureiro",
      "Quinta de Gomariz Alvarinho": "Alvarinho",
      "Cartuxa Colheita": "Corte de uvas portuguesas",
      "Libalis": "Moscatel de Alexandria",
      "Luiz Argenta Rosé Jovem": "Pinot Noir",
      "Uko Malbec Estate Rosé": "Malbec",
      "Libalis Rosé": "Moscatel de Alexandria",
      "Nederburg Rosé": "Corte de uvas tintas",
      "Claude Val Rosé": "Grenache, Cinsault e Syrah",
      "Luiz Argenta Shiraz Jovem": "Shiraz",
      "Uko Malbec Estate": "Malbec",
      "Uko Cabernet Sauvignon Estate": "Cabernet Sauvignon",
      "Uko Red Blend Estate": "Corte de uvas tintas",
      "Luigi Bosca La Linda Malbec": "Malbec",
      "Pulenta Estate La Flor de Pulenta Malbec": "Malbec",
      "Luigi Bosca Malbec": "Malbec",
      "Ola Po Cabernet Sauvignon": "Cabernet Sauvignon",
      "Parrales Pinot Noir Reserva": "Pinot Noir",
      "Terranoble Carménère Estate Reserve": "Carménère",
      "Terranoble Cabernet Sauvignon Estate Reserve": "Cabernet Sauvignon",
      "Forte Ambrone": "Corte de uvas italianas",
      "DV Catena Chardonnay": "Chardonnay",
      "Angélica Zapata Chardonnay": "Chardonnay",
      "Pêra-Manca Branco": "Antão Vaz e Arinto",
      "DV Catena Malbec": "Malbec",
      "Alma Negra": "Corte secreto da vinícola",
      "Angélica Zapata Malbec": "Malbec",
      "Pulenta Gran Malbec X": "Malbec"
    };
    return grapes[name] || (style.includes("Rosé") ? "Corte de uvas rosadas" : "Corte da vinícola");
  };

  const wineCard = (wine) => {
    const [name, style, origin] = wine;
    return '<article class="wine-card" data-wine-card>' +
      '<div class="wine-card-copy"><p class="wine-card-type">' + style + '</p><h3>' + name + '</h3><p class="wine-card-description">' + profile(style) + '</p>' +
      '<dl class="wine-card-info"><div><dt>Uvas</dt><dd>' + grapeInfo(name, style) + '</dd></div><div><dt>Origem</dt><dd>' + origin + '</dd></div></dl></div></article>';
  };

  const categoryBlock = (category, index) => {
    return '<section class="wine-collection ' + (index % 2 ? "wine-collection-ink" : "") + '" id="' + category.id + '" data-wine-section>' +
      '<div class="page-width"><div class="wine-collection-head"><span>' + String(index + 1).padStart(2, "0") + '</span><div><p>' + category.eyebrow + '</p><h2>' + category.label + '</h2></div><p>' + category.description + '</p></div>' +
      '<div class="wine-grid">' + category.wines.map(wineCard).join("") + '</div></div></section>';
  };

  const totalWines = categories.reduce((total, category) => total + category.wines.length, 0);
  counter.textContent = totalWines + " rótulos";
  filterBar.innerHTML = '<button class="is-active" type="button" data-wine-filter="all">Todos <span>' + totalWines + '</span></button>' +
    categories.map((category) => '<button type="button" data-wine-filter="' + category.id + '">' + category.label + ' <span>' + category.wines.length + '</span></button>').join("");
  catalogue.innerHTML = categories.map(categoryBlock).join("");

  filterBar.addEventListener("click", (event) => {
    const button = event.target.closest("[data-wine-filter]");
    if (!button) return;
    const target = button.dataset.wineFilter;
    filterBar.querySelectorAll("button").forEach((item) => item.classList.toggle("is-active", item === button));
    document.querySelectorAll("[data-wine-section]").forEach((section) => {
      section.hidden = target !== "all" && section.id !== target;
    });
    if (target !== "all") document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
})();
