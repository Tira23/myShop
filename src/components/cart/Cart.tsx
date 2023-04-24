import React from 'react';
import css from './Cart.module.css'

export function Cart() {
    return (
        <div className={css.bgScreen}>
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
                            <p>Налог</p><p>123123 $</p>
                        </div>
                    </div>
                    <button>Оформить заказ</button>
                </div>
            </div>
        </div>
    );
}
