import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    // Outlet pass all other components
    <div>
      <Outlet />
    </div>
  );
}

export default App;
