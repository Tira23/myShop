import React, {useEffect, useState} from 'react';
import css from './Cart.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootProducts} from "../../redux";
import {CardInCart} from "../CardInCart/CardInCart";
import {buyProducts, toggleViewCart} from "../../redux/Products";
import done from "../../assets/done.jpg"


export function Cart() {
    const {product, buyDone} = useSelector((state: RootProducts) => state.products)
    const [allPrice, setAllPrice] = useState(0)
    const [randomNum, setRandomNum] = useState(0)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        setRandomNum(+(Math.random() * 100).toFixed(0))
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'visible'
        }
    }, [])


    useEffect(() => {
        const priceSum = product.filter(item => item.selected).reduce((a, b) => a + b.price, 0)
        setAllPrice(+priceSum.toFixed(2))
    }, [product])


    return (
        <div className={css.cont}>
            <div onClick={() => dispatch(toggleViewCart())} className={css.bgScreen}></div>
            <div className={css.cartFlex}>
                <div>
                    <h4 className={css.header}>
                        Корзина
                    </h4>
                    <div className={css.prodFlex}>
                        {
                            buyDone &&
                            <div className={css.done}>
                                <img src={done} alt="done"/>
                                <h4>Заказ оформлен!</h4>
                                <p>Ваш заказ #{randomNum} скоро будет передан курьерской доставке</p>
                                <button onClick={() => dispatch(toggleViewCart())}>Вернуться назад</button>
                            </div>
                        }
                        {product.map(item => item.selected ? <CardInCart prop={item}/> : null)}
                    </div>
                </div>
                {!buyDone  &&<div className={css.bot}>
                    <div className={css.priceBlock}>
                        <div>
                            <p>Итого</p><p>{allPrice} $</p>
                        </div>
                        <div>
                            <p>Налог 5%</p><p>{+(allPrice * 0.05).toFixed(2)} $</p>
                        </div>
                    </div>
                    <button disabled={!allPrice} onClick={() => dispatch(buyProducts())}>Оформить заказ</button>
                </div>}
            </div>
        </div>
    );
}
