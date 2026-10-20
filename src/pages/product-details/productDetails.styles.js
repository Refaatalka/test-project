import styled from 'styled-components';
import { badgeColors } from '../../constants/badgeColors';

export const PageWrapper = styled.div`
  min-height: 80vh;
  padding: 30px 40px 60px;
  background: var(--bg-page);
  color: var(--text-main);

  @media (max-width: 768px) {
    padding: 20px 16px 40px;
  }
`;

export const Breadcrumb = styled.div`
  font-size: 14px;
  color: var(--text-muted);
  margin-bottom: 12px;

  a {
    color: var(--primary);

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    color: var(--text-main);
    font-weight: 600;
  }
`;

export const BackLink = styled.div`
  margin-bottom: 25px;

  a {
    color: var(--primary);
    font-size: 15px;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 6px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  gap: 40px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 30px;
  box-shadow: var(--shadow);
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    gap: 24px;
  }
`;

export const ImageBox = styled.div`
  width: 320px;
  height: 280px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  color: #ffffff;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 220px;
    font-size: 60px;
  }
`;

export const InfoBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Badge = styled.span`
  background: ${({ $type }) => badgeColors[$type] || '#28a745'};
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
  width: fit-content;
`;

export const ProductName = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin: 0;
  color: var(--text-main);

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const Category = styled.span`
  color: var(--text-muted);
  font-size: 14px;
`;

export const Rating = styled.div`
  font-size: 15px;
  color: var(--text-muted);
`;

export const Description = styled.p`
  color: var(--text-muted);
  font-size: 15px;
  line-height: 1.6;
  margin: 8px 0;
`;

export const Price = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: var(--text-price);

  span {
    font-size: 16px;
    font-weight: 500;
    color: var(--text-muted);
  }
`;

export const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 15px 0;
`;

export const QtyBtn = styled.button`
  width: 36px;
  height: 36px;
  border: 1px solid var(--border);
  background: var(--bg-muted);
  color: var(--text-main);
  border-radius: 8px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover:not(:disabled) {
    background: var(--border);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  ${({ $atMaxQuantity }) =>
    $atMaxQuantity &&
    `
      border-color: #dc2626;
      color: #dc2626;
      opacity: 1;
    `}
`;

export const QtyValue = styled.span`
  font-size: 18px;
  font-weight: 600;
  min-width: 30px;
  text-align: center;
  color: var(--text-main);
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const RelatedSection = styled.div`
  h2 {
    font-size: 22px;
    margin-bottom: 20px;
    color: var(--text-main);
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--primary);
  }

  .swiper-pagination-bullet {
    background: var(--text-muted);
  }

  .swiper-pagination-bullet-active {
    background: #22c55e;
  }

  .related-swiper {
    padding-bottom: 40px;
  }
`;

export const MaxQtyMessage = styled.p`
  color: #dc2626;
  font-size: 14px;
  font-weight: 600;
  margin: -4px 0 8px;
`;

export const RelatedCard = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow);
  height: 100%;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
  }
`;

export const RelatedImage = styled.div`
  height: 150px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 42px;
  color: #ffffff;
  position: relative;
`;

export const RelatedBadge = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  background: ${({ $type }) => badgeColors[$type] || '#28a745'};
  color: #ffffff;
  font-size: 11px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
  z-index: 2;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

export const RelatedContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: var(--bg-card);
`;

export const RelatedCategory = styled.span`
  font-size: 12px;
  color: var(--text-muted);
`;

export const RelatedName = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: var(--text-main);
`;

export const RelatedDescription = styled.p`
  margin: 0;
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const RelatedRating = styled.div`
  font-size: 13px;
  color: var(--text-muted);
`;

export const RelatedPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: var(--text-price);

  span {
    font-size: 13px;
    font-weight: 500;
    color: var(--text-muted);
  }
`;
