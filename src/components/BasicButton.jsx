import { Button } from '@mui/material';
import PropTypes from 'prop-types';

export const BasicButton = ({
  children,
  onClick = () => {},
  backgroundColor = null,
  disabled = false,
  ariaLabel = '',
  size = 'medium',
  className = '',
  sx = {},
}) => {
  const isSmall = size === 'small';

  return (
    <Button
      onClick={onClick}
      variant="contained"
      size={size}
      sx={{
        borderRadius: '10px',
        ...(backgroundColor
          ? { backgroundColor, ':hover': { backgroundColor } }
          : {}),
        textTransform: 'none',
        fontWeight: 'bold',
        minWidth: isSmall ? 36 : undefined,
        padding: isSmall ? '6px 8px' : undefined,
        ...sx,
      }}
      className={`btn flex items-center ${isSmall ? 'justify-center gap-2' : 'justify-start gap-3'} ${className}`}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </Button>
  );
};

BasicButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  sx: PropTypes.object,
};
