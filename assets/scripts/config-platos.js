// =========================================================================
// 📦 BASE DE DATOS LOCAL DE PLATOS (MENU_DATA)
// =========================================================================
const MENU_DATA = {
  sopas: {
    categoria_id: "contenedor-sopas",
    diseno: "normal",
    platos: [
      {
        id: "sara-api",
        nombre: {
          es: "Sopa andina - Sara api",
          en: "Andean Soup - Sara api",
          fr: "Soupe andine - Sara api"
        },
        descripcion: {
          es: "Sopa tradicional andina elaborada a base de maíz aromático y especias locales.",
          en: "Traditional Andean soup made from aromatic corn and local spices.",
          fr: "Soupe andine traditionnelle à base de maïs aromatique et d'épices locales."
        },
        precio: 20.00,
        imagen: "sara_api.jpg",
      },
      {
        id: "sopa-criolla-pollo",
        nombre: {
          es: "Sopa criolla de pollo",
          en: "Creole chicken soup",
          fr: "Soupe créole au poulet"
        },
        descripcion: {
          es: "Sopa tradicional de pollo preparada con fideos, vegetales seleccionados y especias de la casa.",
          en: "Traditional chicken soup prepared with noodles, selected vegetables, and house spices.",
          fr: "Soupe au poulet traditionnelle préparée avec des nouilles, des légumes sélectionnés et des épices de la maison."
        },
        precio: 22.00,
        imagen: "sopa_criolla_pollo.jpg"
      },
      {
        id: "sopa-criolla-alpaca",
        nombre: {
          es: "Sopa criolla de alpaca",
          en: "Creole alpaca soup",
          fr: "Soupe créole d'alpaga"
        },
        descripcion: {
          es: "Sopa tradicional preparada con lomo selecto de alpaca, fideos y especias locales.",
          en: "Traditional soup prepared with select alpaca loin, noodles, and local spices.",
          fr: "Soupe traditionnelle préparée con filet d'alpaga sélectionné, nouilles et épices locales."
        },
        precio: 25.00,
        imagen: "sopa_criolla_alpaca.jpg"
      }
    ]
  },

  exclusivos: {
    categoria_id: "contenedor-exclusivos",
    diseno: "normal",
    platos: [
      {
        id: "arroz-oriental",
        nombre: {
          es: "Arroz oriental",
          en: "Oriental rice",
          fr: "Riz oriental"
        },
        descripcion: {
          es: "Arroz acompañado de tortilla de huevos y vegetales salteados en salsa oriental.",
          en: "Rice accompanied by egg omelet and sautéed vegetables in oriental sauce.",
          fr: "Riz accompagné d'une omelette aux œufs et de légumes sautés sauce orientale."
        },
        precio: 25.00,
        imagen: "arroz_oriental.jpg"
      },
      {
        id: "pure-campesino-avocado",
        nombre: {
          es: "Puré campesino con ensalada de avocado",
          en: "Peasant puree with avocado salad",
          fr: "Purée paysanne avec salade d'avocat"
        },
        descripcion: {
          es: "Puré de zapallo con papa peruanita, leche, queso local, nuez moscada, ensalada de vegetales del valle y porción de arroz blanco.",
          en: "Squash puree with peruanita potato, milk, local cheese, nutmeg, valley vegetable salad, and a side of white rice.",
          fr: "Purée de potiron avec pomme de terre peruanita, lait, fromage local, noix de muscade, salade de légumes de la vallée et riz blanc."
        },
        precio: 27.00,
        imagen: "pure_campesino_avocado.jpg"
      },
      {
        id: "pure-campesino-pollo",
        nombre: {
          es: "Puré campesino con pollo a la olla",
          en: "Peasant puree with pot-roasted chicken",
          fr: "Purée paysanne con poulet à la casserole"
        },
        descripcion: {
          es: "Puré de zapallo con papa, huacatay, leche, queso local y presa de pollo macerado en ají panca y mostaza, acompañado de arroz.",
          en: "Squash puree with potato, huacatay, milk, local cheese, and chicken marinated in aji panca and mustard, served with rice.",
          fr: "Purée de potiron avec pomme de terre, huacatay, lait, fromage local et morceau de poulet mariné au piment panca et moutarde, avec du riz."
        },
        precio: 25.00,
        imagen: "pure_campesino_pollo.jpg"
      },
      {
        id: "alpaca-salsa-chicha",
        nombre: {
          es: "Alpaca en salsa de chicha",
          en: "Alpaca in chicha sauce",
          fr: "Alpaga en sauce chicha"
        },
        descripcion: {
          es: "Carne de alpaca en salsa de chicha de maíz cabanita acompañado de arroz blanco, camote y sarsa criolla.",
          en: "Alpaca meat in cabanita corn chicha sauce accompanied by white rice, sweet potato, and sarsa criolla.",
          fr: "Viande d'alpaga en sauce chicha de maïs cabanita accompagnée de riz blanc, patate douce et sarsa criolla."
        },
        precio: 27.00,
        imagen: "alpaca_salsa_chicha.jpg"
      }
    ]
  },

  veg_principal: {
    categoria_id: "contenedor-veg-principal",
    diseno: "normal",
    platos: [
      {
        id: "arroz-chaufa-oriental",
        nombre: {
          es: "Arroz chaufa oriental con vegetales y tortilla de huevo",
          en: "Oriental chaufa rice with vegetables and egg omelet",
          fr: "Riz chaufa oriental aux légumes et omelette"
        },
        descripcion: {
          es: "Arroz salteado al wok con vegetales seleccionados de la temporada y tortilla de huevo.",
          en: "Wok-sautéed rice with selected seasonal vegetables and egg omelet.",
          fr: "Riz sauté au wok avec des légumes de saison sélectionnés et une omelette aux œufs."
        },
        precio: 25.00,
        imagen: "arroz_chaufa_oriental.jpg"
      },
      {
        id: "spagetti-salteado-vegetales",
        nombre: {
          es: "Spagetti salteado con vegetales",
          en: "Sautéed spaghetti with vegetables",
          fr: "Spaghetti sauté aux légumes"
        },
        descripcion: {
          es: "Pasta spagetti salteada artesanalmente con una selección de vegetales frescos y especias aromáticas.",
          en: "Spaghetti pasta sautéed with a selection of fresh vegetables and aromatic spices.",
          fr: "Pâtes spaghetti sautées avec une sélection de légumes frais et d'épices aromatiques."
        },
        precio: 25.00,
        imagen: "spagetti_salteado_vegetales.jpg"
      },
      {
        id: "guiso-garbanzos",
        nombre: {
          es: "Guiso de garbanzos",
          en: "Chickpea stew",
          fr: "Ragoût de pois chiches"
        },
        descripcion: {
          es: "Guiso casero de garbanzos sazonado con especias locales andinas.",
          en: "Homemade chickpea stew seasoned with local Andean spices.",
          fr: "Ragoût de pois chiches fait maison assaisonné d'épices andines locales."
        },
        precio: 23.00,
        imagen: "guiso_garbanzos.jpg"
      },
      {
        id: "frejoles-huevo-frito",
        nombre: {
          es: "Frejoles con huevo frito",
          en: "Beans with fried egg",
          fr: "Haricots avec oeuf au plat"
        },
        descripcion: {
          es: "Porción de frejoles tradicionales de la casa acompañados con un huevo frito en su punto.",
          en: "Portion of traditional house beans served with a perfectly cooked fried egg.",
          fr: "Portion de haricots traditionnels de la maison servie avec un œuf au plat."
        },
        precio: 25.00,
        imagen: "frejoles_huevo_frito.jpg"
      },
      {
        id: "pure-pallar-saltado",
        nombre: {
          es: "Puré de pallar con saltado",
          en: "Lima bean puree with sautéed vegetables",
          fr: "Purée de haricots de Lima avec sauté"
        },
        descripcion: {
          es: "Suave puré a base de pallares locales acompañado de un saltado jugoso de vegetales.",
          en: "Smooth puree made from local lima beans accompanied by a juicy vegetable sauté.",
          fr: "Purée douce à base de haricots de Lima locaux accompagnée d'un sauté de légumes juteux."
        },
        precio: 27.00,
        imagen: "pure_pallar_saltado.jpg"
      },
      {
        id: "sara-api",
        nombre: {
          es: "Sopa andina - Sara api",
          en: "Andean Soup - Sara api",
          fr: "Soupe andine - Sara api"
        },
        descripcion: {
          es: "Sopa tradicional andina elaborada a base de maíz aromático y especias locales.",
          en: "Traditional Andean soup made from aromatic corn and local spices.",
          fr: "Soupe andine traditionnelle à base de maïs aromatique et d'épices locales."
        },
        precio: 20.00,
        imagen: "sara_api.jpg"
      }
    ]
  }
};

// =========================================================================
// 🚀 MOTOR DE RENDERIZADO DINÁMICO E INTELIGENTE
// =========================================================================
function renderizarMenu(idioma) {
  // Recorremos todas las categorías definidas en la base de datos superior
  for (const categoria in MENU_DATA) {
    const infoCat = MENU_DATA[categoria];
    const contenedor = document.getElementById(infoCat.categoria_id);
    
    // Si la página HTML actual NO tiene este contenedor, lo ignora limpiamente sin errores
    if (!contenedor) continue;
    
    // Limpiamos el contenido viejo antes de inyectar el nuevo
    contenedor.innerHTML = "";
    
    // Evaluamos qué plantilla usar según la propiedad 'diseno'
    if (infoCat.diseno === "mini") {
      // --- DISEÑO DE TARJETA PEQUEÑA (GRID DE 2 COLUMNAS) ---
      infoCat.platos.forEach(plato => {
        const miniTarjetaHTML = `
          <div class="bg-white p-2 rounded-xl shadow-sm border border-andean-100 flex gap-2">
            <img src="assets/images/dishes/${plato.imagen}" alt="${plato.nombre[idioma]}" class="w-12 h-12 object-cover rounded-lg bg-stone-100 flex-shrink-0" onerror="this.src='https://placehold.co/100?text=${plato.id}'">
            <div class="flex-1 flex flex-col justify-between min-w-0">
              <h3 class="font-bold text-stone-900 text-xs truncate" title="${plato.nombre[idioma]}">${plato.nombre[idioma]}</h3>
              <div class="flex justify-between items-center mt-1">
                <span class="text-amber-950 text-[11px] font-bold">S/. ${plato.precio.toFixed(2)}</span>
                <button onclick="addToCart('${plato.nombre[idioma].replace(/'/g, "\\'")}', ${plato.precio})" class="bg-stone-900 text-white text-[11px] px-2 py-0.5 rounded active:scale-95 transition-transform">
                  +
                </button>
              </div>
            </div>
          </div>
        `;
        contenedor.innerHTML += miniTarjetaHTML;
      });
      
    } else {
      // --- DISEÑO DE TARJETA NORMAL (GRANDE CON DESCRIPCIÓN) ---
      infoCat.platos.forEach(plato => {

        const tarjetaHTML = `
          <div class="bg-white p-3 rounded-xl shadow-sm border border-andean-100 flex gap-3">
            <img src="assets/images/dishes/${plato.imagen}" alt="${plato.nombre[idioma]}" class="w-20 h-20 object-cover rounded-lg bg-stone-100 flex-shrink-0" onerror="this.src='https://placehold.co/150?text=Mikuna'">
            <div class="flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-center gap-1.5">
                  <h3 class="font-bold text-stone-900 text-sm">${plato.nombre[idioma]}</h3>
                </div>
                <p class="text-xs text-stone-500 leading-relaxed mt-0.5">${plato.descripcion[idioma]}</p>
              </div>
              <div class="flex justify-between items-center mt-1">
                <span class="text-amber-950 font-bold text-sm">S/. ${plato.precio.toFixed(2)}</span>
                <button onclick="addToCart('${plato.nombre[idioma].replace(/'/g, "\\'")}', ${plato.precio})" class="bg-amber-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg active:scale-95 transition-transform">
                  + ${idioma === 'es' ? 'Agregar' : idioma === 'en' ? 'Add' : 'Ajouter'}
                </button>
              </div>
            </div>
          </div>
        `;
        contenedor.innerHTML += tarjetaHTML;
      });
    }
  }
}