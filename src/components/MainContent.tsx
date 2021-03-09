import React, { CSSProperties } from 'react'
import ProductPage from './ProductPage'
 
function MainContent() {
    return(
        <div style={rootStyle}>
            <ProductPage/>
        </div>
    )
}

const rootStyle: CSSProperties = {
    width: '100%', 
    height: '100%', 
    background: 'url(https://brill.se/system/uploads/storage/page_image/asset/82/m_nga_flaskor.jpg)', 
    backgroundPosition: 'center center',
    display: 'flex', 
    alignItems: 'center', 
    flexDirection: 'column'
}

export default MainContent;     
