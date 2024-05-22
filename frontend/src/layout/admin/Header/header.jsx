import { Link } from 'react-router-dom';
import React from 'react'
import './Header.scss'

const Header = () => {
    return (
      <div className='adminHeader'>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>
    );
}

export default Header
                                