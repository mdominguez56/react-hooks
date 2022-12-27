import './App.css';
import { Route, Routes } from 'react-router-dom';

// imports views
import Home from './views/Home';
import Hooks from './views/Hooks';

// imports components
import Header from './components/Header';
import UseStateHookComponent from './components/UseStateHookComponent';
import UseEffectHookComponent from './components/UseEffectHookComponent';
import UseContextHookComponent from './components/UseContextHookComponent';
import UseReducerHookComponent from './components/UseReducerHookComponent';

const App = () => {
  return (
    <div>
      <Header />
      {/*TODO: add dinamic routes for hooks components*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/hooks/useState" element={<UseStateHookComponent />} />
        <Route path="/hooks/useEffect" element={<UseEffectHookComponent />} />
        <Route path="/hooks/useContext" element={<UseContextHookComponent />} />
        <Route path="/hooks/useReducer" element={<UseReducerHookComponent />} />
      </Routes>
    </div>
  );
};

export default App;
