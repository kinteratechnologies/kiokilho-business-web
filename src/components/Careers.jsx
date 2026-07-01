import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '5rem', minHeight: '100vh', background: 'var(--bg-color)', color: 'var(--text-primary)' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', marginBottom: '2rem' }}>Karir</h1>
          <div style={{ fontSize: '1.1rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.5rem', fontFamily: 'Outfit, sans-serif' }}>
            <p>Kami di Kiokilho selalu mencari jiwa-jiwa visioner yang bersemangat untuk mendefinisikan ulang industri fesyen mewah secara berkelanjutan.</p>
            <p>Budaya kerja kami berpusat pada kolaborasi, penghargaan terhadap kriya tradisional, dan inovasi tanpa batas. Kami mengundang para artisan, desainer, strategis pemasaran, dan inovator lingkungan untuk bergabung dalam misi kami.</p>
            <p>Saat ini, tim inti kami sudah lengkap. Namun, kami selalu terbuka untuk menerima portofolio Anda. Silakan kirimkan resume dan karya terbaik Anda ke <strong>careers@kiokilho.com</strong>.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
