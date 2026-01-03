import { useDispatch } from 'react-redux';
import CardTabla from '../../components/CardTabla';
import { SearchMethodGrid } from '../components';
import { useEffect } from 'react';
import { resetStateForQuiz } from '../../store';
import { svgLinearSearch, svgBinarySearch } from '../../assets/svg/SvgConstans';
import { useTranslation } from 'react-i18next';

export const SearchMethodsPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

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
      <h1 className="text-3xl font-bold text-center text-white bg-primary py-4">
        {t('searchingMethods') || 'Métodos de Búsqueda'}
      </h1>

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
