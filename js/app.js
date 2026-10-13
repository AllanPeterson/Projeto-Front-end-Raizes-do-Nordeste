/* app.js — lógica compartilhada */

// ---- Carrinho ----
function getCart() {
  try { return JSON.parse(localStorage.getItem('rn_cart') || '[]'); }
  catch { return []; }
}

function saveCart(c) {
  localStorage.setItem('rn_cart', JSON.stringify(c));
  syncBadge();
}

function addItem(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const cart = getCart();
  const ex = cart.find(i => i.id === id);
  ex ? ex.qty++ : cart.push({ id: p.id, name: p.name, price: p.price, color: p.color, img: p.img || '', qty: 1 });
  saveCart(cart);
  toast(p.name + ' adicionado ao carrinho');
}

function setQty(id, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(0, item.qty + delta);
  const filtered = cart.filter(i => i.qty > 0);
  saveCart(filtered);
  return filtered;
}

function total()  { return getCart().reduce((s, i) => s + i.price * i.qty, 0); }
function pts()    { return Math.floor(total()); }
function clearCart() { localStorage.removeItem('rn_cart'); syncBadge(); }

function syncBadge() {
  const n = getCart().reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-dot').forEach(el => el.classList.toggle('visible', n > 0));
  document.querySelectorAll('.cart-count-text').forEach(el => { el.textContent = n > 0 ? `(${n})` : ''; });
}

// ---- Usuário ----
function getUser() {
  try { return JSON.parse(localStorage.getItem('rn_user') || JSON.stringify(currentUser)); }
  catch { return currentUser; }
}
function saveUser(u) { localStorage.setItem('rn_user', JSON.stringify(u)); }

function addPts(n) {
  const u = getUser();
  u.points = (u.points || 0) + n;
  saveUser(u);
}

// ---- Sessão ----
function loggedIn() { return localStorage.getItem('rn_logged') === 'true'; }

function login(name, email) {
  const u = getUser();
  u.name = name; u.email = email;
  saveUser(u);
  localStorage.setItem('rn_logged', 'true');
}

// ---- Utilidades ----
function fmtPrice(v) { return 'R$ ' + v.toFixed(2).replace('.', ','); }

function toast(msg) {
  let t = document.getElementById('_t');
  if (!t) {
    t = document.createElement('div');
    t.id = '_t';
    t.style.cssText = 'position:fixed;bottom:1.25rem;left:50%;transform:translateX(-50%);background:#1C1C1C;color:#fff;padding:0.6rem 1.1rem;border-radius:6px;font-size:0.82rem;font-weight:500;box-shadow:0 4px 12px rgba(0,0,0,.25);z-index:9999;transition:opacity .25s;pointer-events:none;white-space:nowrap';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1';
  clearTimeout(t._t);
  t._t = setTimeout(() => { t.style.opacity = '0'; }, 2500);
}

// ---- Header / Footer ----
function mkHeader(page) {
  const n = getCart().reduce((s, i) => s + i.qty, 0);
  const u = loggedIn() ? getUser() : null;
  return `
    <header>
      <div class="header-inner container">
        <a href="index.html" class="logo">Raízes <span>do Nordeste</span></a>
        <nav>
          <a href="menu.html"     class="${page==='menu'     ? 'active' : ''}">Cardápio</a>
          <a href="loyalty.html"  class="${page==='loyalty'  ? 'active' : ''}">Fidelidade</a>
          <a href="cart.html" class="nav-cart ${page==='cart' ? 'active' : ''}">
            Carrinho <span class="cart-count-text">${n > 0 ? '('+n+')' : ''}</span>
            <span class="cart-dot ${n > 0 ? 'visible' : ''}"></span>
          </a>
          ${u
            ? `<a href="login.html" class="${page==='login' ? 'active' : ''}" style="margin-left:.25rem">${u.name.split(' ')[0]}</a>`
            : `<a href="login.html" class="btn btn-sm btn-primary ${page==='login' ? 'active' : ''}" style="margin-left:.25rem">Entrar</a>`
          }
        </nav>
      </div>
    </header>`;
}

function mkFooter() {
  return `
    <footer>
      <div class="container">
        <p>© 2026 Raízes do Nordeste. Todos os direitos reservados.</p>
        <p class="footer-lgpd">Dados tratados conforme a LGPD (Lei nº 13.709/2018).
          <a href="login.html#lgpd" style="color:inherit;text-decoration:underline">Política de Privacidade</a>
        </p>
      </div>
    </footer>`;
}

document.addEventListener('DOMContentLoaded', syncBadge);
