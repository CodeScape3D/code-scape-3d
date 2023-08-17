import PropTypes from "prop-types";

const CardTabla = ({ tema }) => {
  const { titulo, imagen } = tema;

  return (
    <div className="hover:scale-110 bg-secondary w-32 mb-2 h-32 p-4 rounded-lg flex justify-center items-center flex-col cursor-pointer animate__bounceIn">
      <div className="">{imagen}</div>
      <p className="text-sm text-white">{titulo}</p>
    </div>
  );
};

CardTabla.propTypes = {
  tema: PropTypes.object.isRequired,
};

export default CardTabla;
