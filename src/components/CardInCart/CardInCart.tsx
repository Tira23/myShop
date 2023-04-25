import React from 'react';
import {IProduct} from "../../App";
import del from '../../assets/delete.svg'
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux";
import {toggleToSelected} from "../../redux/Products";
import css from "./CardInCart.module.css"

type IProps = {
    prop:IProduct
};

export function CardInCart({prop}: IProps) {
    const {image,price,title,id}= prop


    const dispatch = useDispatch<AppDispatch>()
    return (
        <div className={css.container}>
            <div className={css.productImage}><img src={image} alt={title}/></div>
            <div className={css.titlePrice}>
                <p>{title}</p>
                <p>{price} $</p>
            </div>
            <button onClick={()=>dispatch(toggleToSelected(id))}><img src={del} alt="Удалить" /></button>
        </div>
    );
}
