import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ShoppingCart, Plus } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import toteImg from '../assets/tote_bag.png';
import slingImg from '../assets/sling_bag.png';
import backpackImg from '../assets/backpack_bag.png';

const allProducts = [
  {
    id: 1, name: "Kiokilho Classic Tote", price: "Rp 499.000", originalPrice: "Rp 799.000", category: "Tote Bag", image: toteImg,
    images: [toteImg, slingImg, backpackImg],
    tag: "Best Seller",
    description: "Mahakarya tote bag ikonik dengan ruang penyimpanan luas. Dirajut dari serat goni pilihan dan sentuhan kain jumputan yang memancarkan pesona klasik nan elegan.",
    longDescription: "Diciptakan untuk Anda yang menghargai keindahan dalam kesederhanaan. Kiokilho Classic Tote dibuat secara manual oleh pengrajin lokal berbakat yang mendedikasikan lebih dari 72 jam pengerjaan untuk setiap tasnya. Serat goni premium yang digunakan tidak hanya ramah lingkungan, tetapi juga memiliki durabilitas tinggi untuk pemakaian bertahun-tahun. Lapisan dalam menggunakan katun organik yang lembut, memastikan barang-barang berharga Anda tetap aman dari goresan.",
    dimensions: "42cm (P) x 32cm (T) x 15cm (L)"
  },
  {
    id: 2, name: "Urban Sling", price: "Rp 349.000", originalPrice: "Rp 599.000", category: "Sling Bag", image: slingImg,
    images: [slingImg, backpackImg, toteImg],
    tag: "New Arrival",
    description: "Ringkas, dinamis, dan modis. Tas selempang yang dirancang untuk menemani gaya hidup urban Anda tanpa mengorbankan nilai estetika nusantara.",
    longDescription: "Mobilitas tinggi menuntut kepraktisan tanpa mengorbankan gaya. Urban Sling hadir dengan desain asimetris yang ergonomis, memeluk tubuh Anda dengan sempurna saat berjalan melintasi hiruk pikuk kota. Dilengkapi dengan kompartemen tersembunyi yang tahan air untuk mengamankan gawai Anda. Aksen jumputan pada tali selempang menjadi statement piece yang membedakan Anda dari keramaian.",
    dimensions: "22cm (P) x 28cm (T) x 8cm (L)"
  },
  {
    id: 3, name: "Explorer Pack", price: "Rp 899.000", originalPrice: "Rp 1.299.000", category: "Backpack", image: backpackImg,
    images: [backpackImg, toteImg, slingImg],
    description: "Ransel premium yang tangguh namun tetap elegan. Menggabungkan material goni berdaya tahan tinggi dengan ornamen kulit & kuningan asli untuk petualangan yang penuh gaya.",
    longDescription: "Sang pendamping setia untuk jiwa-jiwa petualang. Explorer Pack mendefinisikan ulang arti ransel alam dengan sentuhan luxury. Panel belakangnya dilengkapi bantalan ergonomis berongga untuk sirkulasi udara maksimal. Gesper kuningan solid yang dibuat khusus memastikan ransel tertutup rapat. Ruang utamanya yang luas siap menampung laptop 15 inci beserta esensial perjalanan Anda selama akhir pekan.",
    dimensions: "30cm (P) x 45cm (T) x 18cm (L)"
  },
  {
    id: 4, name: "Artisan Mini Tote", price: "Rp 399.000", category: "Tote Bag", image: toteImg,
    images: [toteImg, slingImg, toteImg],
    description: "Versi ringkas yang estetis. Sangat cocok untuk acara santai maupun formal, memberikan kesan mewah yang tak tertandingi di setiap jinjingan.",
    longDescription: "Kecil namun memancarkan aura yang kuat. Artisan Mini Tote dirancang khusus bagi mereka yang hanya membawa esensial terpilih. Bentuknya yang terstruktur kaku memberikan siluet yang tajam dan elegan saat dijinjing. Perpaduan antara anyaman goni rapat dengan hardware emas menjadikannya pasangan sempurna untuk gaun malam maupun pakaian kasual akhir pekan Anda.",
    dimensions: "25cm (P) x 20cm (T) x 10cm (L)"
  },
  {
    id: 5, name: "City Crossbody", price: "Rp 429.000", category: "Sling Bag", image: slingImg,
    images: [slingImg, toteImg, slingImg],
    description: "Desain ergonomis dengan siluet minimalis. Memberikan kebebasan bergerak sekaligus menyempurnakan penampilan kasual premium Anda.",
    longDescription: "Harmoni antara desain minimalis kontemporer dengan kearifan lokal. City Crossbody menawarkan akses cepat ke barang-barang Anda melalui ritsleting mulus dari ujung ke ujung. Tali bahu kulit yang dapat disesuaikan memberikan kenyamanan tingkat tinggi. Kain jumputan yang melapisi bagian dalam tas memberikan kejutan visual yang menyenangkan setiap kali Anda membukanya.",
    dimensions: "28cm (P) x 22cm (T) x 9cm (L)"
  },
  {
    id: 6, name: "Nomad Rucksack", price: "Rp 949.000", category: "Backpack", image: backpackImg,
    images: [backpackImg, slingImg, backpackImg],
    description: "Kapasitas ekstra dengan desain berkelas. Diciptakan untuk jiwa petualang yang tetap mengutamakan penampilan sempurna dari material ramah lingkungan.",
    longDescription: "Puncak mahakarya pengrajin Kiokilho. Nomad Rucksack adalah manifestasi dari kemewahan eco-friendly. Memiliki kompartemen modular yang dapat disesuaikan dengan kebutuhan Anda, mulai dari sesi fotografi hingga pendakian ringan. Kain goni pada tas ini telah melalui proses pelapisan khusus untuk menahan percikan air, memastikan barang berharga Anda terlindungi di segala kondisi cuaca.",
    dimensions: "32cm (P) x 48cm (T) x 20cm (L)"
  },
];

export default function AllProducts() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { addToCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  // Parse search query
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('q') || '';

  const getActiveTab = () => {
    const q = searchQuery.toLowerCase();
    if (q.includes('tote')) return 'Tote Bag';
    if (q.includes('sling')) return 'Sling Bag';
    if (q.includes('pack')) return 'Backpack';
    return 'Semua';
  };
  const activeTab = getActiveTab();

  const handleTabClick = (cat) => {
    if (cat === 'Semua') navigate('/products');
    else if (cat === 'Tote Bag') navigate('/products?q=Tote');
    else if (cat === 'Sling Bag') navigate('/products?q=Sling');
    else if (cat === 'Backpack') navigate('/products?q=Backpack');
  };

  const filteredProducts = allProducts.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Ensure we start at top when navigating here
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setSelectedProduct(null);
  };

  return (
    <>
      <div style={{ paddingTop: '100px', paddingBottom: '100px', background: 'var(--bg-color)', minHeight: '100vh' }}>
        <div className="container">

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ fontSize: '4rem', fontFamily: 'Playfair Display, serif', marginBottom: '1rem' }}
            >
              Koleksi Eksklusif
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}
            >
              Temukan mahakarya yang sesuai dengan karakter Anda. Setiap tas adalah cerita yang siap Anda bawa.
            </motion.p>
          </div>

          {/* Filter Bar */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem', marginBottom: '4rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem' }}>
            {['Semua', 'Tote Bag', 'Sling Bag', 'Backpack'].map((cat, idx) => {
              const isActive = cat === activeTab;
              return (
                <div 
                  key={idx} 
                  onClick={() => handleTabClick(cat)}
                  style={{
                    fontSize: '1rem',
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontFamily: 'Outfit, sans-serif',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {cat}
                </div>
              );
            })}
          </div>

          {/* Product Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '3rem' }}>
            {filteredProducts.length === 0 ? (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '5rem 0', color: 'var(--text-secondary)' }}>
                <h3 style={{ fontSize: '2rem', fontFamily: 'Playfair Display, serif', color: 'var(--text-primary)', marginBottom: '1rem' }}>Hasil tidak ditemukan</h3>
                <p style={{ fontSize: '1.1rem', fontFamily: 'Outfit, sans-serif' }}>Maaf, kami tidak dapat menemukan koleksi untuk "{searchQuery}".</p>
              </div>
            ) : (
              filteredProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    background: '#ffffff',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1px solid var(--border-color)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  whileHover="hover"
                  onClick={() => { setSelectedProduct(product); setActiveImageIndex(0); }}
                >
                  <div style={{ height: '400px', background: '#000', position: 'relative', overflow: 'hidden' }}>
                    {product.tag && (
                      <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', zIndex: 10, background: 'var(--accent-color)', color: '#fff', padding: '6px 12px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        {product.tag}
                      </div>
                    )}
                    <motion.img
                      variants={{ hover: { scale: 1.08 } }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      src={product.image}
                      alt={product.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>{product.category}</div>
                      <h3 style={{ fontSize: '1.8rem', fontFamily: 'Playfair Display, serif', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>{product.name}</h3>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        {product.originalPrice && (
                          <span style={{ fontSize: '0.95rem', textDecoration: 'line-through', color: 'var(--text-secondary)', fontFamily: 'Outfit, sans-serif' }}>
                            {product.originalPrice}
                          </span>
                        )}
                        <div style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--accent-color)', fontFamily: 'Outfit, sans-serif' }}>
                          {product.price}
                        </div>
                      </div>
                      <motion.div
                        onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}
                        variants={{ hover: { x: 5, color: 'var(--accent-color)' } }}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                      >
                        Beli <ArrowRight size={18} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>

        </div>
      </div>

      {/* Product Preview Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 99999,
              background: 'rgba(255,255,255,0.85)',
              backdropFilter: 'blur(25px)',
              WebkitBackdropFilter: 'blur(25px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: '#fff',
                width: '100%',
                maxWidth: '1000px',
                maxHeight: '90vh',
                borderRadius: '32px',
                boxShadow: '0 40px 80px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'row',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'rgba(0,0,0,0.05)',
                  border: 'none',
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10,
                  color: 'var(--text-primary)',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'var(--text-primary)'; e.currentTarget.style.color = '#fff'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.05)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
              >
                <X size={28} />
              </button>

              {/* Modal Image Section */}
              <div style={{ flex: '1 1 50%', background: '#f5f5f7', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flex: 1, position: 'relative' }}>
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      src={selectedProduct.images[activeImageIndex]}
                      alt={selectedProduct.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                    />
                  </AnimatePresence>
                </div>

                {/* Thumbnails */}
                <div style={{ display: 'flex', gap: '1rem', padding: '1.5rem', background: '#fff', borderTop: '1px solid var(--border-color)' }}>
                  {selectedProduct.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      style={{
                        width: '80px', height: '80px', padding: 0, border: activeImageIndex === idx ? '2px solid var(--text-primary)' : '1px solid var(--border-color)',
                        borderRadius: '12px', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.3s ease',
                        opacity: activeImageIndex === idx ? 1 : 0.5
                      }}
                    >
                      <img src={img} alt="thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Modal Content */}
              <div style={{ flex: '1 1 50%', padding: '4rem 3rem', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif' }}>
                  {selectedProduct.category}
                </div>
                <h2 style={{ fontSize: '2.5rem', fontFamily: 'Playfair Display, serif', marginBottom: '1rem', color: 'var(--text-primary)', lineHeight: 1.1 }}>
                  {selectedProduct.name}
                </h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  {selectedProduct.originalPrice && (
                    <span style={{ fontSize: '1.3rem', textDecoration: 'line-through', color: 'var(--text-secondary)', fontFamily: 'Outfit, sans-serif' }}>
                      {selectedProduct.originalPrice}
                    </span>
                  )}
                  <div style={{ fontSize: '1.8rem', fontWeight: 600, color: 'var(--accent-color)', fontFamily: 'Outfit, sans-serif' }}>
                    {selectedProduct.price}
                  </div>
                </div>

                {/* Dimensions Box */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', padding: '1rem', background: '#f9f9fb', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <span style={{ fontWeight: 600, fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>Dimensi:</span>
                  <span style={{ color: 'var(--text-secondary)', fontFamily: 'Outfit, sans-serif' }}>{selectedProduct.dimensions}</span>
                </div>

                <div style={{ width: '40px', height: '2px', background: 'var(--accent-color)', marginBottom: '2rem' }}></div>

                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '3rem' }}>
                  {selectedProduct.longDescription}
                </p>

                <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem' }}>
                  <button
                    onClick={() => handleAddToCart(selectedProduct)}
                    style={{
                      flex: 1,
                      background: '#000',
                      color: '#fff',
                      border: 'none',
                      padding: '1.2rem',
                      borderRadius: '12px',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.8rem',
                      cursor: 'pointer',
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <Plus size={20} />
                    Tambah ke Keranjang
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
