import React from 'react';
import { FieldWrapper, Label, Input, ErrorText } from './styles';

function InputComponent({
  fieldLabel,
  fieldValue,
  onChangeFunction,
  onBlurFunction,
  placeholder,
  type = 'text',
  name,
  error,
  touched,
}) {
  const inputId = name || (fieldLabel?.toLowerCase().replace(/\s+/g, '-') || undefined);
  const hasError = touched && error;

  return (
    <FieldWrapper>
      {fieldLabel && <Label htmlFor={inputId}>{fieldLabel}</Label>}
      <Input
        id={inputId}
        name={name}
        type={type}
        value={fieldValue ?? ''}
        onChange={(e) => onChangeFunction(e.target.value)}
        onBlur={onBlurFunction}
        placeholder={placeholder}
        $hasError={!!hasError}
      />
      {hasError ? <ErrorText>{error}</ErrorText> : null}
    </FieldWrapper>
  );
}

export default InputComponent;