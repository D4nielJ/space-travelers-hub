import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateRockets } from './rocketsSlice';

const Rocket = ({
  id, name, description, image,
}) => {
  const dispatch = useDispatch();

  const updateHandler = () => {
    dispatch(updateRockets(id));
  };

  return (
    <div className="card" key={id}>
      <div className="cardImg">
        <img src={image} alt="rocket" height="160" width="160" />
      </div>
      <div className="cardInfo">
        <h2>{name}</h2>
        <p>{description}</p>
        <button onClick={updateHandler} className="rocketBtn" type="button">
          Reserve Rocket
        </button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Rocket;
