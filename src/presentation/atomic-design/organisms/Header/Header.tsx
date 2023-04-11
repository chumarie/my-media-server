import netflixLogo from '@presentation/assets/netflix.png'
import avatar from '@presentation/assets/avatar.jpeg';
import search from '@presentation/assets/search.png'
import setting from '@presentation/assets/setting.png';

import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={netflixLogo} alt="Description de l'image" />
      </div>  
      <nav>
          <ul>
            <li>Favoris</li>
            <li>Recommended</li>
          </ul>
      </nav>
      <div className="action-header">
      <img src={search} alt="" />
      <img src={setting} alt="" />
        <div className="avatar">
          <img src={avatar} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;