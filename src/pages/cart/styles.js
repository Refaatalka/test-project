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

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: var(--danger);
  cursor: pointer;
  font-size: 13px;
  padding: 0;
  &:hover {
    text-decoration: underline;
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

export const SuccessText = styled.p`
  margin-bottom: 16px;
  color: #155724;
  font-weight: bold;
  font-size: 18px;
`;

export const CartLayout = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

export const CartList = styled.div`
  flex: 1;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CartItem = styled.div`
  background: var(--bg-card);
  border-radius: 16px;
  padding: 16px;
  display: flex;
  gap: 16px;
  align-items: center;
  border: 1px solid var(--border);
  .item-img {
    width: 72px;
    height: 72px;
    border-radius: 12px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
  }
  .item-details {
    flex: 1;
    h3 {
      margin: 0 0 4px;
      font-size: 16px;
      a {
        color: inherit;
        text-decoration: none;
      }
    }
    .cat {
      font-size: 13px;
      color: var(--text-muted);
    }
    .price {
      margin-top: 6px;
      font-size: 18px;
      font-weight: 700;
      color: var(--text-price);
    }
  }
  .item-actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-end;
  }
`;

export const QtyControl = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--border);
  border-radius: 8px;
  button {
    width: 32px;
    height: 32px;
    border: none;
    background: var(--bg-muted);
    color: var(--text-main);
    cursor: pointer;
  }
  span {
    min-width: 28px;
    text-align: center;
    font-weight: 600;
  }
`;

export const Summary = styled.div`
  width: 300px;
  background: var(--bg-card);
  border-radius: 16px;
  padding: 20px;
  border: 1px solid var(--border);
  height: fit-content;
  .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    color: var(--text-muted);
    strong {
      color: var(--text-main);
      font-size: 18px;
    }
  }
  button {
    width: 100%;
    padding: 12px;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    border: none;
  }
  .btn-checkout {
    background: var(--primary);
    color: #fff;
    margin-top: 12px;
  }
  .btn-clear {
    background: transparent;
    border: 1px solid var(--border);
    color: var(--text-muted);
    margin-top: 8px;
  }
`;

export const SummaryTitle = styled.h3`
  margin: 0 0 16px;
`;