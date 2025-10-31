import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

export const WrongAnswerDialog = ({
  correctAnswer,
  correctOption,
  feedback,
}) => {
  const { t } = useTranslation();

  return (
    <div className="bg-danger py-4 px-6 w-full text-white rounded-lg animate__animated animate__fadeIn">
      <div className="text-center font-bold mb-2">{t('wrongAnswer')}</div>

      {correctAnswer && correctOption && (
        <div className="mt-3 text-sm">
          <div className="font-semibold mb-1">
            {t('correctOption')}:{' '}
            <span className="font-bold text-lg">{correctAnswer}</span>
          </div>
          <div className="bg-white bg-opacity-20 p-2 rounded">
            {correctOption}
          </div>
        </div>
      )}

      {feedback && (
        <div className="mt-3 text-sm">
          <div className="font-semibold mb-1">{t('explanation')}:</div>
          <div className="bg-white bg-opacity-20 p-2 rounded text-justify">
            {feedback}
          </div>
        </div>
      )}
    </div>
  );
};

WrongAnswerDialog.propTypes = {
  correctAnswer: PropTypes.string,
  correctOption: PropTypes.string,
  feedback: PropTypes.string,
};
