import React from "react";
import pizzas from "../data/pizzas.json";
import Pizza from "./Pizza";
import styles from "./App.module.css";
import Logo from "../svg/pizza.svg";
import Cart from "./Cart";
import AppStateProvider from "./AppState";
import SpecialOffer from "./SpecialOffer";

const App = () => {
    const specialOffer = pizzas.find(pizza => pizza.specialOffer);

    return (
        <AppStateProvider>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Logo width={120} height={120} />
                    <div className={styles.siteTitle}>Delicious Pizza</div>
                    <Cart />
                </div>
                {specialOffer && <SpecialOffer pizza={specialOffer}/>}
                <ul className={styles.pizzaList}>{pizzas.map((pizza, index) => <Pizza key={index} pizza={pizza} />)}</ul>
            </div>
        </AppStateProvider>
    )
};

export default App;