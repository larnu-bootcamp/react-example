import './App.css';
import { Link, Route } from "wouter";
import Cards from './components/Cards';
import Boxes from './components/boxes/Boxes';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Link href="/courses">
          <a className="link">Cursos</a>
        </Link>
        <Link href="/boxes">
          <a className="link">Boxes</a>
        </Link>
      </header>
      <Route path="/boxes" component={Boxes} />
      <Route path="/courses" component={Cards} />
    </div>
  );
}

export default App;
