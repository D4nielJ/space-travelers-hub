import PropTypes from 'prop-types';

const Rocket = ({
  id, name, description, image,
}) => (
  <div className="card" key={id}>
    <div className="cardImg">
      <img src={image} alt="rocket" height="160" width="160" />
    </div>
    <div className="cardInfo">
      <h2>{name}</h2>
      <p>{description}</p>
      <button className="rocketBtn" type="button">
        Reserve Rocket
      </button>
    </div>
  </div>
);

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Rocket;
