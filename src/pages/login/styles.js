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
  padding: 40px 20px 50px;
`;

export const BackHome = styled.a`
  margin-top: 22px;
  color: #ffffff;
  font-size: 14px;
  text-decoration: underline;
  opacity: 0.85;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`;