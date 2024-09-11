import styles from '../styles/header.module.css';

function MobileMenu({isMenuOpen}) {
  return (
    <div className={`${styles.mobile_menu} ${isMenuOpen ? styles.active : ''}`}>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Shop</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </div>
  )
}

export default MobileMenu;