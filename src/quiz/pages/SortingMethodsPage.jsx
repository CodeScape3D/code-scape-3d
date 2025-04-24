import { useDispatch } from "react-redux";
import CardTabla from "../../components/CardTabla";
import { topicCategories } from "../../components/HomeCartas";
import { SearchMethodGrid } from "../components";
import { useEffect } from "react";
import { resetStateForQuiz } from "../../store";
import { svgFundamentals } from "../../assets/svg/SvgConstans";
import { useTranslation } from "react-i18next";

export const SortingMethodsPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetStateForQuiz());
  }, [dispatch]);

  // Obtener todos los temas de ordenamiento
  const sortingTopics = topicCategories
    .find(cat => cat.nombre.includes("Ordenamiento")) // Busca por nombre que contenga "Ordenamiento"
    ?.temas || [];

  return (
    <div className="w-full flex-1">
      <h1 className="text-3xl font-bold text-center text-white bg-primary py-4">
        {t("sortingMethods")}
      </h1>
      
      <div className="wrap px-3 py-3">
        <SearchMethodGrid>
          {/* Card de Fundamentos */}
          <CardTabla
            tema={{
              id: 0,
              titulo: t("fundamentals"),
              param: "sortingFundamentals",
              imagen: svgFundamentals
            }}
            ruta="/quiz/sortingFundamentals"
          />

          {/* Cards de métodos de ordenamiento */}
          {sortingTopics.map((tema) => (
            <CardTabla
              key={tema.id}
              tema={tema}
              ruta={`/quiz/${tema.param}`}
            />
          ))}
        </SearchMethodGrid>
      </div>
    </div>
  );
};