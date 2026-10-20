import React from 'react';
import { Card, QuestionText, OptionsList, OptionBtn } from './styles';

function QuestionCard({ question, options, selectedOption, onSelect }) {
  return (
    <Card>
      <QuestionText>{question}</QuestionText>
      <OptionsList>
        {options.map((option) => (
          <OptionBtn
            key={option}
            type="button"
            $selected={selectedOption === option}
            onClick={() => onSelect(option)}
          >
            {option}
          </OptionBtn>
        ))}
      </OptionsList>
    </Card>
  );
}

export default QuestionCard;
