import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import Nav from './Nav';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <BrowserRouter>
        <Nav />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;