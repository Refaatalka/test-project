import styled from 'styled-components';


export const Page = styled.div`
  background: var(--bg-page);
  color: var(--text-main);
  min-height: 100vh;
`;

export const PageHeader = styled.div`
  background-color: var(--bg-header);
  color: #ffffff;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin: 0;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  margin: 0;
  max-width: 600px;
  opacity: 0.9;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: var(--bg-card);
  border-bottom: 1px solid var(--border);
  flex-wrap: wrap;
  gap: 15px;

  @media (max-width: 768px) {
    padding: 16px 20px;
  }
`;

export const Categories = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const CategoryBtn = styled.button`
  padding: 8px 18px;
  border: 1px solid var(--border);
  border-radius: 20px;
  background: ${({ $active }) =>
    $active ? 'var(--primary)' : 'var(--bg-muted)'};
  color: ${({ $active }) => ($active ? '#ffffff' : 'var(--text-main)')};
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    background: ${({ $active }) =>
      $active ? 'var(--primary-hover)' : 'var(--border)'};
  }
`;

export const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const SortSelect = styled.select`
  min-height: 40px;
  padding: 0 12px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--bg-muted);
  color: var(--text-main);
  font-size: 14px;
  cursor: pointer;
  outline: none;

  &:focus {
    border-color: var(--primary);
  }
`;

export const ViewToggle = styled.div`
  display: flex;
  gap: 8px;
`;

export const ToggleBtn = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: ${({ $active }) =>
    $active ? 'var(--primary)' : 'var(--bg-muted)'};
  color: ${({ $active }) => ($active ? '#ffffff' : 'var(--text-main)')};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

export const ResultsCount = styled.p`
  padding: 15px 40px;
  margin: 0;
  color: var(--text-muted);
  font-size: 15px;
  background: var(--bg-page);

  @media (max-width: 768px) {
    padding: 12px 20px;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  padding: 20px 40px 60px;
  background: var(--bg-page);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 16px 16px 40px;
    gap: 16px;
  }
`;

export const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 40px 60px;
  background: var(--bg-page);

  @media (max-width: 600px) {
    padding: 16px 16px 40px;
  }
`;

export const EmptyMessage = styled.p`
  text-align: center;
  padding: 60px;
  color: var(--text-muted);
  font-size: 18px;
  background: var(--bg-page);
`;
