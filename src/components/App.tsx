import React from "react";
import pizzas from "../data/pizzas.json";
import Pizza from "./Pizza";
import styles from "./App.module.css";
import Logo from "../svg/pizza.svg";
import Cart from "./Cart";
import AppStateProvider from "./AppState";

const App = () => {
    return (
        <AppStateProvider>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Logo width={120} height={120} />
                    <div className={styles.siteTitle}>Delicious Pizza</div>
                    <Cart />
                </div>
                <ul>{pizzas.map((pizza, index) => <Pizza key={index} pizza={pizza} />)}</ul>
            </div>
        </AppStateProvider>
    )
};

export default App;