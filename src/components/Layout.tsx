import React, { CSSProperties } from 'react'; 
import Header from './Header';
import MainContent from './MainContent';

function Layout() {
    return(
        <div style={rootStyle}>
            <Header />
            <MainContent />
        </div>
    )
}

const rootStyle: CSSProperties = {
    height: '100vh'
}

export default Layout;