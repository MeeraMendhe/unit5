import { Navbar } from "./Components/Navbar";
import "./styles.css";
import { MyRoutes } from "./Routes/MyRoutes";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <MyRoutes />
    </div>
  );
}
