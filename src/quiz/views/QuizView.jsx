import React from 'react';
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
import { linkedListQuiz } from "../data"
import { formatQuestionIndicator } from "../helpers"
import { useQuiz } from "../hooks"
import { questionStates } from '../constants';


export const QuizView = () => {

    const {
        goToNextQuestion,
        goToPreviousQuestion,
        onCheckAnswer,
        onAnswerSelected,
        currentQuestion,
        totalQuestions,
        currentQuestionIndex,
        currentQuestionState
    } = useQuiz(linkedListQuiz)
    const { question, statement, options , selectedAnswer} = currentQuestion
    const isPreviousButtonVisible = React.useMemo(() => currentQuestionIndex > 0, [currentQuestionIndex])

    console.log(currentQuestion);

    const handleOnNextQuestion = () => { 
        if (currentQuestionState === questionStates.UNANSWERED) {
            onCheckAnswer()
            return
        }

        goToNextQuestion()
    }

    return (
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
                                />
                            ))
                        }
                    </AnswersGrid>
                    {
                        currentQuestionState === questionStates.CORRECT && <CorrectAnswerDialog />
                    }
                    {
                        currentQuestionState === questionStates.INCORRECT && <WrongAnswerDialog />
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
                    <BasicButton onClick={handleOnNextQuestion}>
                        Siguiente <img src={ArrowRight} width="24" />
                    </BasicButton>
                </div>
                <span className="font-bold">{formatQuestionIndicator(currentQuestionIndex, totalQuestions)}</span>
            </section>
        </div>
    )
}
