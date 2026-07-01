import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Shipping() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '5rem', minHeight: '100vh', background: 'var(--bg-color)', color: 'var(--text-primary)' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', marginBottom: '2rem' }}>Kebijakan Pengiriman</h1>
          <div style={{ fontSize: '1.1rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.5rem', fontFamily: 'Outfit, sans-serif' }}>
            <p>Kami memastikan bahwa mahakarya Anda sampai di tangan Anda dengan aman dan dalam kondisi sempurna.</p>
            <p><strong>Pengiriman Domestik:</strong> Kami menawarkan <strong>Pengiriman Bebas Biaya</strong> ke seluruh wilayah Indonesia untuk setiap pembelian tanpa minimum nominal. Estimasi pengiriman memakan waktu 2-5 hari kerja tergantung lokasi Anda.</p>
            <p><strong>Pengemasan Eksklusif:</strong> Setiap produk dikemas dalam boks premium yang kokoh, dilengkapi dengan <em>dust bag</em> pelindung dan sertifikat keaslian. Kami memastikan pengalaman <em>unboxing</em> Anda sama istimewanya dengan tas itu sendiri.</p>
            <p><strong>Pelacakan Pesanan:</strong> Setelah pesanan dikonfirmasi dan dikirim, Anda akan menerima nomor pelacakan unik secara langsung melalui WhatsApp.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
