import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/header.css'

const Header = () => {
  return (
    <header className='header__container'>
        <h1 className='header__title '><Link to='/'><button>e-commerce</button></Link></h1>
        <nav className='header__nav'>
            <ul className='header__ul'>
                <li className='header__li'><Link to='/user/login'><button><i className='bx bx-user-pin'></i></button></Link></li>
                <li className='header__li'><Link to='/purchases'><button><i className='bx bx-box'></i></button></Link></li>
                <li className='header__li'><Link to='/cart'><button><i className='bx bx-cart'></i></button></Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header