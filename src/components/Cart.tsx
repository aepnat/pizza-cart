import React, {createRef} from 'react';
import {FiShoppingCart} from "react-icons/fi";
import styles from "./Cart.module.css";
import { AppStateContext } from "./AppState";

interface Props {}

interface State {
    isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
    readonly #containerRef: React.RefObject<HTMLDivElement>

    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false,
        }

        this.#containerRef = createRef();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({isOpen: !prevState.isOpen}));
    }

    handleOutsideClick = (e: MouseEvent) => {
        if (
            this.#containerRef.current &&
            !this.#containerRef.current.contains(e.target as Node)
        ) {
            this.setState({isOpen: false});
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleOutsideClick);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleOutsideClick);
    }

    render() {
        return (
            <AppStateContext.Consumer>
                {(state) => {
                    const itemsCount = state.cart.items.reduce((sum, item) => {
                        return sum + item.quantity;
                    }, 0);
                    return (
                        <div className={styles.cartContainer} ref={this.#containerRef}>
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