import React from 'react';
import css from './Cart.module.css'

interface IProp{
    fun(): void
}
export function Cart({fun}:IProp) {
    return (
        <div className={css.cont}>
            <div onClick={fun} className={css.bgScreen}></div>
            <div className={css.cartFlex}>
                <div>
                    <h4 className={css.header}>
                        Корзина
                    </h4>
                    <div className={css.prodFlex}>
                        {/*{Товары}*/}
                    </div>
                </div>
                <div className={css.bot}>
                    <div className={css.priceBlock}>
                        <div>
                            <p>Итого</p><p>123123 $</p>
                        </div>
                        <div>
                            <p>Налог 5%</p><p>123123 $</p>
                        </div>
                    </div>
                    <button>Оформить заказ</button>
                </div>
            </div>
        </div>
    );
}
