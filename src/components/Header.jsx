import { useState } from 'react';
import styles from '../styles/header.module.css';
import logo from '../assets/images/stack-of-books.png';
import closeIcon from '../assets/images/icon-close.svg';
import hamburgerIcon from '../assets/images/icon-hamburger.svg';
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
              className='toggle_menu'
              aria-label='toggle menu button'
              onClick={openMenu}
            >
              <img 
                className='icon'
                src={isMenuOpen ? closeIcon : hamburgerIcon}
                alt={isMenuOpen? "close menu icon": "open menu icon"}
              />
            </button>
            <MobileMenu isMenuOpen={isMenuOpen}/>
          </>
        }
      </div>
    </header>
  )
}

export default Header;