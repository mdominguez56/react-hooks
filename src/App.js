import "./App.css";
import Home from "./Components/Home";
import MainContent from "./Components/Carousel";

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
