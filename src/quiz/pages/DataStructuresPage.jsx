import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CardTabla from '../../components/CardTabla';
import { SearchMethodGrid } from '../components';
import { useEffect } from 'react';
import { resetStateForQuiz } from '../../store';
import {
  svgSimpleList,
  svgLinkedListDataStructure,
  svgBinaryTrees,
  svgPiles,
  svgQueue,
} from '../../assets/svg/SvgConstans';
import { useTranslation } from 'react-i18next';

export const DataStructuresPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(resetStateForQuiz());
  }, [dispatch]);

  const dataStructures = [
    {
      id: 1,
      titulo: t('simpleLists'),
      param: 'simpleList',
      imagen: svgSimpleList,
    },
    {
      id: 2,
      titulo: t('linkedLists'),
      param: 'linkedList',
      imagen: svgLinkedListDataStructure,
    },
    {
      id: 3,
      titulo: t('binaryTrees'),
      param: 'binaryTree',
      imagen: svgBinaryTrees,
    },
    {
      id: 4,
      titulo: t('stacks'),
      param: 'stacks',
      imagen: svgPiles,
    },
    {
      id: 5,
      titulo: t('queues'),
      param: 'queues',
      imagen: svgQueue,
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
          {t('dataStructures') || 'Estructuras de Datos'}
        </h1>
        <div className="w-24"></div>
      </div>

      <div className="wrap px-3 py-3">
        <SearchMethodGrid>
          {dataStructures.map(estructura => (
            <CardTabla
              key={estructura.id}
              tema={{
                id: estructura.id,
                titulo: estructura.titulo,
                param: estructura.param,
                imagen: estructura.imagen,
              }}
              ruta={`/quiz/${estructura.param}`}
            />
          ))}
        </SearchMethodGrid>
      </div>
    </div>
  );
};
