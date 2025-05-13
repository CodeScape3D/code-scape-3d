import { useTranslation } from 'react-i18next';

export const WrongAnswerDialog = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-danger py-3 w-full text-center text-white rounded-lg animate__animated animate__fadeIn">
      {t('wrongAnswer')}
    </div>
  );
};
