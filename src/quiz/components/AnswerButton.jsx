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
    <BasicButton
      backgroundColor={isSelected ? 'primary.main' : 'gray.primary'}
      onClick={() => onAnswerSelected(answerLetter)}
      disabled={disabled}
      ariaLabel={ariaLabel}
    >
      <span
        className={`block ${isSelected ? 'text-white' : 'text-gray-900'}`}
      >{`${answerLetter}. ${answerContent}`}</span>
    </BasicButton>
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
