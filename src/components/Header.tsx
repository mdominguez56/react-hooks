import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hooks/">Hooks</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
