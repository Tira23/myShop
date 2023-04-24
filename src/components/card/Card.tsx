import css from "./Card.module.css";
import plus from "../../assets/plus.svg";
import enable from '../../assets/enable.svg'
import React from "react";
import {IProduct} from "../../App";
import favorite from "../../assets/favorite.svg"
import favoriteLove from "../../assets/favorite-love.svg"
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux";
import {toggleToFavorite, toggleToSelected} from "../../redux/Products";

interface IProps {
    cardProp: IProduct;
}

export function Card({cardProp}: IProps) {
    const {title, image, price, id, favorite: devFavorite, selected} = cardProp
    const dispatch = useDispatch<AppDispatch>()


    return <div className={css.card}>
        <div className={css.mainImg}>
            <img onClick={() => {
                dispatch(toggleToFavorite(id))
            }}
                 className={css.imageHeart}
                 src={devFavorite ? favoriteLove : favorite}
                 alt=""
            />
            <img className={css.imageProduct}
                 src={image}
                 alt="label"
            />
        </div>
        <h6>{title}</h6>
        <div className={css.cardBotFlex}>
            <div className={css.price}>
                <div>цена:</div>
                <div>{price} $</div>
            </div>
            <div className={css.svg}>
                <img onClick={() => {
                    dispatch(toggleToSelected(id))
                }}
                     src={selected ? enable : plus}
                     alt="plus"
                />
            </div>
        </div>
    </div>;
}
