import React, { useEffect} from 'react';
import css from './App.module.css'
import {Header} from "./components/header/Header";
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "./redux/Products";
import {AppDispatch, RootProducts} from "./redux";
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
    const {viewCart} = useSelector((state:RootProducts)=>state.products)


    useEffect(() => {
        // https://fakestoreapi.com/products
        dispatch(getAllProducts())
    }, [])

    return (
        <div>

            <div className={css.shop}>
                <Header/>

                <Outlet/>
                {viewCart && <Cart/>}
            </div>
        </div>
    );
}

export default App;
