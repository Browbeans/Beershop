import { Component, ContextType, CSSProperties } from 'react'
import { CartContext } from '../context/CartContext'


interface Props {
    title: string, 
    image: string
    price: string
}

class ProductItem extends Component<Props> {
    render() {
        return(
            <div style={rootStyle}>
                <img style={imgStyle}src={this.props.image} alt=""/>
                <h3>{this.props.title}</h3>
                <p>{'Pris:' + ' ' + this.props.price}</p>
            </div>
        )
    }
}

const rootStyle: CSSProperties = {
    width: '15rem', 
    height: '17rem', 
    background: 'black', 
    margin: '1rem', 
    borderRadius: '.5rem', 
    display: 'flex', 
    flexDirection: 'column', 
    padding: '1rem', 
    color: 'white', 
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(155, 155, 155, 0.2)'
}

const imgStyle: CSSProperties = {
    width: '100%',
    height: '12rem'
}

export default ProductItem; 
