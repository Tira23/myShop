import css from "../Main.module.css";
import {Card} from "../card/Card";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootProducts} from "../../redux";
import { selectedInFind} from "../../redux/Products";


export function Main() {
    const dispatch = useDispatch<AppDispatch>()
    const {currentProduct} = useSelector((state: RootProducts) => state.products)

    return <section className={css.main}>
        <div className={css.container}>
            <div className={css.topflex}>
                <h2>Все товары</h2>
                <div>
                    <input
                        onChange={(event) => dispatch(selectedInFind(event.target.value))}
                           type="text"
                           placeholder="Поиск..."
                    />
                </div>
            </div>
            <div className={css.cardsArr}>
                {currentProduct.map(item => (<Card key={item.id} cardProp={item}/>))}
            </div>
        </div>
    </section>;
}
