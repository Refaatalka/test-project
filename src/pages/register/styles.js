import styled from 'styled-components';

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #0d2b4e 0%, #0a1f3a 100%);
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
`;

export const Card = styled.div`
  background: #ffffff;
  width: 100%;
  max-width: 460px;
  border-radius: 12px;
  padding: 36px 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: #22c55e;
    border-radius: 12px 12px 0 0;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 6px;
`;

export const Subtitle = styled.p`
  text-align: center;
  color: #6b7280;
  font-size: 14px;
  margin-bottom: 28px;
`;

export const Row = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin: 8px 0 22px;
  font-size: 13px;
  color: #374151;

  input {
    margin-top: 3px;
    accent-color: #22c55e;
    cursor: pointer;
  }

  a {
    color: #22c55e;
    font-weight: 600;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 22px 0;
  color: #9ca3af;
  font-size: 13px;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e5e7eb;
  }

  span {
    padding: 0 12px;
  }
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
`;

export const FooterText = styled.p`
  text-align: center;
  font-size: 14px;
  color: #6b7280;

  a {
    color: #22c55e;
    font-weight: 600;
  }
`;

export const BackHome = styled.a`
  margin-top: 24px;
  color: #ffffff;
  font-size: 14px;
  text-decoration: underline;
  opacity: 0.85;

  &:hover {
    opacity: 1;
  }
`;
export const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #22c55e;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 8px;

  &:hover {
    background-color: #16a34a;
  }
`;

export const SocialButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 11px;
  border: 1.5px solid #e5e7eb;
  border-radius: 8px;
  background: #ffffff;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #f9fafb;
  }
`;
