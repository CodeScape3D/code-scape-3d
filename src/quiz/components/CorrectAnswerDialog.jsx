import { useTranslation } from 'react-i18next';

export const CorrectAnswerDialog = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-green-600 py-4 px-6 w-full text-white rounded-lg animate__animated animate__fadeIn border-l-4 border-green-800 shadow-md">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex-shrink-0 bg-white rounded-full flex items-center justify-center">
          <span className="text-green-600 font-bold text-lg">✓</span>
        </div>
        <div className="flex-1">
          <div className="font-bold text-sm">{t('correctAnswer')}</div>
        </div>
      </div>
    </div>
  );
};
