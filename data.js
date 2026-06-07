// ============================================================
//  ฟ.เฟิน.ฟาร์ม — ไฟล์ตั้งค่าหลังบ้าน
//  แก้ไขไฟล์นี้ไฟล์เดียว เว็บอัปเดตทันที ไม่ต้องรู้ code
//  วิธีใช้รูป: ใส่ URL รูปตรงๆ จาก Google Drive / Facebook / Imgur
// ============================================================

// ─────────────────────────────────────────────
//  📞 ข้อมูลติดต่อ (แก้ครั้งเดียว ใช้ทั้งเว็บ)
// ─────────────────────────────────────────────
const CONTACT = {
  line_url:   "https://lin.ee/6Kl9jPM",       // link LINE OA
  line_id:    "@forfernfarm",
  facebook:   "https://www.facebook.com/ForFernFarm",
  tiktok:     "https://www.tiktok.com/@forfernfarm",
  phone:      "080-564-9544",
  email:      "forfernfarm@gmail.com",
  address:    "193 ม.1 ต.ถนนใหญ่ อ.เมือง จ.ลพบุรี",
  open_hours: "เปิดทุกวัน 08:00–17:00",
};

// ─────────────────────────────────────────────
//  🌿 สินค้า — เพิ่ม/แก้/ลบ ได้เลย
//  วิธีเพิ่มสินค้าใหม่: copy block { ... } แล้ว paste ต่อท้าย
//  วิธีใส่รูป: อัปรูปขึ้น Google Drive → Share → Copy link
//              แล้วเปลี่ยน ?usp=sharing → แค่นั้น
//  หรือถ่ายรูปส่ง Facebook → คลิกขวา "Copy image address" มาวางได้เลย
// ─────────────────────────────────────────────
const PRODUCTS = [
  {
    id: "small",
    size: "Size Small",
    name: "สไบนาง S",
    price: 500,
    free_shipping_note: "ส่งฟรี 2 ต้นขึ้นไป",
    tags: ["คอนโด", "โต๊ะทำงาน", "มุมเล็ก"],
    desc: "เหมาะสำหรับพื้นที่กะทัดรัด วางบนโต๊ะหรือชั้นวางได้สวยงาม เลี้ยงง่ายในร่ม",
    img: "https://forfernfarm.wordpress.com/wp-content/uploads/2026/04/5-1.png",
    featured: false,
  },
  {
    id: "standard",
    size: "Size Standard",
    name: "สไบนาง Standard",
    price: 1500,
    free_shipping_note: "ส่งฟรีทั่วไทย",
    tags: ["บ้าน", "ร้านอาหาร", "ชายคา"],
    desc: "ฟอร์มอลังการ พริ้วไหวสวยงาม เหมาะกับบ้าน ร้านอาหาร หรือแขวนตามชายคา",
    img: "https://forfernfarm.wordpress.com/wp-content/uploads/2026/04/3-1.png",
    featured: true,   // ← ตัวนี้จะแสดง "ยอดนิยม" และ highlight สีทอง
  },
  {
    id: "jumbo",
    size: "Size Jumbo",
    name: "สไบนาง Jumbo",
    price: 2000,
    free_shipping_note: "ส่งฟรีทั่วไทย",
    tags: ["คาเฟ่", "รีสอร์ท", "โรงแรม"],
    desc: "ไซส์พิเศษสำหรับพื้นที่ขนาดใหญ่ เป็น centerpiece ของร้านได้ทันที ลูกค้าแห่ถ่ายรูป",
    img: "https://forfernfarm.wordpress.com/wp-content/uploads/2026/04/2-1.png",
    featured: false,
  },

  // ── ตัวอย่าง: เพิ่มสินค้าใหม่ ──────────────────────────────
  // {
  //   id: "vanilla",
  //   size: "สวนวานิลลา",
  //   name: "วานิลลาดอกสด",
  //   price: 350,
  //   free_shipping_note: "ส่งฟรีเมื่อสั่งคู่กับเฟิร์น",
  //   tags: ["หอม", "หายาก", "ของขวัญ"],
  //   desc: "ดอกวานิลลาสดจากสวน กลิ่นหอมอ่อนๆ เหมาะทำของขวัญหรือวางตกแต่ง",
  //   img: "https://...",     ← วางลิงก์รูปที่นี่
  //   featured: false,
  // },
];

// ─────────────────────────────────────────────
//  📝 บทความ/บล็อก — เพิ่มได้ไม่จำกัด
//  บทความแรกในลิสต์ = featured (ใหญ่กว่า ซ้ายสุด)
//  วิธีเพิ่มบทความ:
//    1. เขียนบทความใน WordPress แล้ว Publish
//    2. copy URL บทความ
//    3. เพิ่ม block ใหม่ด้านล่างนี้
//  วิธีใส่รูป: ใช้รูป cover จาก WordPress ได้เลย
//    หน้า WordPress → Edit Post → คลิกรูป → คลิกขวา "Open image in new tab" → copy URL
// ─────────────────────────────────────────────
const BLOG_POSTS = [
  {
    title: "หา Sweet Spot ในบ้าน: แสงแดดแบบไหนที่เฟิร์นสไบนางรักที่สุด?",
    category: "การดูแล",
    excerpt: "ความลับเรื่องแสงที่จะเปลี่ยนเฟิร์นใบเหลืองแห้งให้กลับมาเขียวพริ้วไหวระดับพรีเมียม ทิศตะวันออกคือทำเลทอง...",
    date: "24 พฤษภาคม 2026",
    url: "https://forfernfarm.wordpress.com/2026/05/24/หา-sweet-spot/",
    img: "https://forfernfarm.wordpress.com/wp-content/uploads/2026/04/e0b980e0b89fe0b8b4e0b8a3e0b98ce0b899e0b8aae0b984e0b89ae0b899e0b8b2e0b887_42.jpg",
  },
  {
    title: "ร้อนสลับฝน อบอ้าวสุดๆ… เฟิร์นสไบนางจะรอดไหม?",
    category: "เคล็ดลับ",
    excerpt: "3 เทคนิคดูแลเฟิร์นในช่วงอากาศแปรปรวน ลมสำคัญกว่าน้ำในวันที่ชื้น...",
    date: "9 พฤษภาคม 2026",
    url: "https://forfernfarm.wordpress.com/2026/05/09/ร้อนสลับฝน/",
    img: "https://forfernfarm.wordpress.com/wp-content/uploads/2026/04/e0b980e0b89fe0b8b4e0b8a3e0b98ce0b899e0b8aae0b984e0b89ae0b899e0b8b2e0b887_2.jpg",
  },
  {
    title: "Ultimate Guide: วิธีเลือกซื้อเฟิร์นสไบนางเกรดพรีเมียม",
    category: "คู่มือ",
    excerpt: "3 จุดเช็กที่คุณต้องรู้ก่อนซื้อ ทำไมไม้ป่าราคาถูกถึงอาจแพงกว่าในระยะยาว...",
    date: "3 พฤษภาคม 2026",
    url: "https://forfernfarm.wordpress.com/2026/05/03/the-ultimate-guide/",
    img: "https://forfernfarm.wordpress.com/wp-content/uploads/2026/04/e0b980e0b89fe0b8b4e0b8a3e0b98ce0b899e0b8aae0b984e0b89ae0b899e0b8b2e0b887_31.jpg",
  },

  // ── ตัวอย่าง: เพิ่มบทความใหม่ ───────────────────────────────
  // {
  //   title: "วานิลลาดอกแรก บนดินลพบุรี",
  //   category: "กิจกรรมฟาร์ม",
  //   excerpt: "รอมา 9 เดือน วันนี้ดอกแรกบาน...",
  //   date: "1 มิถุนายน 2026",
  //   url: "https://forfernfarm.wordpress.com/...",
  //   img: "https://...",
  // },
];

// ─────────────────────────────────────────────
//  ⭐ รีวิวลูกค้า — เพิ่ม/แก้ได้เลย
// ─────────────────────────────────────────────
const REVIEWS = [
  {
    text: "สั่ง Jumbo ไปวางที่ร้านกาแฟ ลูกค้าแห่ถ่ายรูปกันเลย บรรยากาศเปลี่ยนไปมากจริงๆ ขอบคุณมากครับ",
    name: "คุณมินท์",
    role: "เจ้าของคาเฟ่ กรุงเทพฯ",
    emoji: "☕",
    stars: 5,
  },
  {
    text: "ต้นสวยมาก ส่งมาดี แพ็คมาอย่างดี ไม่มีใบช้ำเลย แขวนที่ชายคาบ้านได้เลย ประทับใจบริการมาก",
    name: "คุณอ้อย",
    role: "ลูกค้าบ้านพักอาศัย ลพบุรี",
    emoji: "🏡",
    stars: 5,
  },
  {
    text: "สั่งครั้งแรก 2 ต้น ชอบมากจนสั่งเพิ่มอีก 5 ต้น พนักงานแนะนำดีมาก ถามอะไรก็ตอบได้หมด",
    name: "คุณปอ",
    role: "นักออกแบบตกแต่ง กรุงเทพฯ",
    emoji: "🌿",
    stars: 5,
  },
];

// ─────────────────────────────────────────────
//  🖼️  รูปหน้าเว็บหลัก — เปลี่ยนได้ง่าย
//  วิธีเปลี่ยนรูป:
//    1. อัปรูปขึ้น Imgur.com (ฟรี ไม่ต้องสมัคร)
//       → เปิด imgur.com → drag รูปลง → copy link ที่ขึ้นว่า ".jpg"
//    2. หรือใช้รูปจาก Facebook/WordPress → คลิกขวา "Copy image address"
//    3. วางลิงก์แทน URL เดิมด้านล่าง
// ─────────────────────────────────────────────
const IMAGES = {
  hero:    "https://forfernfarm.wordpress.com/wp-content/uploads/2026/04/e0b980e0b89fe0b8b4e0b8a3e0b98ce0b899e0b8aae0b984e0b89ae0b899e0b8b2e0b887_42.jpg",
  why:     "https://forfernfarm.wordpress.com/wp-content/uploads/2026/04/e0b980e0b89fe0b8b4e0b8a3e0b98ce0b899e0b8aae0b984e0b89ae0b899e0b8b2e0b887_11-1.jpg",
};

// ─────────────────────────────────────────────
//  📊 ตัวเลขสถิติ Hero
// ─────────────────────────────────────────────
const STATS = [
  { num: "500+", label: "ออร์เดอร์ที่ส่งแล้ว" },
  { num: "100%", label: "ปลูกเองจากฟาร์ม" },
  { num: "ฟรี",  label: "จัดส่งทั่วไทย" },
];

// ============================================================
//  🔧 ระบบ Render — ไม่ต้องแตะส่วนนี้
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderBlog();
  renderReviews();
  renderStats();
  renderContact();
  renderImages();
});

function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  grid.innerHTML = PRODUCTS.map(p => `
    <div class="product-card ${p.featured ? 'featured' : ''}">
      ${p.featured ? '<div class="featured-tag">ยอดนิยม</div>' : ''}
      <div class="product-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://placehold.co/400x300/2d5a3d/b8d4c0?text=🌿'">
      </div>
      <div class="product-body">
        <div class="product-size">${p.size}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-tags">${p.tags.map(t => `<span class="product-tag">${t}</span>`).join('')}</div>
        <p class="product-desc">${p.desc}</p>
        <div class="product-price">
          <span class="price-num">${p.price.toLocaleString()}</span>
          <span class="price-unit">บาท</span>
          <span class="price-free">${p.free_shipping_note}</span>
        </div>
        <a href="${CONTACT.line_url}" target="_blank" class="product-cta">สั่งผ่าน LINE →</a>
      </div>
    </div>
  `).join('');
}

function renderBlog() {
  const grid = document.getElementById('blog-grid');
  if (!grid || BLOG_POSTS.length === 0) return;
  grid.innerHTML = BLOG_POSTS.slice(0, 3).map((p, i) => `
    <a href="${p.url}" target="_blank" class="blog-card ${i === 0 ? 'featured' : ''}">
      <div class="blog-img">
        <img src="${p.img}" alt="${p.title}" loading="lazy" onerror="this.src='https://placehold.co/600x400/2d5a3d/b8d4c0?text=🌿'">
      </div>
      <div class="blog-body">
        <div class="blog-cat">${p.category}</div>
        <div class="blog-title">${p.title}</div>
        <p class="blog-excerpt">${p.excerpt}</p>
        <div class="blog-date">${p.date}</div>
      </div>
    </a>
  `).join('');
}

function renderReviews() {
  const grid = document.getElementById('reviews-grid');
  if (!grid) return;
  grid.innerHTML = REVIEWS.map(r => `
    <div class="review-card">
      <div class="review-stars">${'★'.repeat(r.stars)}</div>
      <p class="review-text">"${r.text}"</p>
      <div class="review-author">
        <div class="review-avatar">${r.emoji}</div>
        <div>
          <div class="review-name">${r.name}</div>
          <div class="review-role">${r.role}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderStats() {
  const row = document.getElementById('hero-stats');
  if (!row) return;
  row.innerHTML = STATS.map(s => `
    <div>
      <div class="stat-num">${s.num}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');
}

function renderContact() {
  // Footer links
  document.querySelectorAll('[data-line]').forEach(el => el.href = CONTACT.line_url);
  document.querySelectorAll('[data-fb]').forEach(el => el.href = CONTACT.facebook);
  document.querySelectorAll('[data-tt]').forEach(el => el.href = CONTACT.tiktok);
  document.querySelectorAll('[data-phone]').forEach(el => el.textContent = CONTACT.phone);
  document.querySelectorAll('[data-email]').forEach(el => el.textContent = CONTACT.email);
  document.querySelectorAll('[data-address]').forEach(el => el.textContent = CONTACT.address);
  document.querySelectorAll('[data-hours]').forEach(el => el.textContent = CONTACT.open_hours);
}

function renderImages() {
  const hero = document.getElementById('img-hero');
  const why  = document.getElementById('img-why');
  if (hero) hero.src = IMAGES.hero;
  if (why)  why.src  = IMAGES.why;
}
