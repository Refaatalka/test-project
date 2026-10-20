import styled from 'styled-components';
import { badgeColors } from '../../constants/badgeColors';

export const Card = styled.div`
  background: var(--bg-card);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  position: relative;
  color: var(--text-main);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
  }
`;

export const ImagePlaceholder = styled.div`
  height: 180px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
  position: relative;
`;

export const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
  background: var(--bg-card);
`;

export const Badge = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  background: ${({ $type }) => badgeColors[$type] || '#28a745'};
  color: white;
  font-size: 11px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
  width: fit-content;
  z-index: 2;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

export const Name = styled.h3`
  margin: 0;
  font-size: 18px;
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
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  a {
    flex: 1;
    text-decoration: none;
  }

  button {
    width: 100%;
  }
`;

export const CubeIcon = styled.span`
  font-size: 48px;
  line-height: 1;
  color: #ffffff;

  &::before {
    content: '📦';
  }
`;

export const Stars = styled.span`
  color: #f59e0b;
  letter-spacing: 2px;
  font-size: 15px;
`;

export const DetailsBtn = styled.button`
  min-height: 40px;
  padding: 0 16px;
  border: 1px solid var(--primary);
  border-radius: 8px;
  background: transparent;
  color: var(--primary);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--primary);
    color: #ffffff;
  }
`;

export const AddBtn = styled.button`
  min-height: 40px;
  padding: 0 16px;
  border: 1px solid var(--primary);
  border-radius: 8px;
  background: var(--primary);
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--primary-hover);
  }
`;