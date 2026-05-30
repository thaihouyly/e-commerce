
  function setThumb(idx, el) {
    document.querySelectorAll('.thumb').forEach((t,i) => {
      t.classList.toggle('active', i === idx);
    });
    document.querySelectorAll('.img-dot').forEach((d,i) => {
      d.classList.toggle('active', i === idx);
    });
  }

  function selectColor(el, name) {
    document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('colorName').textContent = name;
  }

  function selectSize(el, name) {
    document.querySelectorAll('.size-btn:not(.unavailable)').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('sizeName').textContent = name;
  }

  function adjQty(n) {
    const inp = document.getElementById('qtyVal');
    let v = parseInt(inp.value) + n;
    inp.value = Math.max(1, Math.min(10, v));
  }

  function toggleWish(btn) {
    btn.classList.toggle('active');
    showToast(btn.classList.contains('active') ? 'Added to wishlist ♥' : 'Removed from wishlist');
  }

  function addToCart() {
    const size = document.getElementById('sizeName').textContent;
    const color = document.getElementById('colorName').textContent;
    showToast(`Added to cart — ${color}, Size ${size}`);
    const btn = document.querySelector('.cart-count');
    btn.style.transform = 'scale(1.3)';
    setTimeout(() => btn.style.transform = '', 300);
  }

  function switchTab(btn) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  }

  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2800);
  }