import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Care() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '5rem', minHeight: '100vh', background: 'var(--bg-color)', color: 'var(--text-primary)' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', marginBottom: '2rem' }}>Perawatan Tas</h1>
          <div style={{ fontSize: '1.1rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.5rem', fontFamily: 'Outfit, sans-serif' }}>
            <p>Tas Kiokilho Anda adalah sebuah karya seni yang membutuhkan perawatan khusus agar pesonanya tetap bertahan.</p>
            <p><strong>Pembersihan Rutin:</strong> Gunakan sikat berbulu sangat halus atau kain microfiber kering untuk membersihkan debu dari serat goni. Jangan gunakan air secara langsung pada material goni.</p>
            <p><strong>Perawatan Jumputan:</strong> Kain jumputan kami diwarnai menggunakan pigmen alami. Jauhkan dari sinar matahari langsung yang terlalu lama untuk mencegah pemudaran warna. Jika terkena noda air, segera tepuk-tepuk lembut dengan kain kering.</p>
            <p><strong>Penyimpanan:</strong> Simpan tas Anda di dalam <em>dust bag</em> Kiokilho yang kami sertakan. Letakkan di tempat yang kering dan berventilasi baik, jauh dari kelembaban ekstrem.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
