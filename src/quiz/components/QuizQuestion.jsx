import PropTypes from 'prop-types';

export const QuizQuestion = ({ question }) => {
  return (
    <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200">
      <h2 className="text-xl font-bold text-gray-900 leading-relaxed">
        {question}
      </h2>
    </div>
  );
};

QuizQuestion.propTypes = {
  question: PropTypes.string.isRequired,
};
