import ArrowLeft from "../../assets/icons/arrow-left.svg"
import ArrowRight from "../../assets/icons/arrow-right.svg"
import { BasicButton } from "../../components"
import {
    AnswerButton,
    CodeBlock,
    WrongAnswerDialog,
    CorrectAnswerDialog,
    AnswersGrid, QuizQuestion,
    QuizStatement
} from "../components"


export const QuizView = () => {

    return (
        <div className="flex flex-col flex-grow w-full h-full gap-3 p-4 justify-around">
            <section className="flex flex-col md:flex-row flex-1">

                <div className="question-wrapper">
                    <QuizStatement question={"La Lista Enlazada Simple a continuación representa una cola q donde q.peek() = 43. Luego, realizamos estas operaciones:"} />
                    <CodeBlock code={`q.dequeue();
q.dequeue();
q.peek();
q.peek();
q.enqueue(67);
q.enqueue(81);`} />


                </div>

                <div className="flex p-2 md:p-10 gap-3 flex-col justify-center items-center flex-1">
                    <QuizQuestion question={"¿Cuál es el resultado de q.peek() después de realizar todas esas operaciones?"} />
                    <AnswersGrid>
                        <AnswerButton text="A. 45" />
                        <AnswerButton text="B. 14" />
                        <AnswerButton text="C. 81" />
                        <AnswerButton text="D. 67" />
                    </AnswersGrid>
                    <CorrectAnswerDialog />
                    <WrongAnswerDialog />
                    <BasicButton backgroundColor="primary.main">
                        Ver retroalimentación
                    </BasicButton>
                </div>
            </section>

            <section className="w-full flex flex-col gap-2 md:gap-0 md:flex-row items-center justify-between">
                <div className="flex gap-3">
                    <BasicButton>
                        <img src={ArrowLeft} width="24" />  Volver
                    </BasicButton>
                    <BasicButton>
                        Siguiente <img src={ArrowRight} width="24" />
                    </BasicButton>
                </div>
                <span className="font-bold">1/10</span>
            </section>
        </div>
    )
}
