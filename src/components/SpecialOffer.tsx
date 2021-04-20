import React from 'react';
import {Pizza} from "../types";
import style from "./SpecialOffer.module.css";
import {AddToCartProps, WithAddToCartProps} from "./AddToCart";

interface Props extends AddToCartProps {
    pizza: Pizza,
}

const SpecialOffer: React.FC<Props> = ({pizza}) => {
    return (
        <div className={style.container}>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
            <WithAddToCartProps>{({addToCart}) => {
                return (
                    <button type="button" onClick={() => addToCart({...pizza}) }>Add to Cart</button>
                )
            }}</WithAddToCartProps>
        </div>
    )
}

export default SpecialOffer;