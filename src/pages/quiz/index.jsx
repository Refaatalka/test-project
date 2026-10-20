import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import QuestionCard from '../../components/question-card';
import CustomButton from '../../components/common/custom-button';
import {
  PageWrapper,
  QuizCard,
  ProgressBar,
  ProgressFill,
  QuestionCounter,
  Title,
  ResultBox,
  ScoreText,
  ResultMessage,
  ButtonsRow,
} from './styles';

const questionsArray = [
  {
    id: 1,
    question: {
      en: 'Which hook is used to store state in React?',
      ar: 'أي Hook يُستخدم لتخزين الحالة في React؟',
    },
    options: {
      en: ['useState', 'useEffect', 'useRef', 'useMemo'],
      ar: ['useState', 'useEffect', 'useRef', 'useMemo'],
    },
    answer: 'useState',
  },
  {
    id: 2,
    question: {
      en: 'What is used to pass data from a parent component to a child component?',
      ar: 'ما الذي يُستخدم لتمرير البيانات من المكوّن الأب إلى المكوّن الابن؟',
    },
    options: {
      en: ['State', 'Props', 'Context only', 'Refs'],
      ar: ['State', 'Props', 'Context فقط', 'Refs'],
    },
    answer: 'Props',
  },
  {
    id: 3,
    question: {
      en: 'Which of the following is a valid way to create a React component?',
      ar: 'أي مما يلي طريقة صحيحة لإنشاء مكوّن React؟',
    },
    options: {
      en: [
        'function MyComponent() {}',
        'class MyComponent extends Component {}',
        'Both A and B',
        'None of the above',
      ],
      ar: [
        'function MyComponent() {}',
        'class MyComponent extends Component {}',
        'كلاهما A و B',
        'لا شيء مما سبق',
      ],
    },
    answer: 'Both A and B',
  },
  {
    id: 4,
    question: {
      en: 'What does the useEffect hook do?',
      ar: 'ماذا يفعل الـ useEffect hook؟',
    },
    options: {
      en: [
        'Manages local state',
        'Handles side effects in function components',
        'Creates refs',
        'Memoizes values',
      ],
      ar: [
        'يدير الحالة المحلية',
        'يتعامل مع التأثيرات الجانبية في المكونات الوظيفية',
        'ينشئ refs',
        'يحفظ القيم مؤقتاً',
      ],
    },
    answer: 'Handles side effects in function components',
  },
  {
    id: 5,
    question: {
      en: 'Which hook would you use to get a mutable ref object that persists across renders?',
      ar: 'أي Hook تستخدمه للحصول على كائن ref قابل للتغيير يستمر عبر عمليات إعادة التصيير؟',
    },
    options: {
      en: ['useState', 'useEffect', 'useRef', 'useCallback'],
      ar: ['useState', 'useEffect', 'useRef', 'useCallback'],
    },
    answer: 'useRef',
  },
];

function Quiz() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const totalQuestions = questionsArray.length;
  const currentQ = questionsArray[currentQuestion];

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const correctAnswer =
      lang === 'ar'
        ? currentQ.options.ar[currentQ.options.en.indexOf(currentQ.answer)] || currentQ.answer
        : currentQ.answer;

    if (selectedOption === correctAnswer || selectedOption === currentQ.answer) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestion + 1 < totalQuestions) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
  };

  const getResultMessage = () => {
    const percent = (score / totalQuestions) * 100;
    if (percent === 100) return t('perfectScore');
    if (percent >= 60) return t('goodScore');
    return t('lowScore');
  };

  return (
    <div>
      <Header />
      <PageWrapper>
        <QuizCard>
          {!showResult ? (
            <>
              <Title>{t('reactQuiz')}</Title>
              <p>{t('quizSubtitle')}</p>

              <QuestionCounter>
                {t('questionOf', {
                  current: currentQuestion + 1,
                  total: totalQuestions,
                })}
              </QuestionCounter>
              <ProgressBar>
                <ProgressFill
                  $percent={(currentQuestion / totalQuestions) * 100}
                />
              </ProgressBar>

              <QuestionCard
                question={currentQ.question[lang] || currentQ.question.en}
                options={currentQ.options[lang] || currentQ.options.en}
                selectedOption={selectedOption}
                onSelect={handleSelect}
              />

              <ButtonsRow>
                <CustomButton
                  onClick={handleNext}
                  disabled={!selectedOption}
                >
                  {currentQuestion + 1 === totalQuestions
                    ? t('finish')
                    : t('next')}
                </CustomButton>
              </ButtonsRow>
            </>
          ) : (
            <ResultBox>
              <Title>{t('quizCompleted')}</Title>
              <ScoreText>
                {score}
                <span> / {totalQuestions}</span>
              </ScoreText>
              <ResultMessage>{getResultMessage()}</ResultMessage>
              <ProgressBar>
                <ProgressFill $percent={(score / totalQuestions) * 100} />
              </ProgressBar>
              <ButtonsRow>
                <CustomButton onClick={handleRestart}>
                  {t('tryAgain')}
                </CustomButton>
              </ButtonsRow>
            </ResultBox>
          )}
        </QuizCard>
      </PageWrapper>
      <Footer />
    </div>
  );
}

export default Quiz;