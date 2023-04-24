import React, {useCallback, useEffect, useState} from 'react';
import css from './App.module.css'
import {Header} from "./components/header/Header";
import {Outlet} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getAllProducts} from "./redux/Products";
import {AppDispatch} from "./redux";
import {Cart} from "./components/cart/Cart";


export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    favorite: boolean;
    selected: boolean;
}

function App() {
    const dispatch = useDispatch<AppDispatch>()
    const [viewCart, setViewCart] = useState(false)

    const toggleViewCart = useCallback(() => {
        setViewCart(prev => !prev)
    }, [])

    useEffect(() => {
        // https://fakestoreapi.com/products
        dispatch(getAllProducts())
    }, [])

    return (
        <div>

            <div className={css.shop}>
                {viewCart && <Cart fun={toggleViewCart}/>}
                <Header fun={toggleViewCart}/>

                <Outlet/>
            </div>
        </div>
    );
}

export default App;
