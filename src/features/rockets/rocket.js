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
    <div className="flex mb-6" key={id}>
      <div className="mr-4 flex-none w-48 relative">
        <img className="absolute inset-0 w-full h-full object-cover" src={image} alt="rocket" />
      </div>
      <div className="cardInfo">
        <h2 className="text-lg font-medium mb-2">{name}</h2>
        <p className="mb-4">
          {booking === true ? (
            <span className="bg-green-400 rounded-md px-2 py-0.5 mr-2 text-white font-semibold tracking-wide text-sm">
              Reserved
            </span>
          ) : (
            ''
          )}
          {description}
        </p>
        {booking === false ? (
          <button
            onClick={updateHandler}
            className="bg-blue-600 text-white w-48 border border-transparent py-2 px-4 rounded-md"
            type="button"
          >
            Reserve Rocket
          </button>
        ) : (
          <button
            onClick={updateHandler}
            className="bg-white text-gray-600 border-gray-600 border w-48 py-2 px-4 rounded-md"
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
