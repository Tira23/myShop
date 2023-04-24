import css from "./Header.module.css";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootProducts} from "../../redux";

export function Header() {
    const {currentProduct} = useSelector((state: RootProducts) => state.products)
    const [allPrice, setAllPrice] = useState(0)

    useEffect(() => {
        const priceSum = currentProduct.filter(item => item.selected).reduce((a, b) => a + b.price, 0)
        setAllPrice(+priceSum.toFixed(2))
    }, [currentProduct])

    return <header className={css.header}>
        <div className={css.container}>
            <Link to="/">
                <div className={css.leftflex}>
                    <div className={css.label}></div>
                    <div className={css.flexlabeltext}>
                        <div>МОЙ МАГАЗИН</div>
                        <div>Магазин рандомных товаров</div>
                    </div>
                </div>
            </Link>
            <div className={css.rightflex}>
                <div className={css.price}>{allPrice} $</div>
                <Link to={`/favorite`}>
                    <div className={css.favorite}></div>
                </Link>
                <Link to={"/favorite"}>
                    <div className={css.personal}></div>
                </Link>
            </div>
        </div>
    </header>;
}
