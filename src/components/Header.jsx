import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import { useTheme } from '../context/theme/usetheme';
import { logout } from '../store/authSlice';
import { selectCartCount } from '../store/cartSlice';
import environment from '../environment';
import { HeaderEl, Logo, Nav, NavLink, AuthBtn, ActionBtn, CartBadge, MenuToggle } from './LoginForm.style';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { theme, toggleTheme } = useTheme();
  const user = useSelector((state) => state.auth.user);
  const cartCount = useSelector(selectCartCount);
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const toggleLang = () => {
    i18n.changeLanguage(lang === 'en' ? 'ar' : 'en');
  };

  return (
    <HeaderEl>
      <Logo to="/">DKUST</Logo>

      <MenuToggle
        type="button"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label={t('toggleMenu')}
      >
        ☰
      </MenuToggle>

      <Nav $open={menuOpen}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          {t('home')}
        </NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>
          {t('about')}
        </NavLink>
        <NavLink to="/portfolio" onClick={() => setMenuOpen(false)}>
          {t('portfolio')}
        </NavLink>
        <NavLink to="/products" onClick={() => setMenuOpen(false)}>
          {t('products')}
        </NavLink>
        <NavLink to="/services" onClick={() => setMenuOpen(false)}>
          {t('services')}
        </NavLink>
        <NavLink to="/blog" onClick={() => setMenuOpen(false)}>
          {t('blog')}
        </NavLink>
        <NavLink to="/resources" onClick={() => setMenuOpen(false)}>
          {t('resources')}
        </NavLink>
        <NavLink to="/quiz" onClick={() => setMenuOpen(false)}>
          {t('quiz')}
        </NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
          {t('contact')}
        </NavLink>
        <NavLink to="/orders" onClick={() => setMenuOpen(false)}>
          {t('orders')}
        </NavLink>

        <ActionBtn type="button" onClick={toggleTheme}>
          {theme === 'light' ? `🌙 ${t('dark')}` : `☀️ ${t('light')}`}
        </ActionBtn>

        <ActionBtn type="button" onClick={toggleLang}>
          {lang === 'en' ? 'العربية' : 'English'}
        </ActionBtn>

        <ActionBtn as={Link} to="/cart" onClick={() => setMenuOpen(false)}>
          🛒 {t('cart')}
          {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
        </ActionBtn>

        {user ? (
          <>
            <span style={{ color: '#fff', fontSize: 13 }}>
              {t('hi')}, {user.name || user.email || 'User'}
            </span>
            <ActionBtn
              type="button"
              onClick={() => {
                Cookies.remove(environment.TOKEN_KEY);
                dispatch(logout());
                setMenuOpen(false);
              }}
            >
              {t('logout')}
            </ActionBtn>
          </>
        ) : (
          <>
            <AuthBtn to="/login" onClick={() => setMenuOpen(false)}>
              {t('login')}
            </AuthBtn>
            <AuthBtn to="/register" onClick={() => setMenuOpen(false)}>
              {t('register')}
            </AuthBtn>
          </>
        )}
      </Nav>
    </HeaderEl>
  );
}

export default Header;