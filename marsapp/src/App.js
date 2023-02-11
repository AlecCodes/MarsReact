import logo from './logo.svg';
import './App.css';
import Map from './components/map'
import { Outlet } from 'react-router-dom';

function App() {

  

  return (
    <div className="App">
      <Map/>
      <Outlet/>
    </div>
  );
}

export default App;
