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
        id: "pollo-olla-ensalada-avocado",
        nombre: {
          es: "Pollo a la olla con ensalada de avocado",
          en: "Pot-roasted chicken with avocado salad",
          fr: "Poulet à la casserole avec salade d'avocat"
        },
        descripcion: {
          es: "Presa de pollo macerada en ají panca y mostaza cocida a la olla, acompañada de una fresca ensalada de vegetales y avocado del valle.",
          en: "Pot-roasted chicken marinated in aji panca and mustard, served with a fresh vegetable and valley avocado salad.",
          fr: "Morceau de poulet mariné au piment panca et moutarde cuit à la casserole, accompagné d'une salade fraîche de légumes et d'avocat de la vallée."
        },
        precio: 25.00,
        imagen: "pollo_olla_ensalada_avocado.jpg"
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

  grill: {
    categoria_id: "contenedor-grill",
    diseno: "normal",
    platos: [
      {
        id: "filete-pollo-plancha",
        nombre: {
          es: "Filete de pollo a la plancha",
          en: "Grilled chicken fillet",
          fr: "Filet de poulet à la plancha"
        },
        descripcion: {
          es: "Filete de pollo acompañado de papas fritas, vegetales, arroz blanco y cremas.",
          en: "Chicken fillet served with french fries, vegetables, white rice, and sauces.",
          fr: "Filet de poulet accompagné de frites, légumes, riz blanc et sauces."
        },
        precio: 35.00,
        imagen: "filete_pollo_plancha.jpg"
      },
      {
        id: "trucha-parrilla",
        nombre: {
          es: "Trucha a la parrilla",
          en: "Grilled trout",
          fr: "Truite grillée"
        },
        descripcion: {
          es: "Filete de trucha entera a la plancha acompañados de papas fritas, vegetales, arroz blanco, chimichurri y salsa picante.",
          en: "Whole trout fillet grilled on the plate served with french fries, vegetables, white rice, chimichurri, and hot sauce.",
          fr: "Filet de truite entière cuit à la plancha accompagné de frites, légumes, riz blanc, chimichurri et sauce piquante."
        },
        precio: 35.00,
        imagen: "trucha_parrilla.jpg"
      },
      {
        id: "chuleta-cerdo-parrilla",
        nombre: {
          es: "Chuleta de cerdo a la parrilla",
          en: "Grilled pork chop",
          fr: "Côtelette de porc grillée"
        },
        descripcion: {
          es: "Chuleta de cerdo a la parrilla acompañado de papas fritas, vegetales, arroz, chimichurri y salsa picante.",
          en: "Grilled pork chop served with french fries, vegetables, rice, chimichurri, and hot sauce.",
          fr: "Côtelette de porc grillée accompagnée de frites, légumes, riz, chimichurri et sauce piquante."
        },
        precio: 38.00,
        imagen: "chuleta_cerdo_parrilla.jpg"
      },
      {
        id: "churrasco-res-plancha",
        nombre: {
          es: "Churrasco de Res a la Plancha",
          en: "Grilled beef steak",
          fr: "Churrasco de bœuf à la plancha"
        },
        descripcion: {
          es: "Churrasco de res a la parrilla acompañado de papas fritas-vegetales, arroz, chimichurri y salsa picante.",
          en: "Grilled beef steak served with french fries, vegetables, rice, chimichurri, and hot sauce.",
          fr: "Steak de bœuf grillé accompagné de frites, légumes, riz, chimichurri et sauce piquante."
        },
        precio: 38.00,
        imagen: "churrasco_res_plancha.jpg"
      },
      {
        id: "lomo-saltado-alpaca",
        nombre: {
          es: "Lomo saltado de alpaca",
          en: "Sautéed alpaca loin",
          fr: "Lomo saltado d'alpaga"
        },
        descripcion: {
          es: "Lomo fino de alpaca salteado con cebolla, tomate en gajos, ajíes, cilantro, ajos, jengibre y salsas, acompañado de papas fritas, porción de arroz blanco, cremas y salsa picante.",
          en: "Fine alpaca loin sautéed with onion, tomato wedges, chili peppers, cilantro, garlic, ginger, and sauces, served with french fries, a side of white rice, creams, and hot sauce.",
          fr: "Filet mignon d'alpaga sauté aux oignons, tomates en quartiers, piments, coriandre, ail, gingembre et sauces, accompagné de frites, d'une portion de riz blanc, de crèmes et de sauce piquante."
        },
        precio: 42.00,
        imagen: "lomo_saltado_alpaca.jpg"
      },
      {
        id: "lomo-fino-alpaca-grill",
        nombre: {
          es: "Lomo fino de alpaca al grill",
          en: "Grilled fine alpaca loin",
          fr: "Filet mignon d'alpaga au grill"
        },
        descripcion: {
          es: "Filete de lomo fino de alpaca a la parrilla acompañado de papas fritas, vegetales, porción de arroz blanco, chimichurri y salsa picante.",
          en: "Grilled fine alpaca loin fillet served with french fries, vegetables, a side of white rice, chimichurri, and hot sauce.",
          fr: "Filet de filet mignon d'alpaga grillé accompagné de frites, légumes, une portion de riz blanc, chimichurri et sauce piquante."
        },
        precio: 45.00,
        imagen: "lomo_fino_alpaca_grill.jpg"
      }
    ]
  },

  cocteles: {
    categoria_id: "contenedor-cocteles",
    diseno: "mini",
    platos: [
      {
        id: "sancayo-sour",
        nombre: {
          es: "Sancayo sour",
          en: "Sancayo sour",
          fr: "Sancayo sour"
        },
        precio: 18.00,
        imagen: "sancayo_sour.jpg"
      },
      {
        id: "pisco-sour-maracuya",
        nombre: {
          es: "Pisco sour de maracuyá",
          en: "Passion fruit pisco sour",
          fr: "Pisco sour au fruit de la passion"
        },
        precio: 18.00,
        imagen: "pisco_sour_maracuya.jpg"
      },
      {
        id: "pina-colada",
        nombre: {
          es: "Piña colada",
          en: "Piña colada",
          fr: "Piña colada"
        },
        precio: 22.00,
        imagen: "pina_colada.jpg"
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
  },

  veg_sandwiches: {
    categoria_id: "contenedor-veg-sandwiches",
    diseno: "mini",
    platos: [
      {
        id: "huevo-sandwich",
        nombre: {
          es: "Huevo Sandwich",
          en: "Egg Sandwich",
          fr: "Sandwich aux œufs"
        },
        precio: 8.00,
        imagen: "huevo_sandwich.jpg"
      },
      {
        id: "avocado-sandwich",
        nombre: {
          es: "Avocado Sandwich",
          en: "Avocado Sandwich",
          fr: "Sandwich à l'avocat"
        },
        precio: 8.00,
        imagen: "avocado_sandwich.jpg"
      },
      {
        id: "queso-sandwich",
        nombre: {
          es: "Queso Sandwich",
          en: "Cheese Sandwich",
          fr: "Sandwich au fromage"
        },
        precio: 8.00,
        imagen: "queso_sandwich.jpg"
      },
      {
        id: "sandwich-triple",
        nombre: {
          es: "Triple",
          en: "Triple Sandwich",
          fr: "Sandwich Triple"
        },
        precio: 18.00,
        imagen: "sandwich_triple.jpg"
      },
      {
        id: "pan-campesino",
        nombre: {
          es: "Pan Campesino",
          en: "Country Bread Sandwich",
          fr: "Sandwich au pain paysan"
        },
        precio: 20.00,
        imagen: "pan_campesino.jpg"
      },
      {
        id: "pastel-acelga",
        nombre: {
          es: "Pastel de Acelga",
          en: "Swiss Chard Pie",
          fr: "Tourte aux blettes"
        },
        precio: 8.00,
        imagen: "pastel_acelga.jpg"
      }
    ]
  },

  veg_ensaladas: {
    categoria_id: "contenedor-veg-ensaladas",
    diseno: "normal",
    platos: [
      {
        id: "avocado-relleno",
        nombre: {
          es: "Avocado Relleno",
          en: "Stuffed Avocado",
          fr: "Avocat farci"
        },
        descripcion: {
          es: "Palta (avocado) selecta rellena con una delicada mezcla de vegetales frescos de la estación y mayonesa casera.",
          en: "Select avocado stuffed with a delicate mix of fresh seasonal vegetables and homemade mayonnaise.",
          fr: "Avocat sélectionné farci d'un délicat mélange de légumes frais de saison et de mayonnaise maison."
        },
        precio: 21.00,
        imagen: "avocado_relleno.jpg"
      },
      {
        id: "ensalada-avocado-personal",
        nombre: {
          es: "Ensalada de Avocado Personal",
          en: "Personal Avocado Salad",
          fr: "Salade d'avocat personnelle"
        },
        descripcion: {
          es: "Fresca y ligera combinación individual de láminas de avocado, lechuga orgánica y verduras del valle con el aliño especial de la casa.",
          en: "Fresh and light individual combination of avocado slices, organic lettuce, and valley vegetables with our special house dressing.",
          fr: "Combinaison individuelle fraîche et légère de tranches d'avocat, de laitue biologique et de légumes de la vallée avec notre vinaigrette spéciale maison."
        },
        precio: 12.00,
        imagen: "ensalada_avocado.jpg"
      }
    ]
  },

  veg_complementos: {
    categoria_id: "contenedor-veg-complementos",
    diseno: "mini",
    platos: [
      {
        id: "tortilla-verduras",
        nombre: {
          es: "Tortilla de Verduras",
          en: "Vegetable Omelet",
          fr: "Omelette aux légumes"
        },
        precio: 18.00,
        imagen: "tortilla_verduras.jpg"
      },
      {
        id: "papas-fritas",
        nombre: {
          es: "Papas Fritas",
          en: "French Fries",
          fr: "Frites"
        },
        precio: 14.00,
        imagen: "papas_fritas.jpg"
      },
      {
        id: "huacamole",
        nombre: {
          es: "Huacamole",
          en: "Guacamole",
          fr: "Guacamole"
        },
        precio: 10.00,
        imagen: "huacamole.jpg"
      },
      {
        id: "huevos-revueltos",
        nombre: {
          es: "Huevos Revueltos",
          en: "Scrambled Eggs",
          fr: "Œufs brouillés"
        },
        precio: 6.00,
        imagen: "huevos_revueltos.jpg"
      },
      {
        id: "banana-frita",
        nombre: {
          es: "Banana Frita",
          en: "Fried Banana",
          fr: "Banane frite"
        },
        precio: 6.00,
        imagen: "banana_frita.jpg"
      }
    ]
  },

  bebidas: {
    categoria_id: "contenedor-bebidas",
    diseno: "mini",
    platos: [
      {
        id: "vino-tinto-seco",
        nombre: {
          es: "Copa de vino tinto (seco)",
          en: "Glass of red wine (dry)",
          fr: "Verre de vin rouge (sec)"
        },
        precio: 16.00,
        imagen: "vino_tinto_seco.jpg"
      },
      {
        id: "vino-tinto-semiseco",
        nombre: {
          es: "Copa de vino tinto (semi seco)",
          en: "Glass of red wine (semi-dry)",
          fr: "Verre de vin rouge (demi-sec)"
        },
        precio: 12.00,
        imagen: "vino_tinto_semiseco.jpg"
      },
      {
        id: "cerveza-cusquena",
        nombre: {
          es: "Cerveza Cusqueña 310 ml.",
          en: "Cusqueña Beer 310 ml.",
          fr: "Bière Cusqueña 310 ml."
        },
        precio: 10.00,
        imagen: "cerveza_cusquena.jpg"
      },
      {
        id: "chicha-morada",
        nombre: {
          es: "Chicha morada",
          en: "Chicha morada",
          fr: "Chicha morada"
        },
        precio: 6.00,
        imagen: "chicha_morada.jpg"
      },
      {
        id: "inka-kola",
        nombre: {
          es: "Inka Kola 600 ml",
          en: "Inka Kola 600 ml",
          fr: "Inka Kola 600 ml"
        },
        precio: 5.00,
        imagen: "inka_kola.jpg"
      },
      {
        id: "coca-cola",
        nombre: {
          es: "Coca-Cola 600ml",
          en: "Coca-Cola 600ml",
          fr: "Coca-Cola 600ml"
        },
        precio: 5.00,
        imagen: "coca_cola.jpg"
      },
      {
        id: "refresco-maracuya",
        nombre: {
          es: "Refresco de Maracuyá",
          en: "Passion fruit juice",
          fr: "Jus de fruit de la passion"
        },
        precio: 5.00,
        imagen: "refresco_maracuya.jpg"
      },
      {
        id: "refresco-sancayo",
        nombre: {
          es: "Refresco de sancayo",
          en: "Sancayo juice",
          fr: "Jus de sancayo"
        },
        precio: 5.00,
        imagen: "refresco_sancayo.jpg"
      }
    ]
  },

  postres: {
    categoria_id: "contenedor-postres",
    diseno: "mini",
    platos: [
      {
        id: "pie-sancayo",
        nombre: {
          es: "Pie de sancayo",
          en: "Sancayo pie",
          fr: "Tarte au sancayo"
        },
        precio: 8.00,
        imagen: "pie_sancayo.jpg"
      },
      {
        id: "pie-maracuya",
        nombre: {
          es: "Pie de maracuyá",
          en: "Passion fruit pie",
          fr: "Tarte au fruit de la passion"
        },
        precio: 8.00,
        imagen: "pie_maracuya.jpg"
      },
      {
        id: "budin-arandanos",
        nombre: {
          es: "Budín de Arándanos",
          en: "Blueberry pudding",
          fr: "Pouding aux myrtilles"
        },
        precio: 12.00,
        imagen: "budin_arandanos.jpg"
      },
      {
        id: "torta-chocolate",
        nombre: {
          es: "Torta de Chocolate",
          en: "Chocolate cake",
          fr: "Gâteau au chocolat"
        },
        precio: 12.00,
        imagen: "torta_chocolate.jpg"
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
              <h3 class="font-bold text-stone-900 text-xs line-clamp-2 leading-tight" title="${plato.nombre[idioma]}">${plato.nombre[idioma]}</h3>
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