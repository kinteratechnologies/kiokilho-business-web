import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Warranty() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '5rem', minHeight: '100vh', background: 'var(--bg-color)', color: 'var(--text-primary)' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', marginBottom: '2rem' }}>Garansi Seumur Hidup</h1>
          <div style={{ fontSize: '1.1rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.5rem', fontFamily: 'Outfit, sans-serif' }}>
            <p>Di Kiokilho, kami sangat percaya pada kualitas dan daya tahan mahakarya kami. Itulah sebabnya setiap tas Kiokilho dilengkapi dengan <strong>Garansi Seumur Hidup</strong>.</p>
            <p>Garansi ini mencakup semua cacat produksi dan kelemahan material pada perangkat keras (resleting, pengait kuningan, kancing) maupun struktur jahitan utama.</p>
            <p>Jika tas Anda mengalami kerusakan yang tercakup dalam garansi, kami akan memperbaikinya secara gratis. Komitmen kami adalah memastikan tas Kiokilho Anda dapat diwariskan dari generasi ke generasi.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
