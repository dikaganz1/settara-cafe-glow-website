import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowUpRight, Check, Clock3, Coffee, Instagram, MapPin, Menu, MessageCircle, Phone, Share2, Utensils, ShoppingBag, Bike, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import cafeImage from "@/assets/settara-hero.jpeg";
import coffeeImage from "@/assets/settara-coffee.jpg";
import logoDark from "@/assets/settara-logo-dark.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Settara cafe&inn — Secangkir kopi, sejenak cerita." },
    { name: "description", content: "Temukan Settara cafe&inn di Bantul, Yogyakarta. Makan di tempat, bawa pulang, dan pesan antar. Hubungi kami dan rencanakan kunjunganmu." },
    { property: "og:title", content: "Settara cafe&inn — Kopi & cerita di Bantul" },
    { property: "og:description", content: "Singgah untuk secangkir kopi dan momen hangat di Settara cafe&inn, Bantul, Yogyakarta." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});
const maps = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Settara cafe&inn Gg. Menur Ringinharjo Bantul Yogyakarta");
const whatsapp = "https://wa.me/6281327265166";
const navigation = [{ name: "Tentang", href: "#tentang" }, { name: "Menu", href: "#menu" }, { name: "Momen", href: "#momen" }, { name: "Kunjungi Kami", href: "#kunjungi" }];
function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shared, setShared] = useState(false);
  async function share() {
    try {
      if (navigator.share) await navigator.share({ title: "Settara cafe&inn", url: window.location.href });
      else { await navigator.clipboard.writeText(window.location.href); setShared(true); setTimeout(() => setShared(false), 2500); }
    } catch { setShared(false); }
  }
  return <main>
    <header className="site-header">
      <a href="#" className="brand" aria-label="Settara beranda"><img
  src="/settara-logo-dark.png"
  alt="Logo Settara"
  width={238}
  height={238}
  className="brand-mark"
/><span className="brand-name">settara<span>.</span><small>CAFE & INN</small></span></a>
      <nav className="desktop-nav" aria-label="Navigasi utama">{navigation.map(item => <a key={item.name} href={item.href}>{item.name}</a>)}</nav>
      <Button variant="cafeOutline" asChild className="header-contact"><a href={whatsapp} target="_blank" rel="noreferrer">Mari Singgah <ArrowUpRight /></a></Button>
      <Button variant="ghost" size="icon" className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Tutup navigasi" : "Buka navigasi"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</Button>
      {menuOpen && <nav className="mobile-nav" aria-label="Navigasi seluler">{navigation.map(item => <a key={item.name} href={item.href} onClick={() => setMenuOpen(false)}>{item.name}<ArrowUpRight size={18} /></a>)}</nav>}
    </header>

    <section className="hero" aria-labelledby="hero-title">
      <img src={cafeImage} alt="Ilustrasi suasana kafe dengan meja kayu, tanaman, dan bar kopi" width={1920} height={1088} className="hero-image" />
      <div className="hero-shade" />
      <div className="hero-content">
        <div className="eyebrow hero-eyebrow"></div>
        <h1 id="hero-title">Settara <em>cafe&inn</em><span>Secangkir kopi,<br />sejenak cerita.</span></h1>
        <p>Di antara hari yang sibuk, selalu ada waktu untuk singgah.<br className="desktop-break" /> Kopi, obrolan, dan momen yang terasa seperti rumah.</p>
        <div className="hero-actions"><Button variant="hero" size="lg" asChild><a href="#menu">Jelajahi Menu <ArrowUpRight /></a></Button><Button variant="heroOutline" size="lg" asChild><a href={maps} target="_blank" rel="noreferrer"><MapPin /> Temukan Kami</a></Button></div>
      </div>
      <div className="hero-bottom"><span><MapPin size={14} /> BANTUL, YOGYAKARTA</span><a href="#tentang">SCROLL TO EXPLORE <ArrowDown size={14} /></a><span><Clock3 size={14} /> SAMPAI PUKUL 00.00</span></div>
    </section>

    <div className="service-strip"><span>GOOD COFFEE. GOOD COMPANY.</span><div><span><Utensils /> Makan di tempat</span><span><ShoppingBag /> Bawa pulang</span><span><Bike /> Pesan antar</span></div><Coffee className="strip-coffee" /></div>

    <section id="tentang" className="section about-section">
      <div className="about-heading"><div className="eyebrow"><span className="section-number"></span> TENTANG SETTARA</div><h2>Bukan sekadar kopi.<br />Sebuah tempat <em>kembali.</em></h2></div>
      <div className="about-copy"><p>Kami percaya, hal-hal baik sering dimulai dari hal sederhana. Secangkir kopi, percakapan yang panjang, atau waktu tenang untuk diri sendiri.</p><p>Di Settara, setiap singgah punya ceritanya sendiri. Duduk sebentar, nikmati harimu, dan biarkan cerita mengalir.</p><a className="text-link" href="#kunjungi">Kenali tempat kami <ArrowUpRight size={18} /></a></div>
    </section>

    <section id="menu" className="menu-section section">
      <div className="coffee-photo"><img src={coffeeImage} alt="Ilustrasi cappuccino dengan latte art dalam cangkir keramik" width={1024} height={1024} loading="lazy" /><span>THE SIMPLE PLEASURE OF A GOOD CUP.</span></div>
      <div className="menu-copy"><div className="eyebrow"><span className="section-number"></span> DARI BAR KAMI</div><h2>Teman untuk<br />setiap <em>suasana.</em></h2><p>Awali dengan kopi. Lengkapi dengan sesuatu yang kamu suka. Tanyakan pilihan menu hari ini langsung kepada kami.</p><div className="menu-note"><Coffee size={22} /><div><strong>Menu Settara</strong><span>Daftar menu segera hadir.</span></div></div><Button variant="cafe" size="lg" asChild><a href={`${whatsapp}?text=${encodeURIComponent("Halo Settara! Boleh lihat daftar menu dan harganya?")}`} target="_blank" rel="noreferrer">Tanyakan Menu <ArrowUpRight /></a></Button></div>
    </section>

    <section id="momen" className="section moments-section"><div className="section-heading"><div><div className="eyebrow"><span className="section-number"></span> CERITA DI SETTARA</div><h2>Momen kecil.<br /><em>Kenangan hangat.</em></h2></div><a className="text-link" href="https://www.instagram.com/settara.caffein/" target="_blank" rel="noreferrer"><Instagram size={17} /> @settara.caffein <ArrowUpRight size={17} /></a></div><div className="moments-empty"><span className="empty-ornament">s.</span><p>Ruang untuk cerita yang akan datang.</p><span>MOMEN SETTARA · SEGERA HADIR</span></div></section>

    <section id="kunjungi" className="visit-section"><div className="section visit-inner"><div className="visit-intro"><div className="eyebrow"><span className="section-number"></span> TEMUKAN SETTARA</div><h2>Pintu kami terbuka.<br /><em>Mari singgah.</em></h2><p>Datang sendiri, berdua, atau bersama cerita-cerita baru.<br />Sampai bertemu di Settara.</p><Button variant="hero" size="lg" asChild><a href={maps} target="_blank" rel="noreferrer">Petunjuk Arah <ArrowUpRight /></a></Button></div><div className="visit-details"><div className="detail-row"><MapPin /><div><span>ALAMAT</span><p>Gg. Menur, Bantul Karang, Ringinharjo,<br />Kec. Bantul, Kabupaten Bantul,<br />Daerah Istimewa Yogyakarta 55713</p><a href={maps} target="_blank" rel="noreferrer">484F+32 Ringinharjo <ArrowUpRight size={13} /></a></div></div><div className="detail-row"><Clock3 /><div><span>WAKTU SINGGAH</span><p>Sampai pukul 00.00</p></div></div><div className="detail-row"><Phone /><div><span>HUBUNGI KAMI</span><a className="phone-link" href="tel:+6281327265166">0813-2726-5166</a></div></div><div className="visit-links"><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp <ArrowUpRight size={15} /></a><Button variant="heroOutline" size="sm" onClick={share}>{shared ? <Check /> : <Share2 />}{shared ? "Tautan disalin" : "Bagikan tempat"}</Button></div></div></div></section>

    <footer className="site-footer"><a href="#" className="brand"><img src="/settara-logo-light.png" alt="" width={238} height={238} className="brand-mark" /><span className="brand-name">settara<span>.</span><small>CAFE & INN</small></span></a><span>Secangkir kopi. Sejenak cerita.</span><a href="https://www.instagram.com/settara.caffein/" target="_blank" rel="noreferrer" aria-label="Instagram Settara"><Instagram size={19} /><ArrowUpRight size={16} /></a><div className="footer-bottom"><span>© 2026 Settara cafe&inn</span><span>MADE FOR SLOW MOMENTS.</span><a href="#">Kembali ke atas ↑</a></div></footer>
  </main>;
}
