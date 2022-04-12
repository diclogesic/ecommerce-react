import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ListProducts from '../ListProducts/ListProducts'
import React,{ useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import ItemCount from '../ItemCount/ItemCount'
import Container from '@mui/material/Container';


const ItemDetail = ({data}) => {
    
    return(
        <Container className='container-general'> 
            <div className='container-detail'>
            <div className='container-detail__img'>
                <img src={data.image} alt="jean" />
            </div>
            <div className='container-detail__info'>
                <h3 className='info__title'>{data.title}</h3>
                <p className='info__text'>$ {data.price}</p>
                <p className='info__subtitle'>DETALLE</p>
                <p className='info__text detail__text'>{data.description}</p>
                <Button className='detail__btn-buy'>COMPRAR</Button>
            </div>
            </div>
        </Container>
    )
}
const ItemCount = () => {
    return(
        <div>
            <ItemCount />
        </div>
    )
}

export default ItemDetail