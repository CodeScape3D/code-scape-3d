import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CardTabla from '../../components/CardTabla';
import { SearchMethodGrid } from '../components';
import { useEffect } from 'react';
import { resetStateForQuiz } from '../../store';
import { svgLinearSearch, svgBinarySearch } from '../../assets/svg/SvgConstans';
import { useTranslation } from 'react-i18next';
import usePageActivity from '../../hooks/usePageActivity';

export const SearchMethodsPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  usePageActivity('pagina_visitada', 'metodos-busqueda');

  useEffect(() => {
    dispatch(resetStateForQuiz());
  }, [dispatch]);

  const searchMethods = [
    {
      id: 1,
      titulo: t('linearSearch') || 'Búsqueda Lineal',
      param: 'linearSearch',
      imagen: svgLinearSearch,
    },
    {
      id: 2,
      titulo: t('binarySearch') || 'Búsqueda Binaria',
      param: 'binarySearch',
      imagen: svgBinarySearch,
    },
  ];

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
          {t('searchingMethods') || 'Métodos de Búsqueda'}
        </h1>
        <div className="w-24"></div>
      </div>

      <div className="wrap px-3 py-3">
        <SearchMethodGrid>
          {searchMethods.map(metodo => (
            <CardTabla
              key={metodo.id}
              tema={metodo}
              ruta={`/quiz/${metodo.param}`}
            />
          ))}
        </SearchMethodGrid>
      </div>
    </div>
  );
};
