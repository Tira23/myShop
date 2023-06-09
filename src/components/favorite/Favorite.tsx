import css from "../Main.module.css";
import {Card} from "../card/Card";
import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootProducts} from "../../redux";


export function Favorite() {

    const {currentProduct} = useSelector((state: RootProducts) => state.products)

    return <section className={css.main}>
        <div className={css.container}>
            <div className={css.topflex}>
                <h2>
                    <Link to={`/`}>
                        <button>&lsaquo;</button>
                    </Link>
                    Ваши закладки
                </h2>
            </div>
            <div className={css.cardsArr}>
                {currentProduct?.map(item => item.favorite && (<Card key={item.id} cardProp={item}/>))}
            </div>
        </div>
    </section>;
}
