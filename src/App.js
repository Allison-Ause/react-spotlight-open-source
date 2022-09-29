import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Charts from './components/Charts/Charts';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>Table Library</h1>
        </Route>
        <Route path="/charts" component={Charts} />
      </Switch>
    </div>
  );
}

export default App;
