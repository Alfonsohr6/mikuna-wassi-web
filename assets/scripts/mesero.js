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
        precio: 12.00,
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
  },
  desayunos_fruta_cereales: {
    categoria_id: "contenedor-desayunos-fruta-cereales",
    diseno: "normal",
    platos: [
      {
        id: "copa-yogurt-frutas-valle",
        nombre: {
          es: "Copa de yogurt con frutas del valle y cereal",
          en: "Yogurt cup with valley fruits and cereal",
          fr: "Coupe de yaourt aux fruits de la vallée et aux céréales"
        },
        descripcion: {
          es: "Copa de yogurt natural acompañada de una selección de frutas frescas del valle y cereal crujiente.",
          en: "Natural yogurt cup accompanied by a selection of fresh valley fruits and crunchy cereal.",
          fr: "Coupe de yaourt nature accompagnée d'une sélection de fruits frais de la vallée et de céréales croquantes."
        },
        precio: 15.00,
        imagen: "copa_yogurt_frutas_valle.jpg"
      },
      {
        id: "tazon-avena-yogurt-griego",
        nombre: {
          es: "Tazón de Avena con yogurt griego y miel",
          en: "Oatmeal bowl with Greek yogurt and honey",
          fr: "Bol de flocons d'avoine au yaourt grec et au miel"
        },
        descripcion: {
          es: "Nutritivo tazón de avena caliente o fría combinado con cremoso yogurt griego y un toque de miel natural.",
          en: "Nutritive bowl of oatmeal combined with creamy Greek yogurt and a touch of natural honey.",
          fr: "Bol nutritif de flocons d'avoine combiné avec du yaourt grec crémeux et une touche de miel naturel."
        },
        precio: 22.00,
        imagen: "tazon_avena_yogurt_griego.jpg"
      },
      {
        id: "mix-frutas-temporada-granola",
        nombre: {
          es: "Mix de frutas de temporada con miel y granola",
          en: "Seasonal fruit mix with honey and granola",
          fr: "Mélange de fruits de saison avec du miel et du granola"
        },
        descripcion: {
          es: "Surtido de frutas frescas de temporada endulzado con miel de la casa y acompañado de granola crujiente.",
          en: "Assortment of fresh seasonal fruits sweetened with house honey and accompanied by crunchy granola.",
          fr: "Assortiment de fruits frais de saison adouci avec du miel de la maison et accompagné de granola croquant."
        },
        precio: 18.00,
        imagen: "mix_frutas_temporada_granola.jpg"
      }
    ]
  },

  desayunos_sandwiches: {
    categoria_id: "contenedor-desayunos-sandwiches",
    diseno: "mini",
    platos: [
      {
        id: "pollo-parrillero",
        nombre: {
          es: "Pollo parrillero",
          en: "Grilled chicken sandwich",
          fr: "Sandwich au poulet grillé"
        },
        precio: 22.00,
        imagen: "pollo_parrillero.jpg"
      },
      {
        id: "lomo-fino-res-parrillero",
        nombre: {
          es: "Lomo fino de res parrillero",
          en: "Grilled beef tenderloin sandwich",
          fr: "Sandwich de filet de bœuf grillé"
        },
        precio: 22.00,
        imagen: "lomo_fino_res_parrillero.jpg"
      },
      {
        id: "lomo-saltado-alpaca-desayuno",
        nombre: {
          es: "Lomo saltado de alpaca",
          en: "Sautéed alpaca loin sandwich",
          fr: "Sandwich de lomo saltado d'alpaga"
        },
        precio: 22.00,
        imagen: "lomo_saltado_alpaca_desayuno.jpg"
      },
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
      }
    ]
  },
  platos_mananeros: {
    categoria_id: "contenedor-platos-mananeros",
    diseno: "normal",
    platos: [
      {
        id: "pan-campesino-huevos",
        nombre: {
          es: "Pan campesino con huevos",
          en: "Country bread with eggs",
          fr: "Pain paysan aux œufs"
        },
        descripcion: {
          es: "Huevos al gusto sobre mitad de pan tostado con queso local, tomate, finas hierbas, aceituna y aceite de oliva.",
          en: "Eggs to taste on half toasted bread with local cheese, tomato, fine herbs, olive, and olive oil.",
          fr: "Œufs au choix sur moitié de pain grillé avec fromage local, tomate, fines herbes, olive et huile d'olive."
        },
        precio: 20.00,
        imagen: "pan_campesino.jpg"
      },
      {
        id: "tamales-pollo-salsa-criolla",
        nombre: {
          es: "Tamales de maíz con pollo",
          en: "Chicken corn tamales",
          fr: "Tamales de maïs au poulet"
        },
        descripcion: {
          es: "Tradicionales tamales de maíz rellenos de pollo tierno y acompañados de fresca salsa criolla.",
          en: "Traditional corn tamales stuffed with tender chicken and accompanied by fresh criolla sauce.",
          fr: "Tamales de maïs traditionnels farcis de poulet tendre et accompagnés de sauce criolla fraîche."
        },
        precio: 15.00,
        imagen: "tamales_pollo.jpg"
      }
    ]
  },
  desayunos_empanadas: {
    categoria_id: "contenedor-desayunos-empanadas",
    diseno: "mini",
    platos: [
      {
        id: "empanada-pollo",
        nombre: {
          es: "Empanada de Pollo",
          en: "Chicken Empanada",
          fr: "Empanada au poulet"
        },
        precio: 9.00,
        imagen: "empanada_pollo.jpg"
      },
      {
        id: "empanada-alpaca",
        nombre: {
          es: "Empanada de Alpaca",
          en: "Alpaca Empanada",
          fr: "Empanada à l'alpaga"
        },
        precio: 9.00,
        imagen: "empanada_alpaca.jpg"
      },
      {
        id: "empanada-queso",
        nombre: {
          es: "Empanada de Queso",
          en: "Cheese Empanada",
          fr: "Empanada au fromage"
        },
        precio: 9.00,
        imagen: "empanada_queso.jpg"
      },
      {
        id: "empanada-vegetariana",
        nombre: {
          es: "Empanada Vegetariana",
          en: "Vegetarian Empanada",
          fr: "Empanada végétarienne"
        },
        precio: 9.00,
        imagen: "empanada_vegetariana.jpg"
      }
    ]
  },
  desayunos_bebidas: {
    categoria_id: "contenedor-desayunos-bebidas",
    diseno: "mini",
    platos: [
      {
        id: "jugos",
        nombre: {
          es: "Jugos",
          en: "Juices",
          fr: "Jus"
        },
        precio: 10.00,
        imagen: "jugos.jpg"
      },
      {
        id: "jugos-con-leche",
        nombre: {
          es: "Jugos con Leche",
          en: "Juices with Milk",
          fr: "Jus au lait"
        },
        precio: 12.00,
        imagen: "jugos_con_leche.jpg"
      },
      {
        id: "quinua-saltadita",
        nombre: {
          es: "Quinua Saltadita",
          en: "Quinoa drink",
          fr: "Boisson de quinoa"
        },
        precio: 14.00,
        imagen: "quinua_saltadita.jpg"
      },
      {
        id: "cafe-americano",
        nombre: {
          es: "Café Americano",
          en: "American Coffee",
          fr: "Café Américain"
        },
        precio: 7.00,
        imagen: "cafe_americano.jpg"
      },
      {
        id: "cafe-expreso",
        nombre: {
          es: "Café Expreso",
          en: "Espresso",
          fr: "Café Expresso"
        },
        precio: 12.00,
        imagen: "cafe_expreso.jpg"
      },
      {
        id: "cafe-con-leche",
        nombre: {
          es: "Café con Leche",
          en: "Coffee with Milk",
          fr: "Café au lait"
        },
        precio: 12.00,
        imagen: "cafe_con_leche.jpg"
      },
      {
        id: "chocolate-caliente",
        nombre: {
          es: "Chocolate Caliente",
          en: "Hot Chocolate",
          fr: "Chocolat Chaud"
        },
        precio: 14.00,
        imagen: "chocolate_caliente.jpg"
      },
      {
        id: "infusion",
        nombre: {
          es: "Infusión",
          en: "Herbal Tea",
          fr: "Infusion"
        },
        precio: 5.00,
        imagen: "infusion.jpg"
      }
    ]
  }
};

// ==========================================
// ESTADO GLOBAL DEL CARRITO (Memoria Dinámica)
// ==========================================
let cart = [];
let modalidad = "Comer en el Local"; 
let isCartSectionVisible = false;

// Detectar el idioma automáticamente desde el tag <html lang="...">
const lang = document.documentElement.lang || "es";

// ==========================================
// DICCIONARIO DE TEXTOS MULTILINGÜE
// ==========================================
const translations = {
  es: {
    emptyCart: "No has seleccionado ningún plato aún.",
    each: "c/u",
    alertEmpty: "Por favor, agrega al menos un plato a tu carrito para procesar el pedido.",
    alertNameEmpty: "Por favor, ingresa tu nombre y apellido para continuar con el pedido.",
    alertNameInvalid: "El nombre no es válido. Solo se permiten letras (nos números, símbolos ni caracteres especiales).",
    wsHeader: "¡Hola, Mikuna Wassi! 🍲 (Pedido de cliente Español / ES)\nAcabo de armar mi pedido desde la web:\n\n",
    wsClient: "Mi nombre es:", 
    wsTotal: "Total estimado",
    wsModalidad: "Modalidad",
    wsFooter: "\n\nMuchas gracias. ¡Espero mi confirmación! 👋"
  },
  en: {
    emptyCart: "You haven't selected any dishes yet.",
    each: "each",
    alertEmpty: "Please add at least one dish to your cart to process the order.",
    alertNameEmpty: "Please enter your first and last name to continue with the order.",
    alertNameInvalid: "The name is not valid. Only letters are allowed.",
    wsHeader: "¡Hola, Mikuna Wassi! 🍲 (Pedido de cliente Inglés / EN)\nAcabo de armar mi pedido desde la web:\n\n",
    wsClient: "Mi nombre es:", 
    wsTotal: "Total estimado",
    wsModalidad: "Modalidad",
    wsFooter: "\n\nMuchas gracias. ¡Espero mi confirmación! 👋"
  },
  fr: {
    emptyCart: "Vous n'avez pas encore sélectionné de plats.",
    each: "ch.",
    alertEmpty: "Veuillez ajouter au moins un plat à votre panier pour traiter la commande.",
    alertNameEmpty: "Veuillez entrer votre nom et prénom pour continuer la commande.",
    alertNameInvalid: "Le nom n'est pas valide. Seules les lettres sont autorisées.",
    wsHeader: "¡Hola, Mikuna Wassi! 🍲 (Pedido de cliente Francés / FR)\nAcabo de armar mi pedido desde la web:\n\n",
    wsClient: "Mi nombre es:", 
    wsTotal: "Total estimado",
    wsModalidad: "Modalidad",
    wsFooter: "\n\nMuchas gracias. ¡Espero mi confirmación! 👋"
  }
};

const t = translations[lang] || translations.es;

// ==========================================
// 🔍 FUNCIÓN TRADUCTORA: OBTENER NOMBRE EN ESPAÑOL
// ==========================================
function obtenerNombreEnEspanol(id) {
  for (const categoria in MENU_DATA) {
    const platoEncontrado = MENU_DATA[categoria].platos.find(p => p.id === id);
    if (platoEncontrado) {
      return platoEncontrado.nombre.es;
    }
  }
  return null;
}

// ==========================================
// 🎨 RENDERIZADO DEL MENÚ DINÁMICO
// ==========================================
function renderizarMenu(idioma) {
  for (const categoria in MENU_DATA) {
    const infoCat = MENU_DATA[categoria];
    const contenedor = document.getElementById(infoCat.categoria_id);
    
    if (!contenedor) continue;
    
    contenedor.innerHTML = "";
    
    if (infoCat.diseno === "mini") {
      infoCat.platos.forEach(plato => {
        const miniTarjetaHTML = `
          <div class="bg-white p-2 rounded-xl shadow-sm border border-andean-100 flex gap-2">
            <img src="assets/images/dishes/${plato.imagen}" alt="${plato.nombre[idioma]}" class="w-12 h-12 object-cover rounded-lg bg-stone-100 flex-shrink-0" onerror="this.src='https://placehold.co/100?text=${plato.id}'">
            <div class="flex-1 flex flex-col justify-between min-w-0">
              <h3 class="font-bold text-stone-900 text-xs line-clamp-2 leading-tight" title="${plato.nombre[idioma]}">${plato.nombre[idioma]}</h3>
              <div class="flex justify-between items-center mt-1">
                <span class="text-amber-950 text-[11px] font-bold">S/. ${plato.precio.toFixed(2)}</span>
                <button onclick="addToCart('${plato.id}', '${plato.nombre[idioma].replace(/'/g, "\\'")}', ${plato.precio})" class="bg-stone-900 text-white text-[11px] px-2 py-0.5 rounded active:scale-95 transition-transform">
                  +
                </button>
              </div>
            </div>
          </div>
        `;
        contenedor.innerHTML += miniTarjetaHTML;
      });
    } else {
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
                <button onclick="addToCart('${plato.id}', '${plato.nombre[idioma].replace(/'/g, "\\'")}', ${plato.precio})" class="bg-amber-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg active:scale-95 transition-transform">
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

// ==========================================
// 🛒 LÓGICA DEL CARRITO
// ==========================================
function addToCart(id, name, price) {
  const existingItem = cart.find(item => item.id === id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }
  renderCart();
}

function changeQuantity(id, delta) {
  const item = cart.find(item => item.id === id);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.id !== id);
    }
  }
  renderCart();
}

function setModalidad(nuevaModalidad) {
  modalidad = nuevaModalidad;
  const btnMesa = document.getElementById('btn-mesa');
  const btnLlevar = document.getElementById('btn-llevar');

  if (!btnMesa || !btnLlevar) return;

  if (modalidad === "Comer en el Local") {
    btnMesa.className = "py-1.5 text-xs font-semibold rounded-md transition bg-amber-500 text-andean-950 shadow-sm";
    btnLlevar.className = "py-1.5 text-xs font-semibold rounded-md transition text-amber-200 hover:text-white";
  } else {
    btnLlevar.className = "py-1.5 text-xs font-semibold rounded-md transition bg-amber-500 text-andean-950 shadow-sm";
    btnMesa.className = "py-1.5 text-xs font-semibold rounded-md transition text-amber-200 hover:text-white";
  }
}

function renderCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartCount = document.getElementById('cart-count');
  const headerCartCount = document.getElementById('header-cart-count');

  if (!cartItemsContainer || !cartTotal || !cartCount) return;

  let totalItems = 0;
  cart.forEach(item => { totalItems += item.quantity; });

  if (headerCartCount) {
    headerCartCount.innerText = totalItems;
  }

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<p class="text-stone-400 text-center py-4">${t.emptyCart}</p>`;
    cartTotal.innerText = "S/. 0.00";
    cartCount.innerText = "0";
    return;
  }

  let html = "";
  let total = 0;

  cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;

    html += `
      <div class="flex items-center justify-between py-2 border-b border-amber-950/30 last:border-0">
        <div class="flex-1 pr-2">
          <p class="font-semibold text-amber-200 text-xs">${item.name.trim()}</p>
          <p class="text-[10px] text-stone-400">S/. ${item.price.toFixed(2)} ${t.each}</p>
        </div>
        <div class="flex items-center gap-3">
          <div class="flex items-center bg-amber-900 rounded-lg overflow-hidden border border-amber-800">
            <button onclick="changeQuantity('${item.id}', -1)" class="px-2 py-1 hover:bg-amber-800 text-amber-300 font-bold text-xs">-</button>
            <span class="px-2 text-xs font-bold text-white">${item.quantity}</span>
            <button onclick="changeQuantity('${item.id}', 1)" class="px-2 py-1 hover:bg-amber-800 text-amber-300 font-bold text-xs">+</button>
          </div>
          <span class="font-bold text-amber-400 text-xs min-w-[55px] text-right">S/. ${subtotal.toFixed(2)}</span>
        </div>
      </div>
    `;
  });

  cartItemsContainer.innerHTML = html;
  cartTotal.innerText = `S/. ${total.toFixed(2)}`;
  cartCount.innerText = totalItems;
}

// 🔔 FUNCIÓN DE ALERTA O MENSAJE EN PANTALLA
function showCustomAlert(mensaje) {
  alert(mensaje);
}

// 🚀 FUNCIÓN DE ENVÍO A WHATSAPP
function sendOrderToWhatsApp() {
  if (cart.length === 0) {
    showCustomAlert(t.alertEmpty); 
    return;
  }

  const nameInput = document.getElementById('client-name');
  const nombreCliente = nameInput ? nameInput.value.trim() : "";

  if (!nombreCliente) {
    showCustomAlert(t.alertNameEmpty); 
    if (nameInput) nameInput.focus();
    return;
  }

  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
  if (!nameRegex.test(nombreCliente)) {
    showCustomAlert(t.alertNameInvalid); 
    if (nameInput) nameInput.focus();
    return;
  }

  let textoMensaje = t.wsHeader;
  textoMensaje += `👤 *${t.wsClient}* ${nombreCliente}\n\n`;
  textoMensaje += `📋 *DETALLE DEL PEDIDO:*\n`;

  let total = 0;
  cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    const nombreCocina = obtenerNombreEnEspanol(item.id) || item.name;
    textoMensaje += `• ${item.quantity}x ${nombreCocina} (S/. ${item.price.toFixed(2)} c/u) -> S/. ${subtotal.toFixed(2)}\n`;
  });

  textoMensaje += `\n💰 *${t.wsTotal}:* S/. ${total.toFixed(2)}`;
  textoMensaje += `\n🛵 *${t.wsModalidad}:* ${modalidad}`;
  textoMensaje += t.wsFooter;

  const whatsappNumber = "51956459905";
  const urlUrlEncoded = encodeURIComponent(textoMensaje);
  
  window.open(`https://wa.me/${whatsappNumber}?text=${urlUrlEncoded}`, "_blank");
}

// ==========================================
// ⚡ CONTROL DE NAVEGACIÓN Y VISTAS
// ==========================================
function cambiarVista(vista) {
  const secTradicional = document.getElementById('seccion-tradicional');
  const secVegetariano = document.getElementById('seccion-vegetariano');
  const secDesayunos = document.getElementById('seccion-desayunos');
  const secCompartidas = document.getElementById('secciones-compartidas');
  const carritoSeccion = document.getElementById('seccion-carrito');

  const tabTradicional = document.getElementById('tab-tradicional');
  const tabVegetariano = document.getElementById('tab-vegetariano');
  const tabDesayunos = document.getElementById('tab-desayunos');

  // Reset de pestañas superiores
  [tabTradicional, tabVegetariano, tabDesayunos].forEach(tab => {
    if (tab) {
      tab.className = "py-2 text-[11px] font-bold rounded-lg transition-all text-amber-200/70 hover:text-white text-center truncate px-1";
    }
  });

  // Ocultar absolutamente todo primero
  if (secTradicional) secTradicional.classList.add('hidden');
  if (secVegetariano) secVegetariano.classList.add('hidden');
  if (secDesayunos) secDesayunos.classList.add('hidden');
  if (secCompartidas) secCompartidas.classList.add('hidden');
  if (carritoSeccion) carritoSeccion.classList.add('hidden');

  // Mostrar la sección correspondiente según el parámetro recibido
  if (vista === 'tradicional' && secTradicional) {
    secTradicional.classList.remove('hidden');
    if (secCompartidas) secCompartidas.classList.remove('hidden');
    if (tabTradicional) tabTradicional.className = "py-2 text-[11px] font-bold rounded-lg transition-all bg-amber-500 text-andean-950 shadow text-center truncate px-1";
  } else if (vista === 'vegetariano' && secVegetariano) {
    secVegetariano.classList.remove('hidden');
    if (secCompartidas) secCompartidas.classList.remove('hidden');
    if (tabVegetariano) tabVegetariano.className = "py-2 text-[11px] font-bold rounded-lg transition-all bg-amber-500 text-andean-950 shadow text-center truncate px-1";
  } else if (vista === 'desayunos' && secDesayunos) {
    secDesayunos.classList.remove('hidden');
    if (secCompartidas) secCompartidas.classList.remove('hidden');
    if (tabDesayunos) tabDesayunos.className = "py-2 text-[11px] font-bold rounded-lg transition-all bg-amber-500 text-andean-950 shadow text-center truncate px-1";
  } else if (vista === 'carrito' && carritoSeccion) {
    // Espacio exclusivo para el carrito limpio de otras secciones
    carritoSeccion.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Inicialización automática al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  renderizarMenu(lang);
  renderCart();
});