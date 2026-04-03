import PropTypes from 'prop-types';

export const AnswersGrid = ({ children }) => {
  return <div className="w-full flex flex-col gap-2">{children}</div>;
};

AnswersGrid.propTypes = {
  children: PropTypes.node.isRequired,
};
