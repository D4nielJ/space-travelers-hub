import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from './rocketsSlice';
import Rocket from './rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketsStatus = useSelector((state) => state.rockets.status);
  const rockets = useSelector((state) => state.rockets.list);

  useEffect(() => {
    if (rocketsStatus === 'idle') {
      dispatch(fetchRockets());
    }
  }, []);

  return (
    <div className="rocketsContainer">
      {rockets.map((el) => (
        <Rocket
          key={el.id}
          id={el.id}
          name={el.name}
          description={el.description}
          image={el.image}
        />
      ))}
    </div>
  );
};

export default Rockets;
