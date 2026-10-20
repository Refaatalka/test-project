import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const QuestionText = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 8px;
  line-height: 1.45;
`;

export const OptionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const OptionBtn = styled.button`
  width: 100%;
  text-align: left;
  padding: 14px 16px;
  border: 1.5px solid ${({ $selected }) => ($selected ? '#22c55e' : '#e5e7eb')};
  background: ${({ $selected }) => ($selected ? '#f0fdf4' : '#ffffff')};
  border-radius: 10px;
  font-size: 15px;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #22c55e;
    background: #f0fdf4;
  }
`;
