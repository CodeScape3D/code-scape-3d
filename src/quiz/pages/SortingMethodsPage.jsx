import CardTabla from "../../components/CardTabla"
import { topic } from "../../components/HomeCartas"
import { SearchMethodGrid } from "../components"


export const SortingMethodsPage = () => {
    return (
        <div className="w-full flex-1">
            <h1 className="text-3xl font-bold text-center text-white bg-primary py-4">Métodos de ordenamiento</h1>
            <div className="wrap px-3 py-3">
                <SearchMethodGrid>
                    {
                        topic.map((tema) => (
                            <CardTabla tema={tema} key={tema.id} ruta={`/quiz/${tema.param}`} />
                        ))
                    }
                </SearchMethodGrid>
            </div>
        </div>
    )
}
