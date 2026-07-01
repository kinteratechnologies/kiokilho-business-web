import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Investors() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '5rem', minHeight: '100vh', background: 'var(--bg-color)', color: 'var(--text-primary)' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', marginBottom: '2rem' }}>Investor</h1>
          <div style={{ fontSize: '1.1rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.5rem', fontFamily: 'Outfit, sans-serif' }}>
            <p>Kiokilho merupakan salah satu pemain baru yang paling menjanjikan dalam segmen <em>premium eco-fashion</em> di Asia Tenggara.</p>
            <p>Dengan pertumbuhan pendapatan YoY yang stabil dan permintaan organik yang kuat baik di pasar domestik maupun mancanegara, model bisnis kami membuktikan bahwa profitabilitas dan praktik lingkungan yang etis dapat berjalan beriringan.</p>
            <p>Untuk laporan keuangan tahunan, prospektus kemitraan ritel global, atau diskusi pendanaan strategis, silakan hubungi tim Hubungan Investor kami melalui <strong>invest@kiokilho.com</strong>.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
