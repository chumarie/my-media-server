import netflixLogo from '@presentation/assets/netflix.png'

import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={netflixLogo} alt="Description de l'image" />
      </div>  
    </header>
  );
};

export default Header;