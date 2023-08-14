import React, { useState } from 'react';
import ArrowLeft from "../../assets/icons/arrow-left.svg"
import ArrowRight from "../../assets/icons/arrow-right.svg"
import { BasicButton } from "../../components"
import {
    AnswerButton,
    WrongAnswerDialog,
    CorrectAnswerDialog,
    AnswersGrid, QuizQuestion,
    QuizStatement
} from "../components"
import { formatQuestionIndicator, getQuizByName } from "../helpers"
import { questionStates } from '../constants';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useQuiz } from '../hooks';


export const QuizView = () => {

    const { quizName } = useParams()
    const quiz = React.useMemo(() => getQuizByName(quizName), [quizName])

    if (!quiz) {
        return (
            <Navigate to="/quizzes" />
        )
    }

    const {
        goToNextQuestion,
        goToPreviousQuestion,
        onCheckAnswer,
        onAnswerSelected,
        currentQuestion,
        totalQuestions,
        currentQuestionIndex,
        currentQuestionState,
        canFinishQuiz,
    } = useQuiz(quiz)


    const { question, statement, options, selectedAnswer } = currentQuestion
    const isPreviousButtonVisible = React.useMemo(() => currentQuestionIndex > 0, [currentQuestionIndex])
    const isQuestionCorrect = React.useMemo(() => currentQuestionState === questionStates.CORRECT, [currentQuestionState])
    const isQuestionIncorrect = React.useMemo(() => currentQuestionState === questionStates.INCORRECT, [currentQuestionState])
    const isQuizAtTheEnd = React.useMemo(() => currentQuestionIndex === totalQuestions - 1, [currentQuestionIndex, totalQuestions])
    const [isAlertDialogVisible, setIsAlertDialogVisible] = useState(false)

    const handleOnNextQuestion = () => {
        if (currentQuestionState === questionStates.UNANSWERED && selectedAnswer != null) {
            onCheckAnswer()
            return
        }
        goToNextQuestion()
    }

    const handleOnQuizAtTheEnd = () => {
        if (canFinishQuiz()) {
            onCheckAnswer()
            return
        }
        setIsAlertDialogVisible(true)
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
                                        onAnswerSelected={onAnswerSelected}
                                        isSelected={selectedAnswer === key}
                                        disabled={currentQuestionState !== questionStates.UNANSWERED}
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
                            isQuestionIncorrect && (
                                <BasicButton onClick={() => {
                                    window.open("https://www.youtube.com/shorts/AzjJj5OK6ZM", "_blank")
                                }}>
                                    Ver retroalimentación
                                </BasicButton>)
                        }
                    </div>
                </section>

                <section className="w-full flex flex-col gap-2 md:gap-0 md:flex-row items-center justify-between">
                    <div className="flex gap-3">
                        {
                            isPreviousButtonVisible && (
                                <BasicButton onClick={goToPreviousQuestion}>
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
