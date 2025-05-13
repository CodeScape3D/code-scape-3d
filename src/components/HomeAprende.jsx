import { useEffect } from 'react';
import Header from './Header';
import HeaderHomeAprende from './HeaderHomeAprende';
import HomeAprendeTabla from './HomeAprendeTabla';
import { useDispatch } from 'react-redux';
import { resetStateForQuiz } from '../store';
import { useTranslation } from 'react-i18next';

export const HomeAprende = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(resetStateForQuiz());
  }, [dispatch]);

  return (
    <div className="flex flex-grow flex-col md:w-3/4 md:p-9">
      <Header>
        <HeaderHomeAprende />
      </Header>

      <div className="my-5 w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-primary">
          {t('learningResources')}
        </h1>
        <p className="text-center text-gray-700 mb-8 px-4">
          {t('selectCategoryToExplore')}
        </p>

        <HomeAprendeTabla />
      </div>
    </div>
  );
};
