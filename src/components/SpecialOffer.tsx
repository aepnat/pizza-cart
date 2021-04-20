import React from 'react';
import {Pizza} from "../types";
import style from "./SpecialOffer.module.css";
import {AddToCartProps, withAddToCart} from "./AddToCart";

interface Props extends AddToCartProps {
    pizza: Pizza,
}

const SpecialOffer: React.FC<Props> = ({pizza, addToCart}) => {
    return (
        <div className={style.container}>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>

            <button type="button" onClick={() => addToCart({...pizza}) }>Add to Cart</button>
        </div>
    )
}

export default withAddToCart(SpecialOffer);