import { useDispatch } from "react-redux"
import CardTabla from "../../components/CardTabla"
import { topic } from "../../components/HomeCartas"
import { SearchMethodGrid } from "../components"
import { useEffect } from "react"
import { resetStateForQuiz } from "../../store"
import { svgFundamentals } from "../../assets/svg/SvgConstans"
import { useTranslation } from "react-i18next"


export const SortingMethodsPage = () => {

    const { t } = useTranslation()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(resetStateForQuiz())
    }, []) 

    return (
        <div className="w-full flex-1">
            <h1 className="text-3xl font-bold text-center text-white bg-primary py-4">{ t("sortingMethods") }</h1>
            <div className="wrap px-3 py-3">
                <SearchMethodGrid>
                    <CardTabla tema={{
                        id: 0,
                        titulo: "Fundamentos",
                        param: "sortingFundamentals",
                        imagen: svgFundamentals
                    }} ruta={`/quiz/sortingFundamentals`} />
                    {
                        topic.map((tema) => {
                            if (tema.id != 5) {
                               return <CardTabla tema={tema} key={tema.id} ruta={`/quiz/${tema.param}`} />
                            }
                        })
                    }
                </SearchMethodGrid>
            </div>
        </div>
    )
}
