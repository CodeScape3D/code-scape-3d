import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import ArrowLeft from '../../assets/icons/arrow-left.svg';
import ArrowRight from '../../assets/icons/arrow-right.svg';
import { BasicButton } from '../../components';
import {
  AnswerButton,
  WrongAnswerDialog,
  CorrectAnswerDialog,
  AnswersGrid,
  QuizQuestion,
  QuizStatement,
} from '../components';
import {
  canFinishQuiz,
  formatQuestionIndicator,
  getQuizByName,
  getAnimationNameByQuizName,
} from '../helpers';
import { questionStates, questionType } from '../constants';
import {
  answerSelected,
  checkAnswer,
  computeResults,
  goToNextQuestion,
  goToPreviousQuestion,
  setQuiz,
} from '../../store';
import { useTranslation } from 'react-i18next';
import useActivity from '../../hooks/useActivity';

export const QuizView = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { quizName } = useParams();
  const quiz = React.useMemo(() => getQuizByName(quizName), [quizName]);
  const { currentQuestion, currentQuestionIndex, totalQuestions, questions } =
    useSelector(state => state.quiz);
  const dispatch = useDispatch();
  const { trackActivity } = useActivity();
  const [quizStartTime] = useState(() => Date.now());

  if (!quiz) {
    return <Navigate to="/404" />;
  }

  useEffect(() => {
    if (totalQuestions === 0) {
      dispatch(setQuiz(quiz));
    }
  }, []);

  const { options, statement, question, selectedAnswer, state, type } =
    currentQuestion;
  const isPreviousButtonVisible = React.useMemo(
    () => currentQuestionIndex > 0,
    [currentQuestionIndex]
  );
  const isQuestionCorrect = React.useMemo(
    () => state === questionStates.CORRECT,
    [state]
  );
  const isQuestionIncorrect = React.useMemo(
    () => state === questionStates.INCORRECT,
    [state]
  );
  const isQuestionTypePractical = React.useMemo(
    () => type == questionType.PRACTICAL,
    [type]
  );
  const shouldShowFeedbackButton = React.useMemo(
    () => isQuestionIncorrect && isQuestionTypePractical,
    [isQuestionIncorrect, isQuestionTypePractical]
  );
  const isQuizAtTheEnd = React.useMemo(
    () => currentQuestionIndex === totalQuestions - 1,
    [currentQuestionIndex, totalQuestions]
  );
  const [isAlertDialogVisible, setIsAlertDialogVisible] = useState(false);

  const handleOnNextQuestion = () => {
    // Si no ha seleccionado ninguna respuesta, no hacer nada
    if (selectedAnswer === null) {
      return;
    }

    if (state === questionStates.UNANSWERED && selectedAnswer != null) {
      dispatch(checkAnswer());
      return;
    }
    dispatch(goToNextQuestion());
  };

  const handleOnPreviousQuestion = () => {
    dispatch(goToPreviousQuestion());
  };

  const handleOnQuizAtTheEnd = () => {
    if (canFinishQuiz(questions)) {
      dispatch(checkAnswer());
      dispatch(computeResults());

      // Calcular duración real en segundos
      const duracionSegundos = Math.round((Date.now() - quizStartTime) / 1000);
      trackActivity('ejercicio_completado', quizName, duracionSegundos);

      setTimeout(() => {
        navigate('/quiz/results');
      }, 1200);

      return;
    }

    if (
      currentQuestion.state === questionStates.UNANSWERED ||
      currentQuestion.selectedAnswer == null
    ) {
      dispatch(checkAnswer());
      return;
    }

    setIsAlertDialogVisible(true);
  };

  const handleOnAnswerSelected = answer => {
    dispatch(answerSelected(answer));
  };

  const handleOnCloseAlertDialog = () => {
    setIsAlertDialogVisible(false);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row flex-grow w-full bg-gray-100">
        {/* Panel izquierdo - Navegación y retroalimentación (STICKY REAL) */}
        <aside className="w-full lg:w-80 lg:sticky lg:top-20 lg:h-fit bg-white rounded-lg shadow-sm p-6 m-4 flex-shrink-0">
          {/* Progreso */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-gray-700 uppercase">
                Progreso
              </h3>
              <span className="text-lg font-bold text-primary">
                {Math.round(
                  ((currentQuestionIndex + 1) / totalQuestions) * 100
                )}
                %
              </span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-3">
              <div
                className="bg-primary h-3 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`,
                }}
              ></div>
            </div>
            <div className="mt-2 text-xs text-gray-600 text-center">
              Pregunta {currentQuestionIndex + 1} de {totalQuestions}
            </div>
          </div>

          {/* Retroalimentación */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-gray-700 uppercase mb-4">
              Retroalimentación
            </h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {isQuestionCorrect && <CorrectAnswerDialog />}
              {isQuestionIncorrect && (
                <WrongAnswerDialog
                  correctAnswer={currentQuestion.answer}
                  correctOption={
                    currentQuestion.options[currentQuestion.answer]
                  }
                  feedback={currentQuestion.feedback}
                />
              )}
              {state === questionStates.UNANSWERED && (
                <div className="bg-gray-100 py-3 px-4 rounded-lg text-sm text-gray-600 text-center">
                  Selecciona una respuesta para continuar
                </div>
              )}
            </div>
          </div>

          {/* Botones de navegación */}
          <div className="space-y-3 border-t pt-6">
            <div className="flex gap-2">
              {isPreviousButtonVisible && (
                <button
                  onClick={handleOnPreviousQuestion}
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 rounded-lg transition-colors text-sm font-semibold"
                >
                  <img src={ArrowLeft} width="18" /> {t('previous')}
                </button>
              )}
              {isQuizAtTheEnd ? (
                <button
                  onClick={handleOnQuizAtTheEnd}
                  className={`${isPreviousButtonVisible ? 'flex-1' : 'w-full'} flex items-center justify-center gap-2 bg-success hover:bg-green-700 text-white px-3 py-2 rounded-lg transition-colors text-sm font-semibold`}
                >
                  {t('finish')}
                </button>
              ) : (
                <button
                  onClick={handleOnNextQuestion}
                  className={`${isPreviousButtonVisible ? 'flex-1' : 'w-full'} flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed`}
                  disabled={selectedAnswer === null}
                >
                  {t('next')} <img src={ArrowRight} width="18" />
                </button>
              )}
            </div>

            {shouldShowFeedbackButton && (
              <button
                onClick={() => {
                  navigate(
                    `/animacion/${getAnimationNameByQuizName(quiz.name)}`
                  );
                }}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg transition-colors text-sm font-semibold"
              >
                Ver retroalimentación
              </button>
            )}
          </div>
        </aside>

        {/* Panel derecho - Pregunta y opciones */}
        <main className="flex-1 p-4 overflow-y-auto">
          <section className="bg-white rounded-lg shadow-sm p-8 max-w-3xl">
            <QuizQuestion question={question} />

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-gray-600 mb-4 uppercase">
                Selecciona la respuesta correcta:
              </h3>
              <AnswersGrid>
                {Object.entries(options).map(([key, value]) => (
                  <AnswerButton
                    key={key}
                    answerLetter={key}
                    answerContent={value}
                    onAnswerSelected={handleOnAnswerSelected}
                    isSelected={selectedAnswer === key}
                    disabled={state !== questionStates.UNANSWERED}
                  />
                ))}
              </AnswersGrid>
            </div>
          </section>
        </main>
      </div>

      <Dialog open={isAlertDialogVisible} onClose={handleOnCloseAlertDialog}>
        <DialogTitle>{'Importante'}</DialogTitle>

        <DialogContent>
          <DialogContentText>{t('uncompletedQuizText')}</DialogContentText>
        </DialogContent>

        <DialogActions>
          <BasicButton onClick={handleOnCloseAlertDialog}>
            {t('accept')}
          </BasicButton>
        </DialogActions>
      </Dialog>
    </>
  );
};
