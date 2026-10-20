import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* ==================== HEADER ==================== */


export const HeaderEl = styled.header`
  background-color: var(--bg-header);
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 100;
  @media (max-width: 900px) {
    padding: 12px 16px;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export const Logo = styled(Link)`
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    width: 100%;
    flex-direction: column;
    gap: 12px;
    padding: 12px 0;
  }
`;

export const NavLink = styled(Link)`
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  &:hover {
    color: #22c55e;
  }
`;

export const AuthBtn = styled(Link)`
  border: 1.5px solid #22c55e;
  color: #22c55e !important;
  padding: 6px 18px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 13px;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    background-color: #22c55e;
    color: #0a1f3a !important;
  }
`;

export const ActionBtn = styled.button`
  border: 1.5px solid #22c55e;
  background: transparent;
  color: #22c55e;
  padding: 6px 14px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #22c55e;
    color: #0a1f3a;
  }
`;

export const CartBadge = styled.span`
  margin-left: 4px;
  background: #22c55e;
  color: #0a1f3a;
  border-radius: 999px;
  padding: 1px 7px;
  font-size: 11px;
  font-weight: 700;
`;

export const MenuToggle = styled.button`
  display: none;
  background: none;
  border: 1.5px solid #22c55e;
  color: #22c55e;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  @media (max-width: 900px) {
    display: block;
  }
`;

/* ==================== LOGIN CARD ==================== */

export const Card = styled.div`
  background: var(--bg-card);
  width: 100%;
  max-width: 420px;
  border-radius: 14px;
  padding: 36px 36px 32px;
  box-shadow: var(--shadow);
  position: relative;
  border: 1px solid var(--border);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--primary);
    border-radius: 14px 14px 0 0;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 6px;
  letter-spacing: -0.3px;
`;

export const Subtitle = styled.p`
  text-align: center;
  color: var(--text-muted);
  font-size: 14px;
  margin: 0 0 28px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Field = styled.div`
  margin-bottom: 16px;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 6px;
`;

export const PasswordLabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
`;

export const ForgotLink = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-size: 13px;
  color: var(--primary);
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const InputIcon = styled.span`
  position: absolute;
  left: 13px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  font-size: 15px;
  pointer-events: none;
  line-height: 1;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 14px 12px 40px;
  border: 1.5px solid ${({ $hasError }) => ($hasError ? '#dc2626' : 'var(--border)')};
  border-radius: 8px;
  font-size: 14px;
  color: var(--text-main);
  outline: none;
  background: var(--input-bg);
  transition: border-color 0.2s;
  box-sizing: border-box;

  &::placeholder {
    color: var(--text-muted);
  }

  &:focus {
    border-color: ${({ $hasError }) => ($hasError ? '#dc2626' : 'var(--primary)')};
  }
`;

export const EyeBtn = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: var(--text-muted);
  font-size: 15px;
  line-height: 1;
  display: flex;
  align-items: center;

  &:hover {
    color: var(--text-main);
  }
`;

export const ErrorText = styled.div`
  color: #dc2626;
  font-size: 12px;
  margin-top: 5px;
`;

export const RememberRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 4px 0 18px;
`;

export const RememberLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text-main);
  cursor: pointer;

  input {
    width: 15px;
    height: 15px;
    accent-color: var(--primary);
    cursor: pointer;
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  padding: 14px 20px;
  background-color: var(--primary);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--primary-hover);
  }

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 22px 0 18px;
  color: var(--text-muted);
  font-size: 13px;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  span {
    padding: 0 14px;
  }
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 22px;
`;

export const SocialBtn = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 11px 12px;
  border: 1.5px solid var(--border);
  border-radius: 8px;
  background: var(--bg-card);
  font-size: 14px;
  font-weight: 500;
  color: var(--text-main);
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--bg-page);
  }
`;

export const FooterText = styled.p`
  text-align: center;
  font-size: 14px;
  color: var(--text-muted);
  margin: 0;

  a {
    color: var(--primary);
    font-weight: 600;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

/* ==================== FOOTER STYLES ==================== */

export const FooterWrap = styled.footer`
  background: var(--bg-card);
  border-top: 1px solid var(--border);
  padding: 48px 24px 0;
`;

export const FooterContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  padding-bottom: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

export const FooterCol = styled.div`
  h3 {
    font-size: 13px;
    font-weight: 700;
    color: var(--text-main);
    margin: 0 0 16px;
    letter-spacing: 0.4px;
    text-transform: uppercase;
  }

  p {
    font-size: 13px;
    color: var(--text-muted);
    margin: 0 0 6px;
    line-height: 1.55;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 8px;
  }

  a {
    font-size: 13px;
    color: var(--text-muted);
    text-decoration: none;
    transition: color 0.15s;

    &:hover {
      color: var(--primary);
    }
  }
`;

export const Newsletter = styled.div`
  display: flex;
  margin-top: 12px;
  border: 1.5px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  background: var(--input-bg);

  input {
    flex: 1;
    border: none;
    outline: none;
    padding: 10px 14px;
    font-size: 13px;
    color: var(--text-main);
    background: transparent;
    font-family: inherit;

    &::placeholder {
      color: var(--text-muted);
    }
  }

  button {
    width: 44px;
    border: none;
    background: var(--primary);
    color: white;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s;

    &:hover {
      background: var(--primary-hover);
    }
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid var(--border);
  padding: 18px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;

  p {
    margin: 0;
    font-size: 12px;
    color: var(--text-muted);
  }
`;

export const Social = styled.div`
  display: flex;
  gap: 14px;

  a {
    color: var(--text-muted);
    font-size: 14px;
    text-decoration: none;
    transition: color 0.15s;

    &:hover {
      color: var(--primary);
    }
  }
`;