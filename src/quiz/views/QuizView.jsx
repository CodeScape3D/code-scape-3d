import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
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


export const QuizView = () => {

    const navigate = useNavigate()
    const { quizName } = useParams()
    const quiz = React.useMemo(() => getQuizByName(quizName), [quizName])
    const dispatch = useDispatch()

    if (!quiz) {
        return (
            <Navigate to="/quizzes" />
        )
    }

    useEffect(() => {
        dispatch(setQuiz(quiz))
    } ,[])

    const { currentQuestion, currentQuestionIndex, totalQuestions, questions } = useSelector(state => state.quiz)
    const { options, statement, question, selectedAnswer, state, type } = currentQuestion 
    const isPreviousButtonVisible = React.useMemo(() => currentQuestionIndex > 0, [currentQuestionIndex])
    const isQuestionCorrect = React.useMemo(() => state === questionStates.CORRECT, [state])
    const isQuestionIncorrect = React.useMemo(() => state === questionStates.INCORRECT, [state])
    const isQuestionTypePractical = React.useMemo(() => type == questionType.PRACTICAL, [type])
    const shouldShowFeedbackButton = React.useMemo(() => isQuestionIncorrect && isQuestionTypePractical, [isQuestionIncorrect, isQuestionTypePractical])
    const isQuizAtTheEnd = React.useMemo(() => currentQuestionIndex === totalQuestions - 1, [currentQuestionIndex, totalQuestions])
    const [isAlertDialogVisible, setIsAlertDialogVisible] = useState(false)

    const handleOnNextQuestion = () => {
        if (state === questionStates.UNANSWERED && selectedAnswer != null) {
            dispatch(checkAnswer())
            return
        }
        dispatch(goToNextQuestion())
    }

    const handleOnPreviousQuestion = () => { 
        dispatch(goToPreviousQuestion())
    }

    const handleOnQuizAtTheEnd = () => {
        if (canFinishQuiz(questions)) {
            dispatch(checkAnswer())
            dispatch(computeResults())

            setTimeout(() => {
                navigate("/quiz/results")
            }, 1200)

            return
        }
        setIsAlertDialogVisible(true)
    }

    const handleOnAnswerSelected = (answer) => { 
        dispatch(answerSelected(answer))
    }

    const handleOnCloseAlertDialog = () => {
        setIsAlertDialogVisible(false)
    }

    return (
        <>
            <div className="flex flex-col flex-grow w-full h-full gap-3 p-4 justify-around">
                <section className="flex flex-col md:flex-row flex-1">

                    <div className="question-wrapper">
                        <QuizStatement statement={statement} />
                    </div>

                    <div className="flex p-2 md:p-2 gap-3 flex-col justify-center items-center flex-1">
                        <QuizQuestion question={question} />
                        <AnswersGrid>
                            {
                                Object.entries(options).map(([key, value]) => (
                                    <AnswerButton
                                        key={key}
                                        answerLetter={key}
                                        answerContent={value}
                                        onAnswerSelected={handleOnAnswerSelected}
                                        isSelected={selectedAnswer === key}
                                        disabled={state !== questionStates.UNANSWERED}
                                    />
                                ))
                            }
                        </AnswersGrid>
                        {
                            isQuestionCorrect && <CorrectAnswerDialog />
                        }
                        {
                            isQuestionIncorrect && <WrongAnswerDialog />
                        }
                        {
                            shouldShowFeedbackButton && (
                                <BasicButton onClick={() => { navigate(`/animacion/${quizName}`) }}>
                                    Ver retroalimentación
                                </BasicButton>)
                        }
                    </div>
                </section>

                <section className="w-full flex flex-col gap-2 md:gap-0 md:flex-row items-center justify-between">
                    <div className="flex gap-3">
                        {
                            isPreviousButtonVisible && (
                                <BasicButton onClick={handleOnPreviousQuestion}>
                                    <img src={ArrowLeft} width="24" />  Volver
                                </BasicButton>
                            )
                        }
                        {
                            isQuizAtTheEnd
                                ? (<BasicButton onClick={handleOnQuizAtTheEnd}>Finalizar</BasicButton>)
                                : <BasicButton
                                    onClick={handleOnNextQuestion}>
                                    Siguiente <img src={ArrowRight} width="24" />
                                </BasicButton>
                        }
                    </div>
                    <span className="font-bold">{formatQuestionIndicator(currentQuestionIndex, totalQuestions)}</span>
                </section>
            </div>

            <Dialog
                open={isAlertDialogVisible}
                onClose={handleOnCloseAlertDialog}
            >
                <DialogTitle>
                    {"Importante"}
                </DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        Debes responder todas las preguntas antes de finalizar el quiz.
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <BasicButton onClick={handleOnCloseAlertDialog}>
                        Aceptar
                    </BasicButton>
                </DialogActions>

            </Dialog>

        </>
    )
}
