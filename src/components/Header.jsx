import { useState } from 'react';
import styles from '../styles/header.module.css';
import logo from '../assets/images/stack-of-books.png';
import closeIcon from '../assets/images/icon-close.svg';
import hamburgerIcon from '../assets/images/icon-hamburger.svg';
import cartIcon from '../assets/images/shopping-cart.png';
import MobileMenu from './MobileMenu';

function Header({isMobile}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function openMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header className={styles.header}>
      <div className={styles.header_top}>
        <img src={logo} alt="books logo" className={styles.logo} />
        {isMobile && 
          <>
            <button 
              aria-label='toggle menu button'
              onClick={openMenu}
            >
              <img 
                src={isMenuOpen ? closeIcon : hamburgerIcon}
                alt={isMenuOpen? "close menu icon": "open menu icon"}
              />
            </button>
            <MobileMenu isMenuOpen={isMenuOpen}/>
          </>
        }
        {!isMobile && 
          <MobileMenu isMenuOpen={true}/>
        }
      </div>
      <h1>Meet your next favorite book!</h1>
      <div className={styles.cart_container}>
        <h2>Your cart</h2>
        <div className={styles.flex_grp}>
          <img src={cartIcon} alt='cart icon' className={styles.icon}/>
          <p>0</p>
        </div>
        <a href="">See Cart</a>
      </div>
    </header>
  )
}

export default Header;