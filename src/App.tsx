import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './componets/Home';
import Header from './componets/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
