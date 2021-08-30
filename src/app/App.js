import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from '../common/navbar/Nav';
import Missions from '../features/missions/missions';
import Profile from '../features/profile/profile';
import Rockets from '../features/rockets/rockets';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/missions">
          <Missions />
        </Route>
        <Route exact path="/">
          <Rockets />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
