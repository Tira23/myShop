import css from "../Main.module.css";
import {Card} from "../card/Card";
import React from "react";
import {useSelector} from "react-redux";
import {RootProducts} from "../../redux";
import {Link} from "react-router-dom";


export function Personal() {

    const {buyProducts} = useSelector((state: RootProducts) => state.products)

    return <section className={css.main}>
        <div className={css.container}>
            <div className={css.topflex}>
                <h2>
                    <Link to={`/`}>
                        <button>&lsaquo;</button>
                    </Link>
                    Ваши покупки
                </h2>
            </div>
            <div className={css.cardsArr}>
                {buyProducts?.map(item => (<Card key={item.id} cardProp={item}/>))}
            </div>
        </div>
    </section>;

}
