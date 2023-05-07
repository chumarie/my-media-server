import { ReactNode } from 'react';

import Header from '@organisms/Header/Header';

import './styles.css';

interface LayoutProps {
    children: ReactNode;
}

const BaseLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='h-full flex flex-col'>
            <Header />
            <main className='flex-auto h-[calc(100%-130px)]'>{children}</main>
        </div>
    );
};

export default BaseLayout;
