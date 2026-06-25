// ==========================================
// ESTADO GLOBAL DEL CARRITO (Memoria Dinámica)
// ==========================================
let cart = [];
let modalidad = "Comer en el Local"; // Se mantiene en español para la cocina nativa
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
    floatingItems: (count) => `${count} plato${count !== 1 ? 's' : ''}`,
    alertEmpty: "Por favor, agrega al menos un plato a tu carrito para procesar el pedido.",
    alertNameEmpty: "Por favor, ingresa tu nombre y apellido para continuar con el pedido.",
    alertNameInvalid: "El nombre no es válido. Solo se permiten letras (sin números, símbolos ni caracteres especiales).",
// Textos del mensaje de WhatsApp (Llegan al cajero en Perú)
    wsHeader: "¡Hola, Mikuna Wassi! 🍲 (Pedido de cliente Español / ES)\nAcabo de armar mi pedido desde la web:\n\n",
    wsClient: "Mi nombre es:", 
    wsTotal: "Total estimado",
    wsModalidad: "Modalidad",
    wsFooter: "\n\nMuchas gracias. ¡Espero mi confirmación! 👋"
  },
  fr: {
    emptyCart: "Aucun plat sélectionné pour le moment.",
    each: "chacun",
    floatingItems: (count) => `${count} plat${count !== 1 ? 's' : ''}`,
    alertEmpty: "Veuillez sélectionner au moins un plat.",
    alertNameEmpty: "Veuillez entrer votre nom et prénom para continuer.",
    alertNameInvalid: "Nom invalide. Seules les lettres et les espaces sont autorisés (pas de chiffres ou de symboles).",
// Textos del mensaje de WhatsApp (Llegan al cajero en Perú)
    wsHeader: "¡Hola, Mikuna Wassi! 🍲 (Pedido de cliente Francés / FR)\nAcabo de armar mi pedido desde la web:\n\n",
    wsClient: "Mi nombre es: ", 
    wsTotal: "Total estimado",
    wsModalidad: "Modalidad",
    wsFooter: "\n\nMerci beaucoup ! J'attends votre confirmation. 👋"
  },
  en: {
    emptyCart: "No items selected yet.",
    each: "each",
    floatingItems: (count) => `${count} dish${count !== 1 ? 'es' : ''}`,
    alertEmpty: "Please add at least one dish to your cart before checking out.",
    alertNameEmpty: "Please enter your first and last name to proceed with your order.",
    alertNameInvalid: "Invalid name. Only letters and spaces are allowed (no numbers or special characters).",
// Textos del mensaje de WhatsApp (Llegan al cajero en Perú)
    wsHeader: "¡Hola, Mikuna Wassi! 🍲 (Pedido de cliente Inglés / EN)\nAcabo de armar mi pedido desde la web:\n\n",
    wsClient: "Mi nombre es:", 
    wsTotal: "Total estimado",
    wsModalidad: "Modalidad",
    wsFooter: "\n\nThank you! Looking forward to your confirmation. 👋"
  }
};

// Asignar el diccionario activo
const t = translations[lang] || translations.es;

// ==========================================
// LÓGICA DEL CARRITO
// ==========================================

// Añadir producto o incrementar cantidad
function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  renderCart();
}

// Cambiar cantidades (+ / -)
function changeQuantity(name, delta) {
  const item = cart.find(item => item.name === name);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.name !== name);
    }
  }
  renderCart();
}

// Cambiar la modalidad del servicio (Mesa / Llevar)
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

// Renderizar e inyectar HTML del carrito en tiempo real
function renderCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartCount = document.getElementById('cart-count');
  const floatingBar = document.getElementById('floating-bar');
  const floatingCount = document.getElementById('floating-count');

  if (!cartItemsContainer || !cartTotal || !cartCount || !floatingBar || !floatingCount) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<p class="text-stone-400 text-center py-4">${t.emptyCart}</p>`;
    cartTotal.innerText = "S/. 0.00";
    cartCount.innerText = "0";
    
    // Esconder barra flotante móvil
    floatingBar.classList.add('translate-y-24', 'opacity-0');
    return;
  }

  let html = "";
  let total = 0;
  let totalItems = 0;

  // 🔄 1. PROCESAMIENTO DE DATOS (Bucle puro)
  cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    totalItems += item.quantity;

    // Si no es español, extrae el nombre limpio dentro de los paréntesis para el cliente
    const displayName = lang === "es" 
      ? item.name 
      : (item.name.includes('(') ? item.name.split('(')[1].replace(')', '') : item.name);

    html += `
      <div class="flex items-center justify-between py-2">
        <div class="flex-1 pr-2">
          <p class="font-semibold text-amber-200">${displayName.trim()}</p>
          <p class="text-[10px] text-stone-400">S/. ${item.price.toFixed(2)} ${t.each}</p>
        </div>
        <div class="flex items-center gap-3">
          <div class="flex items-center bg-amber-900 rounded-lg overflow-hidden border border-amber-800">
            <button onclick="changeQuantity('${item.name}', -1)" class="px-2 py-1 hover:bg-amber-800 text-amber-300 font-bold">-</button>
            <span class="px-2 text-xs font-bold">${item.quantity}</span>
            <button onclick="changeQuantity('${item.name}', 1)" class="px-2 py-1 hover:bg-amber-800 text-amber-300 font-bold">+</button>
          </div>
          <span class="font-bold text-amber-400 min-w-[55px] text-right">S/. ${subtotal.toFixed(2)}</span>
        </div>
      </div>
    `;
  }); // 👈 ¡CLAVE! El bucle termina aquí. Ya procesamos todo el array.

  // 🏢 2. ACTUALIZACIÓN ÚNICA DEL DOM (Fuera del bucle)
  cartItemsContainer.innerHTML = html;
  cartTotal.innerText = `S/. ${total.toFixed(2)}`;
  cartCount.innerText = totalItems;
  
  floatingCount.innerText = t.floatingItems(totalItems);
  
  // 🧭 3. CONTROL DE VISIBILIDAD DE LA BARRA FLOTANTE
  if (isCartSectionVisible) {
    // Si el carrito ya se ve en la página, escondemos la barra flotante
    floatingBar.classList.add('translate-y-24', 'opacity-0');
  } else {
    // Si el carrito está oculto en el scroll, mostramos la barra flotante
    floatingBar.classList.remove('translate-y-24', 'opacity-0');
  }
}

// Compilar orden y redireccionar nativamente a la API de WhatsApp
function sendOrderToWhatsApp() {
  // 1. Validación de carrito vacío
  if (cart.length === 0) {
    alert(t.alertEmpty);
    return;
  }

  // 👤 CAPTURA Y VALIDACIÓN ANTE CUALQUIER ERROR DEL NOMBRE
  const nameInput = document.getElementById('client-name');
  const clientName = nameInput ? nameInput.value.trim() : "";

  // Error A: Si el campo está vacío o el usuario metió puros espacios en blanco
  if (clientName === "") {
    alert(t.alertNameEmpty);
    if (nameInput) nameInput.focus(); // Enfoca la cajita automáticamente
    return;
  }

  // Error B: Filtro contra números, símbolos, emojis o caracteres extraños. 
  // Solo permite letras de la A a la Z (mayúsculas/minúsculas), eñes, tildes y espacios intermedios.
  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
  if (!nameRegex.test(clientName)) {
    alert(t.alertNameInvalid);
    if (nameInput) nameInput.focus(); // Regresa el cursor para que corrija
    return;
  }

  // Si todo está bien, construimos el mensaje
  let totalSum = 0;
  let textoMensaje = t.wsHeader;

  // Insertar el nombre validado justo al inicio del reporte
  textoMensaje += `*${t.wsClient}:* ${clientName}\n\n`;

  cart.forEach(item => {
    const sub = item.price * item.quantity;
    totalSum += sub;
    // Envía el item.name original (en español) para control de la cocina
    textoMensaje += `• ${item.quantity}x ${item.name} (S/. ${sub.toFixed(2)})\n`;
  });

  textoMensaje += `\n*${t.wsTotal}:* S/. ${totalSum.toFixed(2)}`;
  textoMensaje += `\n*${t.wsModalidad}:* ${modalidad}`;
  textoMensaje += t.wsFooter;

  const whatsappNumber = "51956459905";
  const urlFinal = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textoMensaje)}`;

  // Redirección nativa
  window.location.href = urlFinal;
}

// =========================================================================
// SAKURA & MIKUNA WASSI - ARQUITECTURA DE NAVEGACIÓN HÍBRIDA (SCROLL + TABS)
// =========================================================================

/**
 * 1. SENSORES DE SCROLL INTELIGENTES (IntersectionObserver)
 * Controla automáticamente el cambio de Navs y la visibilidad de la barra flotante.
 */
document.addEventListener("DOMContentLoaded", () => {
  const secTradicional = document.getElementById('seccion-tradicional');
  const secVegetariano = document.getElementById('seccion-vegetariano');
  const navTradicional = document.getElementById('nav-tradicional');
  const navVegetariano = document.getElementById('nav-vegetariano');
  const tabTradicional = document.getElementById('tab-tradicional');
  const tabVegetariano = document.getElementById('tab-vegetariano');

  // Elementos del carrito para el control de la barra flotante
  const carritoSeccion = document.getElementById('carrito-seccion');
  const floatingBar = document.getElementById('floating-bar');

  // --- SENSOR A: CONTROL DE SECCIONES DEL MENÚ ---
  if (secTradicional && secVegetariano && navTradicional && navVegetariano) {
    const opcionesSensor = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", 
      threshold: 0
    };

    const oserbadorCallBack = (entries) => {
      entries.forEach(entry => {
        if (entry.target.id === 'seccion-vegetariano' && entry.isIntersecting) {
          navTradicional.classList.add('hidden');
          navVegetariano.classList.remove('hidden');

          if (tabVegetariano && tabTradicional) {
            tabVegetariano.classList.add('bg-amber-500', 'text-andean-950', 'shadow');
            tabVegetariano.classList.remove('text-amber-200/70', 'hover:text-white');
            tabTradicional.classList.remove('bg-amber-500', 'text-andean-950', 'shadow');
            tabTradicional.classList.add('text-amber-200/70', 'hover:text-white');
          }
        } 
        else if (entry.target.id === 'seccion-tradicional' && entry.isIntersecting) {
          navVegetariano.classList.add('hidden');
          navTradicional.classList.remove('hidden');

          if (tabTradicional && tabVegetariano) {
            tabTradicional.classList.add('bg-amber-500', 'text-andean-950', 'shadow');
            tabTradicional.classList.remove('text-amber-200/70', 'hover:text-white');
            tabVegetariano.classList.remove('bg-amber-500', 'text-andean-950', 'shadow');
            tabVegetariano.classList.add('text-amber-200/70', 'hover:text-white');
          }
        }
      });
    };

    const sensor = new IntersectionObserver(oserbadorCallBack, opcionesSensor);
    sensor.observe(secTradicional);
    sensor.observe(secVegetariano);
  }

  // --- SENSOR B: DETECTOR DE PRESENCIA DEL CARRITO PRINCIPAL (El que faltaba) ---
  if (carritoSeccion && floatingBar) {
    const cartObserverOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.05 // Se activa en cuanto asoma un 5% de la sección en pantalla
    };

    const cartObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Actualiza dinámicamente la variable global según el scroll del usuario
        isCartSectionVisible = entry.isIntersecting;

        // Si el usuario tiene productos agregados, reacciona al scroll de inmediato
        if (cart.length > 0) {
          if (isCartSectionVisible) {
            floatingBar.classList.add('translate-y-24', 'opacity-0');
          } else {
            floatingBar.classList.remove('translate-y-24', 'opacity-0');
          }
        }
      });
    }, cartObserverOptions);

    // Activamos la vigilancia sobre el contenedor del carrito
    cartObserver.observe(carritoSeccion);
  }
});