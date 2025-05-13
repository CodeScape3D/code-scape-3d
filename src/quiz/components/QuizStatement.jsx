import PropTypes from 'prop-types';

export const QuizStatement = ({ statement }) => {
  return <span className="block mb-4">{statement}</span>;
};

QuizStatement.propTypes = {
  statement: PropTypes.string.isRequired,
};
