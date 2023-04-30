import { ReactNode } from 'react';

import Header from '@organisms/Header/Header';

import './styles.css';

interface LayoutProps {
  children: ReactNode;
}

const BaseLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <div className="h-full flex flex-col">
        <Header /> {/* Organisme contenant la barre de navigation, le logo, etc. */}
        <main className="flex-auto h-[calc(100%-130px)]">
          {children}
        </main> {/* Contenu principal de la page */}
        {/* <Footer /> Organisme contenant les liens et les informations de copyright */}
      </div>
    );
  };
  
export default BaseLayout;