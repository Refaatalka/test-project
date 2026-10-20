import styled from 'styled-components';

export const PageWrapper = styled.div`
  min-height: 80vh;
  padding: 30px 40px 60px;
  background: var(--bg-page);
  color: var(--text-main);

  @media (max-width: 768px) {
    padding: 20px 16px 40px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 24px;

  span {
    font-size: 16px;
    font-weight: 500;
    color: var(--text-muted);
  }
`;

export const EmptyBox = styled.div`
  background: var(--bg-card);
  border-radius: 16px;
  padding: 48px 24px;
  text-align: center;
  border: 1px solid var(--border);

  p {
    margin-bottom: 16px;
    color: var(--text-muted);
  }

  a {
    color: var(--primary);
    font-weight: 600;
    text-decoration: none;
  }
`;

export const OrdersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const OrderCard = styled.div`
  background: var(--bg-card);
  border-radius: 16px;
  padding: 20px;
  border: 1px solid var(--border);
`;

export const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);

  strong {
    display: block;
    font-size: 16px;
    margin-bottom: 4px;
  }

  span {
    font-size: 13px;
    color: var(--text-muted);
  }
`;

export const OrderTotal = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: var(--text-price);
`;

export const OrderProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProductRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  color: var(--text-main);
`;
export const TotalPrice = styled.div`
  margin-top: 28px;
  padding: 18px 20px;
  background: var(--bg-card);
  border-radius: 16px;
  border: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;

  span {
    color: var(--text-muted);
  }

  strong {
    font-size: 20px;
    color: var(--text-price);
  }
`;