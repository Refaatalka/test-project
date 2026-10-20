import styled from 'styled-components';
import { badgeColors } from '../../constants/badgeColors';

export const Card = styled.div`
  background: var(--bg-card);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  display: flex;
  gap: 20px;
  padding: 20px;
  align-items: center;
  color: var(--text-main);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.16);
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const ImagePlaceholder = styled.div`
  width: 180px;
  height: 140px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
  flex-shrink: 0;
  position: relative;

  @media (max-width: 600px) {
    width: 100%;
    height: 160px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

export const Badge = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background: ${({ $type }) => badgeColors[$type] || '#28a745'};
  color: white;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 12px;
  width: fit-content;
  z-index: 2;
`;

export const Name = styled.h3`
  margin: 0;
  font-size: 20px;
  color: var(--text-main);
`;

export const Category = styled.span`
  color: var(--text-muted);
  font-size: 13px;
`;

export const Description = styled.p`
  color: var(--text-muted);
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
`;

export const Price = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: var(--text-price);

  span {
    font-size: 14px;
    font-weight: 500;
    color: var(--text-muted);
  }
`;

export const Rating = styled.div`
  font-size: 13px;
  color: var(--text-muted);
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 8px;

  a {
    flex: 1;
    text-decoration: none;
  }

  button {
    width: 100%;
  }
`;