import React from 'react';
import { Link } from 'react-router-dom';

const hooksList = ['useState', 'useEffect', 'useContext', 'useReducer'];

const Hooks = () => {
  return (
    <>
      <h1>Hooks page</h1>
      <nav>
        <ul>
          {hooksList.map((hook) => (
            <li key={hook}>
              <Link to={`/hooks/${hook}`}>{hook}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Hooks;
