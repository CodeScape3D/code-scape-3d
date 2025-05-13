import { useTranslation } from 'react-i18next';

export const CorrectAnswerDialog = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-success py-3 w-full text-center text-white rounded-lg animate__animated animate__fadeIn">
      {t('correctAnswer')}
    </div>
  );
};
