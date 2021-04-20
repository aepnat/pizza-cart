import React from "react";
import styles from "./Pizza.module.css";
import {useStateDispatch} from "./AppState";

interface Pizza {
    id: number
    name: string
    description: string
    price: number
}

interface Props {
    pizza: Pizza
}

const Pizza: React.FC<Props> = ({pizza}) => {
    const dispatch = useStateDispatch();

    const handleAddToCartClick = () => {
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                item: pizza
            }
        });
    }

    return (
        <li className={styles.container}>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>

            <button type="button" onClick={handleAddToCartClick}>Add to Cart</button>
        </li>
    )
};

export default Pizza;