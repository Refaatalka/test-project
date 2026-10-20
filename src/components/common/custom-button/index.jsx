import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  padding: 13px 20px;
  background-color: ${({ $variant }) => ($variant === 'secondary' ? '#ffffff' : '#22c55e')};
  color: ${({ $variant }) => ($variant === 'secondary' ? '#374151' : '#ffffff')};
  border: ${({ $variant }) => ($variant === 'secondary' ? '1.5px solid #e5e7eb' : 'none')};
  border-radius: 8px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ $variant }) => ($variant === 'secondary' ? '#f9fafb' : '#16a34a')};
  }

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`;

function CustomButton({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
}) {
  return (
    <Button
      type={type}
      onClick={onClick}
      $variant={variant}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}

export default CustomButton;