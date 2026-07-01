import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TermsOfUse() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '5rem', minHeight: '100vh', background: 'var(--bg-color)', color: 'var(--text-primary)' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', marginBottom: '2rem' }}>Syarat Penggunaan</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
            Terakhir diperbarui: 1 Juli 2026
          </p>
          <div style={{ fontSize: '1.05rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.5rem', fontFamily: 'Outfit, sans-serif' }}>
            <p>
              Selamat datang di Kiokilho. Dengan mengakses dan menggunakan situs web ini, Anda setuju untuk mematuhi dan terikat oleh Syarat Penggunaan berikut.
            </p>
            <h3 style={{ fontSize: '1.5rem', marginTop: '1rem', color: 'var(--text-primary)', fontWeight: 600 }}>1. Penggunaan Situs</h3>
            <p>
              Konten di situs web ini disediakan untuk informasi umum dan penggunaan pribadi Anda. Kami berhak mengubah, menangguhkan, atau menghentikan aspek apa pun dari situs web tanpa pemberitahuan sebelumnya.
            </p>
            <h3 style={{ fontSize: '1.5rem', marginTop: '1rem', color: 'var(--text-primary)', fontWeight: 600 }}>2. Hak Kekayaan Intelektual</h3>
            <p>
              Situs web ini berisi materi yang dimiliki secara eksklusif oleh Kiokilho. Materi ini mencakup, namun tidak terbatas pada, desain produk, motif kain jumputan, foto, tata letak, dan grafis. Reproduksi dalam bentuk apa pun sangat dilarang dan dilindungi oleh hukum hak cipta.
            </p>
            <h3 style={{ fontSize: '1.5rem', marginTop: '1rem', color: 'var(--text-primary)', fontWeight: 600 }}>3. Karakteristik Produk</h3>
            <p>
              Karena sifat buatan tangan (handmade) dan penggunaan material alam (serat goni) pada produk kami, mungkin terdapat sedikit variasi dalam tekstur, warna, dan pola jahitan antar satu tas dengan tas lainnya. Ini adalah karakteristik autentik dari karya seni dan bukan merupakan cacat produksi.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
