import { useDispatch } from 'react-redux';
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
      <h1 className="text-3xl font-bold text-center text-white bg-primary py-4">
        {t('dataStructures') || 'Estructuras de Datos'}
      </h1>

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
