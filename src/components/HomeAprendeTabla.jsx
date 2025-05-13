import { useTranslation } from 'react-i18next';
import CategoryCard from './CategoryCard';
import { topicCategories } from './HomeCartas';
import PropTypes from 'prop-types';

const HomeAprendeTabla = ({ filtro, temasFiltrados }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="my-5 w-full md:w-full p-2 animate__bounceIn">
        <h2 className="block text-center font-bold bg-primary text-white py-1.5 rounded-tr-lg rounded-tl-lg">
          {t('topics')}
        </h2>
        <div className="h-full bg-tertiary transition-all rounded-bl-lg rounded-br-lg flex flex-col justify-center items-center gap-4 shadow-lg p-4">
          {topicCategories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </>
  );
};

HomeAprendeTabla.propTypes = {
  filtro: PropTypes.string,
  temasFiltrados: PropTypes.array,
};

export default HomeAprendeTabla;
