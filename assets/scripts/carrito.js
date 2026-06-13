// ==========================================
// ESTADO GLOBAL DEL CARRITO (Memoria Dinámica)
// ==========================================
let cart = [];
let modalidad = "Comer en el Local"; // Se mantiene en español para la cocina nativa

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
    wsHeader: "¡Hola, Mikuna Wassi! 🍲\nAcabo de armar mi pedido desde el menú digital:\n\n",
    wsTotal: "Total estimado",
    wsModalidad: "Modalidad",
    wsFooter: "\n\nMuchas gracias. ¡Espero mi confirmación! 👋"
  },
  fr: {
    emptyCart: "Aucun plat sélectionné pour le moment.",
    each: "chacun",
    floatingItems: (count) => `${count} plat${count !== 1 ? 's' : ''}`,
    alertEmpty: "Veuillez sélectionner au moins un plat.",
    wsHeader: "¡Hola, Mikuna Wassi! 🍲 (Pedido del extranjero/FR)\nAcabo de armar mi pedido desde la web:\n\n",
    wsTotal: "Total estimado",
    wsModalidad: "Modalidad",
    wsFooter: "\n\nMerci beaucoup ! J'attends votre confirmation. 👋"
  },
  en: {
    emptyCart: "No items selected yet.",
    each: "each",
    floatingItems: (count) => `${count} dish${count !== 1 ? 'es' : ''}`,
    alertEmpty: "Please add at least one dish to your cart before checking out.",
    wsHeader: "¡Hola, Mikuna Wassi! 🍲 (Pedido en Inglés / EN)\nUn cliente ha enviado su pedido:\n\n",
    wsTotal: "Total estimado",
    wsModalidad: "Modalidad / Service",
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
  });

  cartItemsContainer.innerHTML = html;
  cartTotal.innerText = `S/. ${total.toFixed(2)}`;
  cartCount.innerText = totalItems;

  // Mostrar barra flotante informativa adaptada al idioma
  floatingCount.innerText = t.floatingItems(totalItems);
  floatingBar.classList.remove('translate-y-24', 'opacity-0');
}

// Compilar orden y redireccionar nativamente a la API de WhatsApp
function sendOrderToWhatsApp() {
  if (cart.length === 0) {
    alert(t.alertEmpty);
    return;
  }

  let totalSum = 0;
  let textoMensaje = t.wsHeader;

  cart.forEach(item => {
    const sub = item.price * item.quantity;
    totalSum += sub;
    // Envía el item.name original (que tiene el nombre en español completo) para la cocina
    textoMensaje += `• ${item.quantity}x ${item.name} (S/. ${sub.toFixed(2)})\n`;
  });

  textoMensaje += `\n*${t.wsTotal}:* S/. ${totalSum.toFixed(2)}`;
  textoMensaje += `\n*${t.wsModalidad}:* [${modalidad}]`;
  textoMensaje += t.wsFooter;

  const whatsappNumber = "51956459905";
  const urlFinal = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textoMensaje)}`;

  // Redirección nativa
  window.location.href = urlFinal;
}