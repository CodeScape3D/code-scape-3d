import { BasicButton } from '../../components';
import PropTypes from 'prop-types';

export const AnswerButton = ({
  answerLetter,
  answerContent,
  onAnswerSelected = answer => {},
  isSelected = false,
  disabled = false,
  ariaLabel = '',
}) => {
  return (
    <button
      onClick={() => onAnswerSelected(answerLetter)}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`w-full p-4 mb-3 text-left rounded-lg border-2 transition-all duration-200 ${
        isSelected
          ? 'border-primary bg-blue-50 font-semibold'
          : 'border-gray-300 bg-white hover:border-gray-400'
      } ${disabled ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <div className="flex items-start gap-3">
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
            isSelected ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          {answerLetter}
        </span>
        <span
          className={`text-gray-800 leading-relaxed ${
            isSelected ? 'text-primary font-semibold' : ''
          }`}
        >
          {answerContent}
        </span>
      </div>
    </button>
  );
};

AnswerButton.propTypes = {
  answerLetter: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func,
  isSelected: PropTypes.bool,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
};
