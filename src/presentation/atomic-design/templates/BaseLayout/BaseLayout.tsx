import { ReactNode } from 'react';

import Header from '@organisms/Header/Header';
import Footer from '@organisms/Footer/Footer';

import './styles.css';

interface LayoutProps {
  children: ReactNode;
}

const BaseLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <div>
        <Header /> {/* Organisme contenant la barre de navigation, le logo, etc. */}
        <main>
          {children}
        </main> {/* Contenu principal de la page */}
        {/* <Footer /> Organisme contenant les liens et les informations de copyright */}
      </div>
    );
  };
  
export default BaseLayout;