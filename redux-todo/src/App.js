import {Navbar} from "./components/Navbar";
import './App.css';
import {AllRoutes} from "./Myroutes/routes"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
