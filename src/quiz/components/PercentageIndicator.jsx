import PropTypes from 'prop-types';

/*
 * PercentageIndicator component
 * @param {string} percentage - The percentage to display. Handled by tailwind classes.
 * @param {string} position - The position of the percentage indicator. Handled by tailwind classes.
 */

export const PercentageIndicator = ({
  percentage,
  position,
  textColor = 'text-danger',
}) => {
  return (
    <span
      className={`percentage-indicator ${position} ${textColor} animate__animated animate__bounceIn`}
    >
      {percentage}
    </span>
  );
};

PercentageIndicator.propTypes = {
  percentage: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  textColor: PropTypes.string,
};
