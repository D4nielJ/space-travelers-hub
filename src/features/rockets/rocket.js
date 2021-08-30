import rocketImg from './rocket.png';

const Rocket = () => (
  <div className="card">
    <div className="cardImg">
      <img src={rocketImg} alt="rocket" height="160" width="160" />
    </div>
    <div className="cardInfo">
      <h2>Rocket name</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Nobis sequi architecto
        asperiores repellendus autem ea enim sint est nostrum hic! Voluptatum earum
        quis laboriosam non, numquam aspernatur libero commodi accusamus?
      </p>
      <button className="rocketBtn" type="button">Reserve Rocket</button>
    </div>
  </div>
);

export default Rocket;
