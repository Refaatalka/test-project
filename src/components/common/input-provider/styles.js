import styled from 'styled-components';

export const CheckboxWrapper = styled.div`
  margin-bottom: 16px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 13px;
  color: #374151;
  cursor: pointer;

  input {
    margin-top: 3px;
    accent-color: #22c55e;
    cursor: pointer;
  }

  a {
    color: #22c55e;
    font-weight: 600;
  }
`;

export const ErrorText = styled.div`
  color: #dc2626;
  font-size: 12px;
  margin-top: 6px;
`;