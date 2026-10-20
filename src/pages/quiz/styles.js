import styled from 'styled-components';

export const PageWrapper = styled.div`
  min-height: calc(100vh - 180px);
  background: linear-gradient(180deg, #0d2b4e 0%, #0a1f3a 100%);
  padding: 40px 20px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuizCard = styled.div`
  background: var(--bg-card);
  width: 100%;
  max-width: 640px;
  border-radius: 16px;
  padding: 36px 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: #22c55e;
    border-radius: 16px 16px 0 0;
  }

  @media (max-width: 500px) {
    padding: 28px 20px;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: var(--border);
  border-radius: 4px;
  margin-bottom: 24px;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  height: 100%;
  width: ${({ $percent }) => $percent}%;
  background: var(--primary);
  border-radius: 4px;
  transition: width 0.3s ease;
`;

export const QuestionCounter = styled.p`
  font-size: 13px;
  color: var(--text-muted);
  margin: 0 0 8px;
  font-weight: 500;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 8px;

  @media (max-width: 500px) {
    font-size: 22px;
  }
`;

export const Subtitle = styled.p`
  text-align: center;
  color: var(--text-muted);
  font-size: 14px;
  margin: 0 0 28px;
`;

export const ResultBox = styled.div`
  text-align: center;
  padding: 20px 0;
`;

export const ScoreText = styled.p`
  font-size: 48px;
  font-weight: 700;
  color: var(--primary);
  margin: 16px 0;

  span {
    font-size: 24px;
    color: #6b7280;
  }
`;

export const ResultMessage = styled.p`
  font-size: 18px;
  color: var(--text-main);
  margin-bottom: 28px;
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
