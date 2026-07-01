import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, ShoppingCart, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import logoImg from '../assets/Kiokilho_transparent.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItems, openCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Jika bukan di halaman beranda (misal halaman Koleksi), paksa navbar selalu dalam state "scrolled" agar teks berwarna gelap
  const isHomePage = location.pathname === '/';
  const effectiveScrolled = isHomePage ? scrolled : true;

  const textColor = effectiveScrolled ? 'var(--text-primary)' : '#ffffff';

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`navbar ${effectiveScrolled ? 'glass border-bottom' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '1rem 2rem',
        transition: 'all 0.3s ease',
        background: effectiveScrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: effectiveScrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: effectiveScrolled ? 'blur(20px)' : 'none',
        borderBottom: effectiveScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <img 
            src={logoImg} 
            alt="Kiokilho" 
            style={{ 
              height: '32px', 
              objectFit: 'contain', 
              transition: 'all 0.3s ease',
              filter: textColor === '#ffffff' ? 'brightness(0) invert(1)' : 'none'
            }} 
          />
        </Link>

        {/* Links (Desktop) */}
        <div className="nav-links" style={{ display: 'flex', gap: '2rem', fontSize: '0.85rem', fontWeight: 500, color: textColor, transition: 'color 0.3s ease' }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Beranda</Link>
          <Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>Koleksi</Link>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Jumputan Art</Link>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Bespoke</Link>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', color: textColor, transition: 'color 0.3s ease' }}>
          <Search size={18} style={{ cursor: 'pointer' }} onClick={() => setIsSearchOpen(true)} />
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={openCart}>
            <ShoppingCart size={18} />
            {totalItems > 0 && (
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                style={{ position: 'absolute', top: -8, right: -8, background: 'var(--accent-color)', color: '#fff', fontSize: '0.65rem', fontWeight: 700, width: 16, height: 16, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Outfit, sans-serif' }}
              >
                {totalItems}
              </motion.div>
            )}
          </div>
          <Menu size={18} className="mobile-menu" style={{ cursor: 'pointer', display: 'none' }} />
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '80px',
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottom: '1px solid var(--border-color)',
              zIndex: 1001
            }}
          >
            <div style={{ maxWidth: '800px', width: '100%', padding: '0 2rem', position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Search size={22} style={{ position: 'absolute', left: '3rem', color: 'var(--text-secondary)' }} />
              <input 
                type="text" 
                placeholder="Cari koleksi (misal: tote, sling)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setIsSearchOpen(false);
                    if (searchQuery.trim()) {
                      navigate(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
                      setSearchQuery('');
                    }
                  }
                }}
                autoFocus
                style={{
                  width: '100%',
                  padding: '1rem 3rem 1rem 3.5rem',
                  fontSize: '1.2rem',
                  border: 'none',
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  fontFamily: 'Playfair Display, serif'
                }}
              />
              <button onClick={() => setIsSearchOpen(false)} style={{ position: 'absolute', right: '3rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', padding: 0, display: 'flex' }}>
                <X size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
