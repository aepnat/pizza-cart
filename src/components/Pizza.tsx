import React from "react";
import styles from "./Pizza.module.css";
import {Pizza} from "../types";
import {AddToCartProps, withAddToCart} from "./AddToCart";

interface Props extends AddToCartProps{
    pizza: Pizza
}

const PizzaItem: React.FC<Props> = ({pizza, addToCart}) => {
    return (
        <li className={styles.container}>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>

            <button type="button" onClick={() => addToCart({...pizza})}>Add to Cart</button>
        </li>
    )
};

export default withAddToCart(PizzaItem);