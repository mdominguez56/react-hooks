import "./App.css";
import Home from "./Components/Home";
import MainContent from "./Components/MainContent";

function App() {
  return (
    <div className="App">
      <Home>
        <MainContent />
      </Home>
    </div>
  );
}

export default App;
