import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const WrongAnswerDialogComponent = ({
  correctAnswer,
  correctOption,
  feedback,
}) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-2">
      {/* Header - Respuesta Incorrecta */}
      <div className="bg-red-600 py-4 px-6 w-full text-white rounded-lg animate__animated animate__fadeIn border-l-4 border-red-800 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex-shrink-0 bg-white rounded-full flex items-center justify-center">
            <span className="text-red-600 font-bold text-lg">✕</span>
          </div>
          <div className="flex-1">
            <div className="font-bold text-sm">{t('wrongAnswer')}</div>
          </div>
        </div>
      </div>

      {/* Respuesta Correcta */}
      {correctAnswer && correctOption && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="mb-2">
            <div className="font-bold text-green-900 text-xs uppercase tracking-wide mb-2">
              {t('correctOption')}
            </div>
            <div className="inline-block bg-green-600 text-white font-bold px-2 py-1 rounded text-xs mb-2">
              Opción {correctAnswer}
            </div>
          </div>
          <p className="text-green-800 text-sm leading-relaxed">
            {correctOption}
          </p>
        </div>
      )}

      {/* Explicación */}
      {feedback && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="mb-2">
            <div className="font-bold text-blue-900 text-xs uppercase tracking-wide mb-2">
              {t('explanation')}
            </div>
          </div>
          <p className="text-blue-800 text-sm leading-relaxed text-justify">
            {feedback}
          </p>
        </div>
      )}
    </div>
  );
};

WrongAnswerDialogComponent.propTypes = {
  correctAnswer: PropTypes.string,
  correctOption: PropTypes.string,
  feedback: PropTypes.string,
};

export const WrongAnswerDialog = WrongAnswerDialogComponent;
