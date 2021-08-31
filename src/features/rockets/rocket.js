import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateRockets } from './rocketsSlice';

const Rocket = ({
  id, name, description, image, booking,
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
        <p>
          {booking === true ? <span style={{ border: '1px solid red' }}>Reserved</span> : ''}
          {description}
        </p>
        {booking === false ? (
          <button onClick={updateHandler} className="rocketBtn" type="button">
            Reserve Rocket
          </button>
        ) : (
          <button
            onClick={updateHandler}
            style={{ color: 'red' }}
            className="rocketBtn"
            type="button"
          >
            Cancel Reservation
          </button>
        )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  booking: PropTypes.bool.isRequired,
};

export default Rocket;
