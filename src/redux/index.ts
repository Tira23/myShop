import {configureStore} from "@reduxjs/toolkit";
import products from './Products'

export const store = configureStore(
    {
        reducer: {
            products
        }
    }
)

export type RootProducts = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
