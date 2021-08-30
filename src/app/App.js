import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from '../common/navbar/Nav';
import Profile from '../features/profile/profile';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
