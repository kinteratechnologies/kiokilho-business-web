import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Recycling() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '5rem', minHeight: '100vh', background: 'var(--bg-color)', color: 'var(--text-primary)' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', marginBottom: '2rem' }}>Program Daur Ulang</h1>
          <div style={{ fontSize: '1.1rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.5rem', fontFamily: 'Outfit, sans-serif' }}>
            <p>Di Kiokilho, kami percaya pada ekonomi sirkular (<em>circular economy</em>). Lingkungan bukan sekadar inspirasi, tapi rumah yang harus kita rawat.</p>
            <p>Jika tas Kiokilho Anda sudah mencapai akhir masa pakainya, jangan membuangnya. Kembalikan tas Anda kepada kami melalui <strong>Program Daur Ulang Kiokilho</strong>.</p>
            <p>Serat goni dan kain jumputan akan kami ekstrak, urai, dan daur ulang secara etis menjadi material isolasi ramah lingkungan. Sebagai apresiasi atas kepedulian Anda, Anda akan menerima <strong>Kredit Belanja sebesar Rp 250.000</strong> yang dapat digunakan untuk pembelian mahakarya Kiokilho Anda berikutnya.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
