import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext} from 'react';
import mockProductos from '../Utils/productsMock'
import { doc, getDoc } from "firebase/firestore";
import db from '../firebase'
import CartContext from '../context/CartContext'

const DetailPage = ({data}) => {
    const { cartProducts, addProductToCart } = useContext(CartContext)
    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState({})
    const getProduct = async() => {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            let product = docSnap.data()
            product.id = docSnap.id
            setProduct(product)
          } else {
            console.log("No such document!");
            navigate('/error')
          }
    }

    useEffect( () => {
        getProduct()
    }, [id])

    const addToCart = (e) => {
        e.stopPropagation()  
        console.log("Productos agregados:", cartProducts) 
        addProductToCart(product)
    }
    
    return(
        <Container className='container-general'> 
            <div className='container-detail'>
            <div className='container-detail__img'>
                <img src={`../${product.image}`} alt="jean" />
            </div>
            <div className='container-detail__info'>
                <h3 className='info__title'>{product.title}</h3>
                <p className='info__text'>$ {product.price}</p>
                <p className='info__subtitle'>TALLE</p>
                <p className='info__text'>{product.talle}</p>
                <p className='info__subtitle'>COLOR</p>
                <ul className='info__color'>
                    {product.colors?.map( (color) => {
                        return(
                            <li style={{background: `${color.hex}`}}></li>
                        )
                    })}                    
                </ul>
                <p className='info__subtitle'>DETALLE</p>
                <p className='info__text detail__text'>Prendas 100% originales!!</p>
                <Button onClick={addToCart} className='detail__btn-buy'>COMPRAR</Button>
            </div>
            </div>
        </Container>
    )
}

export default DetailPage