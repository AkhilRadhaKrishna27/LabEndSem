import FlightList from "./components/FlightList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>✈ Flight Details</h1>
      <p className="subtitle">Find your flight and travel comfortably</p>

      <FlightList />
    </div>
  );
}

export default App;