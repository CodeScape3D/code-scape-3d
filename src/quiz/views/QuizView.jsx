import ArrowLeft from "../../assets/icons/arrow-left.svg"
import ArrowRight from "../../assets/icons/arrow-right.svg"
import { BasicButton } from "../../components"

export const QuizView = () => {
    return (
        <div className="flex flex-col w-full p-4">
            <section className="flex-1">
                {/* Quiz question */}
                {/* Quiz Answers */}
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
