import PropTypes from "prop-types";

const Card = ({ image, name, date, rate }) => {
  return (
    <div className="p-2 w-[200px] flex flex-col items-center mb-5">
      <img src={image} alt="movie image" />
      <p className="text-white font-semibold mt-2">{name}</p>
      <div className="flex justify-between items-center w-full pr-5 mt-2">
        <p>{date}</p>
        <p>{rate}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
};

export default Card;