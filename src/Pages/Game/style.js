import styled, { keyframes } from 'styled-components';

const startAnimation = keyframes`
  0% { transform: translateX(-5px) }
  100% { transform: translateX(0); opacity: 1; }
`;

const GameWrapper = styled.main`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  
  * {
      transform: translateX(-5px);
      opacity: 0.5;
      animation: .2s linear ${startAnimation};
      animation-fill-mode: forwards;
    }

`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 50px;
  line-height: 150%;
  text-align: center;
  color: #3A7859;
  margin: 134px 0 26px;
  
  @media(max-width: 500px) {
    font-size: 30px;
    margin: 24px 0 10px;
  }
`;

const Score = styled.p`
  font-weight: bold;
  font-size: 30px;
  line-height: 150%;
  text-align: center;
  color: #354153;
  margin: 148px 0 72px;
  @media(max-width: 500px) {
    font-size: 28px;
    margin: 44px 0 36px;
  }
`;

const QuestionText = styled.p`
  font-weight: bold;
  font-size: 30px;
  line-height: 150%;
  text-align: center;
  color: #354153;
  margin: 87px 0 72px;
  padding: 0 10px;

  @media(max-width: 500px) {
    font-size: 20px;
    margin: 44px 0 36px;
  }
`;

const Answers = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1100px;
  width: 90%;
   button + button {
     margin-left: 25px;
   }
   @media(max-width: 800px) {
    flex-wrap: wrap;
    align-items: baseline;

    button + button {
     margin-left: 0;
   }

    button {
     margin: 10px 5px 0 5px;
   }
  }
`;

const QuestionLevel = styled.div`
  padding: 4px 8px 6px;
  width: 100px;
  height: 37px;
  background: #42A976;
  border-radius: 12px 0px 12px 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 170%;
  color: #FFFFFF;
  margin: 0px 10px;
  text-align: center;
  text-transform: capitalize;
`;

export const S = { GameWrapper, Title, QuestionText, Answers, QuestionLevel, Score, };
