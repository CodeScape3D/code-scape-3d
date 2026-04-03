import PropTypes from 'prop-types';

export const QuizStatement = ({ statement }) => {
  return (
    <div className="mb-4 p-3 bg-blue-50 rounded border-l-4 border-primary hidden lg:block">
      <p className="text-sm text-gray-700 leading-relaxed italic">
        {statement}
      </p>
    </div>
  );
};

QuizStatement.propTypes = {
  statement: PropTypes.string.isRequired,
};
