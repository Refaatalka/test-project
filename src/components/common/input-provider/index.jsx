import React from 'react';
import InputComponent from '../input-component';
import { InputTypes } from '../../../constants/enums';
import { CheckboxWrapper, CheckboxLabel, ErrorText } from './styles';

function InputProvider({ itemObject }) {
  const {
    type,
    fieldLabel,
    name,
    fieldValue,
    onChangeFunction,
    onBlurFunction,
    placeholder,
    error,
    touched,
  } = itemObject;

  if (type === InputTypes.CHECKBOX) {
    return (
      <CheckboxWrapper>
        <CheckboxLabel>
          <input
            type="checkbox"
            name={name}
            checked={!!fieldValue}
            onChange={(e) => onChangeFunction(e.target.checked)}
            onBlur={onBlurFunction}
          />
          <span>{fieldLabel}</span>
        </CheckboxLabel>
        {touched && error ? <ErrorText>{error}</ErrorText> : null}
      </CheckboxWrapper>
    );
  }

  return (
    <InputComponent
      fieldLabel={fieldLabel}
      name={name}
      fieldValue={fieldValue}
      onChangeFunction={onChangeFunction}
      onBlurFunction={onBlurFunction}
      placeholder={placeholder}
      type={type}
      error={error}
      touched={touched}
    />
  );
}

export default InputProvider;