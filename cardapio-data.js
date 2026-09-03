const menuCategories = [
  {
    id: 'saladas', number: '01', title: 'Saladas', eyebrow: 'Para começar',
    intro: 'Opções frescas para abrir a experiência à mesa.',
    items: [
      ['Buffet de Saladas', 'Seleção de folhas, legumes e acompanhamentos frescos.'],
      ['Salada de Palmito', 'Palmito selecionado da casa em uma opção leve e saborosa.']
    ]
  },
  {
    id: 'petiscos', number: '02', title: 'Petiscos', eyebrow: 'Para compartilhar',
    intro: 'Receitas para dividir, começar devagar e acompanhar bons momentos.',
    items: [
      ['Camarão Soltinho Crocante', 'Camarão empanado com queijo parmesão.'],
      ['Camarão Soltinho à Milanesa', 'Camarões empanados, servidos para compartilhar.'],
      ['Lula Crispy', 'Lula empanada no trigo, crocante por fora e macia por dentro.'],
      ['Lula à Milanesa', 'Lula empanada e servida como petisco.'],
      ['Lula Grelhada', 'Lula grelhada na manteiga com páprica.'],
      ['Isca de Peixe Crocante', 'Iscas de peixe em preparo crocante.'],
      ['Isca de Peixe à Milanesa', 'Peixe à milanesa para compartilhar.'],
      ['Bolinho de Bacalhau', 'Porção com 10 unidades.'],
      ['Bolinho de Camarão ou Siri', 'Porção com 10 unidades.'],
      ['Pastel de Queijo, Palmito ou Camarão', 'Porção com 10 unidades e recheios à escolha.'],
      ['Ostra Gratinada', 'Porção com 6 unidades gratinadas.'],
      ['Bolinho de Peixe', 'Peixe linguado em porção com 10 unidades.'],
      ['Fritas', 'Porção de batatas fritas.'],
      ['Mini Coxinha de Frango', 'Porção com 10 unidades.'],
      ['Coquille de Camarão', 'Camarão 7 barbas com molho quatro queijos.'],
      ['Casquinha de Siri', 'Servida por unidade.']
    ]
  },
  {
    id: 'peixes', number: '03', title: 'Peixes', eyebrow: 'Do mar',
    intro: 'Pescados preparados para valorizar a identidade e os sabores do litoral.',
    note: 'Os pratos de peixe servem duas pessoas e acompanham arroz branco, arroz ao curry, batata sauté e pirão.',
    items: [
      ['Peixe à Aruba', 'Peixe grelhado, creme de espinafre, castanhas e gratinado com queijo parmesão.'],
      ['Peixe à Cozumel', 'Peixe grelhado na manteiga, molho bechamel, champignon, presunto, azeitona, parmesão e gorgonzola.'],
      ['Peixe Presidente', 'Peixe grelhado na manteiga com alcaparras, champignon e aspargos.'],
      ['Peixe à Itapema', 'Peixe grelhado na manteiga com molho de camarão.'],
      ['Peixe à Labadee', 'Peixe grelhado com molho quatro queijos, castanha e gratinado com parmesão.'],
      ['Peixe Light', 'Filé de peixe grelhado na manteiga.'],
      ['Peixe à Milanesa', 'Filé de peixe à milanesa com fritas.'],
      ['Peixe ao Creme de Espinafre com Castanhas', 'Peixe em preparo cremoso com espinafre e castanhas.'],
      ['Moqueca de Congrio e Camarão', 'Congrio e camarão com azeite de dendê, pimentão, cebola e leite de coco.'],
      ['Moqueca de Congrio', 'Congrio com azeite de dendê, pimentão, cebola e leite de coco.'],
      ['Peixe à Belle Meunière', 'Peixe grelhado com alcaparras, champignon e aspargos.'],
      ['Peixe à Joana do Mar', 'Peixe grelhado, banana frita, molho bechamel e gratinado.'],
      ['Peixe à Luca', 'Peixe grelhado na manteiga, leite de coco, creme de leite e gratinado.'],
      ['Peixe à Punta del Este', 'Peixe grelhado com molho bechamel, champignon, presunto, azeitona e parmesão.'],
      ['Peixe à Maryland', 'Peixe grelhado com creme de milho e bananas.'],
      ['Peixe Grelhado à Friedrich', 'Peixe à espanhola com tomate, cebola, batatinha, pimentão, alcaparras, azeitona, abobrinha e uva Itália; acompanha camarões grelhados.'],
      ['Peixe à Baden Baden', 'Peixe grelhado, gratinado com molho bechamel e bacon.'],
      ['Peixe à San Rafael', 'Peixe à espanhola com lula grelhada.'],
      ['Peixe à Graten', 'Peixe grelhado com molho bechamel e gratinado.'],
      ['Peixe ao Thermidor', 'Peixe grelhado com molho bechamel, mostarda, gema de ovo e parmesão.'],
      ['Caldeirada de Frutos do Mar', 'Peixe, camarão, lula, polvo, cebola, tomate e pimentão.'],
      ['Peixe Quatro Queijos', 'Peixe ao molho quatro queijos, gratinado.'],
      ['Peixe ao Catupiry', 'Peixe salteado na manteiga, molho bechamel, catupiry e gratinado.'],
      ['Peixe à Portuguesa', 'Batata, cebola, tomate, pimentão, ovos, azeitonas e peixe grelhado no azeite de oliva.'],
      ['Peixe à Sefrin', 'Peixe grelhado na manteiga e aspargos.'],
      ['Peixe Recanto', 'Peixe grelhado, molho rosado, palmito, maçã e gratinado.'],
      ['Peixe à Beatriz', 'Peixe com castanha e gratinado.'],
      ['Peixe à Marguerita', 'Peixe grelhado, tomate e manjericão.'],
      ['Peixe do Mano', 'Peixe à espanhola com tomate, cebola, batatinha, pimentão, alcaparras, azeitona, abobrinha e uva Itália.'],
      ['Peixe à Dorê ao Molho de Camarão', 'Filé de peixe empanado no trigo com molho de camarão.'],
      ['Peixe à Potiguar', 'Peixe à milanesa com molho de tomate, arroz à grega, parmesão e batata palha.'],
      ['Peixe ao Curry', 'Peixe grelhado com molho bechamel, curry, especiarias e ervas finas; gratinado.'],
      ['Anchova Grelhada', 'Anchova grelhada com batata sauté.']
    ]
  },
  {
    id: 'camaroes', number: '04', title: 'Camarões', eyebrow: 'Especialidade da casa',
    intro: 'Uma seleção de preparos da casa, molhos e acompanhamentos para quem aprecia camarões.',
    note: 'Os pratos de camarão servem duas pessoas e acompanham arroz branco, arroz ao curry, batata sauté e pirão.',
    items: [
      ['Camarão Grelhado', 'Camarão sem casca grelhado na manteiga.'],
      ['Camarão à Fiorentina', 'Camarão salteado na manteiga, creme de espinafre e gratinado.'],
      ['Risoto Alla Trevigiana', 'Risoto a quatro queijos com camarão e champignon.'],
      ['Camarão à Baiana', 'Camarão em preparo com dendê e azeite de oliva.'],
      ['Camarão Maryland', 'Camarão salteado na manteiga com creme de milho e banana; gratinado.'],
      ['Camarão ao Catupiry', 'Camarão salteado na manteiga, molho bechamel, champignon, catupiry e gratinado.'],
      ['Camarão Ensopado com Palmito', 'Camarão em receita ensopada com palmito.'],
      ['Camarão à Milá', 'Camarão salteado na manteiga e arroz ao curry.'],
      ['Camarão Estrela do Mar', 'Camarão salteado na manteiga com especiarias e gratinado.'],
      ['Camarão à Graten', 'Camarão grelhado na manteiga, molho bechamel e gratinado.'],
      ['Strogonoff de Camarão', 'Camarão salteado na manteiga, molho rosado e champignon.'],
      ['Camarão à La Vieira', 'Camarão no espeto grelhado na manteiga.'],
      ['Camarão à La Grega', 'Camarão com queijo à milanesa, arroz à grega e fritas.'],
      ['Camarão à Punta Cana', 'Camarão à milanesa sobre arroz à grega, gratinado e servido com batata palha.'],
      ['Camarão Recanto', 'Camarão salteado na manteiga, molho rosado, palmito, maçã e gratinado.'],
      ['Camarão Quatro Queijos', 'Molho bechamel, parmesão, catupiry, provolone, mussarela e gratinado.'],
      ['Camarão à Punta del Este', 'Camarão salteado na manteiga, molho bechamel, champignon, presunto, azeitona e gratinado.'],
      ['Camarão Médio à Milanesa', 'Camarão à milanesa, arroz e fritas.'],
      ['Camarão Internacional', 'Camarão salteado na manteiga, arroz cremoso com ervilha, presunto e champignon; gratinado e acompanhado de batata palha.'],
      ['Camarão dos Namorados', 'Camarão salteado na manteiga, molho quatro queijos, castanha e parmesão.']
    ]
  },
  {
    id: 'lagostas', number: '05', title: 'Lagostas', eyebrow: 'Sabores do mar',
    intro: 'Lagostas em preparos clássicos e receitas especiais do Recanto.',
    note: 'Os pratos de lagosta servem duas pessoas e acompanham arroz branco, arroz ao curry, batata sauté e pirão.',
    items: [
      ['Lagosta no Espeto Grelhada', 'Lagosta no espeto grelhada, arroz à grega, batata sauté e pirão de caldo de peixe.'],
      ['Lagosta Grelhada', 'Lagosta grelhada com molho de castanhas e manteiga.'],
      ['Lagosta ao Catupiry', 'Molho bechamel com catupiry, gratinado com queijo parmesão.'],
      ['Lagosta Recanto', 'Molho rosado, palmito, maçã e gratinado com queijo parmesão.'],
      ['Lagosta à Thermidor', 'Molho bechamel, gemas de ovos e champignon.'],
      ['Lagosta Mediterrânea', 'Lagosta, penne, azeitonas pretas, vinho branco e manjericão.'],
      ['Lagosta à Moda da Casa com Especiarias', 'Lagosta, creme de leite, leite de coco e páprica.'],
      ['Strogonoff de Lagosta', 'Lagosta salteada na manteiga, molho rosado e champignon.'],
      ['Lagosta do Fábio', 'Lagosta grelhada, tomate, cebola, pimentão, abobrinha, uvas, champignon e azeitona.'],
      ['Lagosta à Milá', 'Lagosta salteada na manteiga e arroz ao curry.'],
      ['Lagosta Internacional', 'Lagosta salteada na manteiga, arroz cremoso, ervilha, champignon, presunto, gratinado e batata palha.'],
      ['Lagosta Ensopada com Palmito', 'Lagosta em receita ensopada com palmito.'],
      ['Moqueca de Lagosta', 'Lagosta, azeite de dendê, pimentão, cebola e leite de coco.']
    ]
  },
  {
    id: 'salmao', number: '06', title: 'Salmão Premium', eyebrow: 'Especialidades',
    intro: 'Salmão em receitas cremosas, gratinadas e cheias de sabor.',
    note: 'Os pratos de salmão servem duas pessoas e acompanham arroz branco, arroz ao curry, batata sauté e pirão.',
    items: [
      ['Salmão Premium à Belle Meunière', 'Salmão grelhado, alcaparras, aspargos e champignon.'],
      ['Salmão Premium Recanto', 'Salmão grelhado, molho rosado, palmito, maçã e gratinado.'],
      ['Salmão Premium ao Catupiry', 'Salmão salteado na manteiga, molho bechamel, catupiry e gratinado.'],
      ['Salmão Premium ao Molho Curry', 'Salmão grelhado com molho bechamel, curry, especiarias, ervas finas e gratinado.'],
      ['Salmão Premium Baden Baden', 'Salmão ao molho bechamel com bacon e gratinado.'],
      ['Salmão Premium à Luca', 'Salmão grelhado na manteiga, leite de coco, creme de leite e gratinado.'],
      ['Salmão Premium ao Molho de Maracujá', 'Salmão premium em molho de maracujá.'],
      ['Salmão Premium Grelhado ao Molho de Camarão', 'Salmão grelhado acompanhado de molho de camarão.']
    ]
  },
  {
    id: 'especiais', number: '07', title: 'Pratos Especiais', eyebrow: 'Da nossa cozinha',
    intro: 'Receitas marcantes que reúnem frutos do mar e o toque autoral do Recanto.',
    note: 'Os pratos especiais servem duas pessoas e acompanham arroz branco, arroz ao curry, batata sauté e pirão.',
    items: [
      ['Congrio Nautilus', 'Congrio grelhado, molho à Belle Meunière e molho de camarão. Disponível também com salmão e linguado.'],
      ['Sugestão do Recanto', 'Camarão à milanesa, filé de peixe empanado com parmesão, molho de camarão e batata sauté.'],
      ['Crocante Enzo', 'Peixe empanado no parmesão sobre arroz cremoso com champignon, cebola, presunto, uvas passas e batata palha.'],
      ['Camarão Falmouth', 'Camarão empanado com parmesão sobre arroz cremoso com champignon, cebola, presunto, uvas passas e batata palha.'],
      ['Misto de Frutos do Mar', 'Seleção de frutos do mar preparada pela cozinha do Recanto.'],
      ['Congrio à Toca da Garoupa', 'Congrio grelhado, camarão, lula e polvo.'],
      ['Congrio à Provençal', 'Congrio em receita especial da casa.'],
      ['Polvo do Fábio', 'Polvo com tentáculos inteiros, pimentão, azeite, cebola, azeitonas, uva Itália, tomate e champignon.'],
      ['Polvo da Ana', 'Polvo com tentáculos fatiados, pimentão, azeite, cebola, azeitonas, uva Itália, tomate, abobrinha, shoyu e champignon.']
    ]
  },
  {
    id: 'carnes', number: '08', title: 'Carnes e Aves', eyebrow: 'Outras escolhas',
    intro: 'Opções para quem prefere carnes e aves, sem abrir mão da experiência à mesa.',
    note: 'Os pratos de carnes e aves acompanham arroz branco, arroz ao curry e fritas.',
    items: [
      ['Medalhão de Mignon Grelhado', 'Filé mignon com fritas.'],
      ['Medalhão de Mignon ao Molho Champignon', 'Medalhão de mignon em molho de champignon.'],
      ['Medalhão de Mignon com Massa ao Molho Madeira', 'Mignon acompanhado de massa e molho madeira.'],
      ['Mignon Grelhado com Massa Quatro Queijos', 'Mignon grelhado com massa ao molho quatro queijos.'],
      ['Mignon ao Molho de Tomate Seco', 'Molho bechamel, creme de leite, tomate seco e funghi.'],
      ['Mignon à Parmegiana', 'Mignon à milanesa com molho de tomate e gratinado.'],
      ['Strogonoff de Mignon', 'Molho rosado, champignon e mignon.'],
      ['Frango Grelhado', 'Frango grelhado, arroz e fritas.'],
      ['Frango à Milanesa', 'Frango em preparo à milanesa.'],
      ['Strogonoff de Frango', 'Molho rosado, champignon, arroz branco e batata palha.']
    ]
  },
  {
    id: 'massas', number: '09', title: 'Massas', eyebrow: 'Conforto à mesa',
    intro: 'Massas, molhos e ingredientes que trazem conforto à experiência.',
    items: [
      ['Massa Quatro Queijos com Camarão', 'Massa quatro queijos com camarão empanado na farinha panko.'],
      ['Massa ao Pesto com Camarão', 'Massa, nozes, alho, azeite de oliva e manjericão.'],
      ['Massa à Punta del Este com Camarão', 'Massa com molho bechamel, champignon, presunto, azeitona, parmesão e gratinado.'],
      ['Massa Mediterrânea', 'Tomate, azeitona preta, vinho branco e manjericão.'],
      ['Massa Parisiense', 'Frango em cubos, molho bechamel, presunto, champignon e gratinado.']
    ]
  },
  {
    id: 'vegetarianos', number: '10', title: 'Vegetarianos e Veganos', eyebrow: 'Opções especiais',
    intro: 'Opções saborosas preparadas para diferentes escolhas à mesa.',
    note: 'Para pratos sem glúten ou lactose, consulte a nossa equipe.',
    items: [
      ['Strogonoff de Grão-de-Bico', 'Molho rosado com champignon e grão-de-bico.'],
      ['Strogonoff de Palmito', 'Molho rosado com champignon e palmito.'],
      ['Moqueca de Banana', 'Banana, azeite de oliva, azeite de dendê, pimentão, cebola e leite de coco.'],
      ['Risoto de Legumes', 'Arroz curry, brócolis, couve-flor, cenoura e ervilha.'],
      ['Omelete de Legumes', 'Omelete preparado com legumes.']
    ]
  },
  {
    id: 'infantil', number: '11', title: 'Infantil', eyebrow: 'Para os pequenos',
    intro: 'Pratos pensados para os pequenos aproveitarem a experiência do Recanto.',
    items: [
      ['Spaguetti à Bolonhesa', 'Mignon em cubos e massa ao molho de tomate.'],
      ['Purê de Batatas com Peixe', 'Purê de batatas com peixe à milanesa ou grelhado.'],
      ['Bife Kids', 'Mignon ou frango, à milanesa ou grelhado, com arroz, feijão e fritas.'],
      ['Purê de Batatas e Cubos de Mignon Grelhado', 'Purê de batatas acompanhado de cubos de mignon.']
    ]
  },
  {
    id: 'bebidas', number: '12', title: 'Bebidas', eyebrow: 'Para acompanhar',
    intro: 'Sucos, drinks, cervejas e outras escolhas para acompanhar a refeição.',
    items: [
      ['Refrigerante', 'Seleção de refrigerantes.'],
      ['Água com Gás', 'Água mineral com gás.'],
      ['Água sem Gás', 'Água mineral sem gás.'],
      ['Sucos', 'Abacaxi, abacaxi com hortelã, maçã, acerola, laranja, limão, maracujá, morango ou uva.'],
      ['Jarra de Suco 1,5 L', 'Jarra de suco para compartilhar.'],
      ['Jarra de Suco 700 ml', 'Jarra de suco para compartilhar.'],
      ['Drinks com Vodka Absolut ou Wyborowa', 'Drinks preparados com vodka Absolut ou Wyborowa.'],
      ['Gin Tônica', 'Gin e água tônica em um clássico refrescante.'],
      ['Cuba Libre', 'Drink clássico à base de rum e cola.'],
      ['Red Bull', 'Energético.'],
      ['Campari', 'Aperitivo italiano.'],
      ['Domecq', 'Conhaque Domecq.'],
      ['Martini', 'Aperitivo Martini.'],
      ['Vodka Smirnoff', 'Dose de vodka Smirnoff.'],
      ['Licores', 'Seleção de licores.'],
      ['Whisky Ballantine’s', 'Whisky importado.'],
      ['Whisky Chivas Regal', 'Whisky importado.'],
      ['Whisky Johnnie Walker Black', 'Whisky importado.'],
      ['Whisky Johnnie Walker Red', 'Whisky importado.'],
      ['Whisky Jack Daniel’s', 'Whisky importado.'],
      ['Caipira Tropical', 'Vodka, morango, abacaxi, laranja, limão, kiwi, maracujá, mirtilo e açúcar.'],
      ['Negroni', 'Campari, gin, martini rosso e fatia de laranja.'],
      ['Gin Tropical', 'Red Bull Tropical.'],
      ['Gin Tônica de Maçã Verde', 'Gin tônica com toque de maçã verde.'],
      ['Gin Tônica de Frutas Vermelhas', 'Gin tônica com frutas vermelhas.'],
      ['Gin Tônica de Morango', 'Gin tônica com morango.'],
      ['Gin Tônica de Pêssego', 'Gin tônica com pêssego.'],
      ['Piña Colada', 'Suco de abacaxi, Bacardi, leite de coco e leite condensado.'],
      ['Mojito de Manga', 'Polpa de manga, Bacardi, suco de limão, hortelã e água com gás.'],
      ['Daiquiri de Morango', 'Bacardi, polpa de morango e suco de limão.'],
      ['Daiquiri de Pêssego', 'Bacardi, polpa de pêssego e suco de limão.'],
      ['Whisky Sour', 'Whisky, limão e açúcar.'],
      ['Alexander', 'Creme de cacau, conhaque, creme de leite, leite condensado e canela em pó.'],
      ['Caipirinha', 'Frutas à escolha: abacaxi, acerola, frutas vermelhas, kiwi, limão, morango, maracujá ou uva.'],
      ['Batida de Maracujá', 'Suco de maracujá, vodka e leite condensado.'],
      ['Batida de Coco', 'Leite de coco, vodka e leite condensado.'],
      ['Moscow Mule', 'Vodka, refrigerante de gengibre, limão espremido e espuma de gengibre.'],
      ['Aperol Spritz', 'Aperitivo italiano refrescante.'],
      ['Coquetel de Frutas', 'Suco de laranja, morango, abacaxi, mirtilo, grenadine, creme de leite e leite condensado.'],
      ['Lemonade', 'Água de coco, suco de limão e açúcar.'],
      ['Baden Baden', 'Cerveja 600 ml.'],
      ['Saint Beer', 'Cerveja 600 ml.'],
      ['Patagonia', 'Pilsen ou IPA, 600 ml.'],
      ['Vinho em Taça', 'Tinto seco, branco ou rosé.'],
      ['Long Neck Stella', 'Cerveja long neck.'],
      ['Long Neck Heineken', 'Cerveja long neck, incluindo opção sem álcool.'],
      ['Long Neck Eisenbahn', 'Pilsen, Weizenbier ou IPA.'],
      ['Chopp Brahma', 'Chopp Brahma.'],
      ['Brahma Malzbier', 'Cerveja Malzbier.'],
      ['Borck', 'Pilsen, Red Lager ou IPA.']
    ]
  }
];

const escapeMenuHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
}[character]));

const menuDirectory = document.querySelector('[data-menu-directory]');
const fullMenu = document.querySelector('[data-full-menu]');

if (menuDirectory) {
  menuDirectory.innerHTML = menuCategories.map((category) => `
    <a href="#${category.id}"><span>${category.number}</span>${escapeMenuHtml(category.title)}<b>↘</b></a>
  `).join('');
}

if (fullMenu) {
  fullMenu.innerHTML = menuCategories.map((category, categoryIndex) => {
    const cards = category.items.map(([name, description]) => {
      return `
        <article class="full-menu-card">
          <div class="full-menu-card-copy"><h3>${escapeMenuHtml(name)}</h3><p>${escapeMenuHtml(description)}</p></div>
        </article>
      `;
    }).join('');
    return `
      <section class="full-menu-category ${categoryIndex % 2 ? 'full-menu-category-dark' : ''}" id="${category.id}">
        <header class="full-menu-category-head"><span>${category.number}</span><div><p>${escapeMenuHtml(category.eyebrow)}</p><h3>${escapeMenuHtml(category.title)}</h3></div><p>${escapeMenuHtml(category.intro)}</p></header>
        <div class="full-menu-grid">${cards}</div>
        ${category.note ? `<p class="full-menu-category-note">${escapeMenuHtml(category.note)}</p>` : ''}
      </section>
    `;
  }).join('');
}
