import ArrowLeft from "../../assets/icons/arrow-left.svg"

export const QuizView = () => {
    return (
        <div className="flex flex-col">
            <section className="flex-1">
                {/* Quiz question */}
                {/* Quiz Answers */}   
            </section>
            <section className=" ">
                <div className="flex gap-3">
                    <button className="btn flex items-center gap-3"> <img src={ArrowLeft} width="24"/>  Volver</button>
                    <button className="btn">Siguiente</button> 
                </div>
                <span className="font-bold">1/10</span>
            </section>
        </div>
    )
}
