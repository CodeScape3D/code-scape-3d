import CardTabla from "../../components/CardTabla"
import { topic } from "../../components/HomeCartas"


export const SortingMethodsPage = () => {
  return (
    <div className="h-full w-full">
        <h1 className="text-3xl font-bold text-center text-white bg-primary py-4">Métodos de ordenamiento</h1>    
            <div className="flex">
                {
                    topic.map((tema) => (
                        <CardTabla tema={tema} key={tema.id} ruta={`/quiz/${tema.param}`} />
                    ))
                }
            </div>
    </div>
  )
}
