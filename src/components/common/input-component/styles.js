import styled from 'styled-components';

export const FieldWrapper = styled.div`
  margin-bottom: 16px;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  border: 1.5px solid ${({ $hasError }) => ($hasError ? '#dc2626' : '#e5e7eb')};
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ $hasError }) => ($hasError ? '#dc2626' : '#22c55e')};
  }
`;

export const ErrorText = styled.div`
  color: #dc2626;
  font-size: 12px;
  margin-top: 6px;
`;