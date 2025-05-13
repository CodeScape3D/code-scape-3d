import PropTypes from 'prop-types';

export const CodeBlock = ({ code }) => {
  return (
    <code className="block p-3 bg-gray-900 rounded-md">
      <pre className="text-white">{code}</pre>
    </code>
  );
};

CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
};
