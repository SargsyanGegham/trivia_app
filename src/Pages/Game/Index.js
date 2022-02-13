import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import { setAnswer } from "../../Store/Actions";
import { RESET_QUESTIONS } from "../../Store/ActionTypes";
import { getAppStore } from "../../Store/Selectors";
import { randomList } from "../../Utils";
import { S } from "./style";

const Game = () => {
  const [step, setStep] = useState(0);
  const { questions, answers, isLoading } = useSelector(getAppStore);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch({type: RESET_QUESTIONS});
    }
  }, []);

   const answersList = (question) => 
     question ?
       randomList(
         [...(question?.incorrect_answers || []), question?.correct_answer]
       ) : [];

    const handleNextStep = (answer) => () => {
      const isTrueAnswer = questions[step]?.correct_answer === answer;
      let winCount = answers[questions[step].category]?.winCount || 0;
      if (winCount > 0 && step === 0) {
        winCount = 0;
      };
      const params = {
        category: questions[step].category,
        winCount: isTrueAnswer ? winCount + 1 : winCount,
        total: questions.length,
      };
      setStep(prev => prev+1);
      dispatch(setAnswer(params));
    };

  return (
    <S.GameWrapper>
      {questions.map(question => (
        <Fragment key={question?.question}>
          <S.Title>Questions {step > 10 ? step : `0${step + 1}`}</S.Title>
          <S.QuestionLevel>{question?.difficulty}</S.QuestionLevel>
          <S.QuestionText dangerouslySetInnerHTML={{__html: question?.question}} />
          <S.Answers>
            {answersList(question).map(item => 
              <Button key={item} onClick={handleNextStep(item)} type="answer">{item}</Button>
            )}
          </S.Answers>
        </Fragment>
      ))[step]}
      {
        !isLoading && step === questions.length && (
          <>
            <S.Title>Thank You</S.Title>
            <S.Score>Your Score: {answers?.[questions?.[0]?.category]?.winCount} / {answers?.[questions?.[0]?.category]?.total}</S.Score>
            <Button onClick={() => navigate('/')}>Back to home</Button>
          </>
        )
      }
    </S.GameWrapper>
  );
};

export default Game;