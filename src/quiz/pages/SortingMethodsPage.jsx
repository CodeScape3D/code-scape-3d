import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CardTabla from '../../components/CardTabla';
import { topicCategories } from '../../components/HomeCartas';
import { SearchMethodGrid } from '../components';
import { useEffect } from 'react';
import { resetStateForQuiz } from '../../store';
import { svgFundamentals } from '../../assets/svg/SvgConstans';
import { useTranslation } from 'react-i18next';
import usePageActivity from '../../hooks/usePageActivity';

export const SortingMethodsPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  usePageActivity('pagina_visitada', 'metodos-ordenamiento');

  useEffect(() => {
    dispatch(resetStateForQuiz());
  }, [dispatch]);

  // Obtener todos los temas de ordenamiento
  const sortingTopics =
    topicCategories.find(cat => cat.nombre.includes('Ordenamiento'))?.temas || // Busca por nombre que contenga "Ordenamiento"
    [];

  return (
    <div className="w-full flex-1">
      <div className="flex justify-between items-center w-full bg-primary py-4 px-6">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-900 py-2 px-5 text-left rounded-r-3xl hover:bg-gray-800 transition-colors"
        >
          <h2 className="text-white font-bold">{t('back')}</h2>
        </button>
        <h1 className="text-3xl font-bold text-white flex-1 text-center">
          {t('sortingMethods')}
        </h1>
        <div className="w-24"></div>
      </div>

      <div className="wrap px-3 py-3">
        <SearchMethodGrid>
          {/* Card de Fundamentos */}
          <CardTabla
            tema={{
              id: 0,
              titulo: t('fundamentals'),
              param: 'sortingFundamentals',
              imagen: svgFundamentals,
            }}
            ruta="/quiz/sortingFundamentals"
          />

          {/* Cards de métodos de ordenamiento */}
          {sortingTopics.map(tema => (
            <CardTabla key={tema.id} tema={tema} ruta={`/quiz/${tema.param}`} />
          ))}
        </SearchMethodGrid>
      </div>
    </div>
  );
};
