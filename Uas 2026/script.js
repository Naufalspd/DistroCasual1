/* ===== KERANJANG ===== */
let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

function tambahKeranjang(nama, harga) {
  keranjang.push({ nama, harga });
  simpanKeranjang();
  tampilKeranjang();
}

function hapusItem(index) {
  keranjang.splice(index, 1);
  simpanKeranjang();
  tampilKeranjang();
}

function simpanKeranjang() {
  localStorage.setItem("keranjang", JSON.stringify(keranjang));
}

function tampilKeranjang() {
  let el = document.getElementById("keranjang");
  if (!el) return;

  let html = "";
  let total = 0;

  keranjang.forEach((item, i) => {
    total += item.harga;
    html += `
      <p>
        ${item.nama} - Rp${item.harga}
        <button onclick="hapusItem(${i})">❌</button>
      </p>
    `;
  });

  html += `<h3>Total: Rp${total}</h3>`;
  el.innerHTML = html;
}

function checkoutWA() {
  if (keranjang.length === 0) {
    alert("Keranjang masih kosong!");
    return;
  }

  let pesan = "Halo, saya ingin memesan:%0A";
  let total = 0;

  keranjang.forEach(item => {
    pesan += `- ${item.nama} Rp${item.harga}%0A`;
    total += item.harga;
  });

  pesan += `%0ATotal: Rp${total}`;
  window.open(`https://wa.me/6281234567890?text=${pesan}`);
}

/* ===== KONTAK ===== */
function kirimPesan(event) {
  event.preventDefault();

  let status = document.getElementById("status");
  status.style.color = "green";
  status.innerText = "✅ Pesan berhasil dikirim. Terima kasih!";

  event.target.reset();
}

tampilKeranjang();

function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("active");
}
