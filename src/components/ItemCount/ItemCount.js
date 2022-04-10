import Button from '@mui/material/Button';
import React, { useState } from 'react' 
const ItemCount = ({stock}) => {
    const [count, setCount]=useState(1)

    const onAdd = () => {
        if(count < stock)
        setCount(count + 1)
    }

    return(
        <div>
            <Button>quitar</Button>
            <p>{count}</p>
            <Button onClick={onAdd}>comprar</Button>
        </div>
    )
}

export default ItemCount