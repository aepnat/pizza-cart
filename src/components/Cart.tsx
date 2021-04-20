import React from 'react';
import {FiShoppingCart} from "react-icons/fi";
import styles from "./Cart.module.css";
import { AppStateContext } from "./AppState";

interface Props {}

interface State {
    isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({isOpen: !prevState.isOpen}));
    }

    render() {
        return (
            <AppStateContext.Consumer>
                {(state) => {
                    const itemsCount = state.cart.items.reduce((sum, item) => {
                        return sum + item.quantity;
                    }, 0);
                    return (
                        <div className={styles.cartContainer}>
                            <button type="button" className={styles.button} onClick={this.handleClick}>
                                <FiShoppingCart />
                                <span>{itemsCount} pizza(s)</span>
                            </button>
                            <div className={styles.cartDropDown} style={{
                                display: this.state.isOpen ? 'block' : 'none'
                            }}>
                                <ul>
                                    {state.cart.items.map(item => (
                                        <li key={item.id}>{item.name} &times; {item.quantity}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )
                }}
            </AppStateContext.Consumer>
        )
    }
}

export default Cart;