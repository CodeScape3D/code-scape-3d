import ArrowLeft from "../../assets/icons/arrow-left.svg"
import ArrowRight from "../../assets/icons/arrow-right.svg"
import { BasicButton } from "../../components"
import { AnswerButton, CodeBlock } from "../components"

export const QuizView = () => {
    return (
        <div className="flex flex-col w-full h-full gap-3 p-4 justify-around">
            <section className="flex flex-1">
                {/* Quiz question */}
                <div className="question-wrapper">
                    <span className="block mb-4">
                        La Lista Enlazada Simple a continuación representa una cola q donde q.peek() = 43. Luego, realizamos estas operaciones:
                    </span>


                    <CodeBlock code={`q.dequeue();
q.dequeue();
q.peek();
q.peek();
q.enqueue(67);
q.enqueue(81);`} />


                </div>
                {/* Quiz Answers */}
                <div className="flex p-10 gap-3 flex-col justify-center items-center flex-1">
                    <span className="font-bold">¿Cuál es el resultado de q.peek() después de realizar todas esas operaciones?</span>
                    <div className="grid grid-cols-2 grid-rows-2 w-full gap-x-10 gap-y-5">
                        <AnswerButton text="A. 45" />
                        <AnswerButton text="B. 14" />
                        <AnswerButton text="C. 81" />
                        <AnswerButton text="D. 67" />
                    </div>
                </div>
            </section>
            <section className="w-full flex justify-between">
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
