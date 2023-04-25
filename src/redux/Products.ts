import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../App";


export const getAllProducts = createAsyncThunk<IProduct[]>(
    'card/fetchProducts', () => {
        return fetch('https://fakestoreapi.com/products').then(data => data).then(data => data.json())
    }
)

interface myProd {
    product: IProduct[],
    currentProduct: IProduct[],
    buyProducts: IProduct[],
    viewCart: boolean;
    buyDone: boolean;
}

const products = createSlice({
    name: 'Products',
    initialState: {
        product: [],
        currentProduct: [],
        buyProducts: [],
        viewCart: false,
        buyDone:false
    } as myProd,
    reducers: {
        selectedInFind: (state, action: PayloadAction<string>) => {
            const find = action.payload.trim()
            if (find.length) {
                state.currentProduct = state.product.filter(item => item.title.toLowerCase().includes(find.toLowerCase()))
            } else {
                state.currentProduct = state.product
            }
        },
        toggleToFavorite: (state, action: PayloadAction<number>) => {
            state.product.forEach(item => {
                if (item.id === action.payload) item.favorite = !item.favorite
            })
            state.currentProduct = state.product
        },
        buyProducts: (state) => {
            state.buyProducts = [...state.buyProducts, ...state.product.filter(item => item.selected)]
            state.product.forEach(item => item.selected = false)
                state.buyDone = true
        },
        toggleViewCart: (state) => {
            state.viewCart = !state.viewCart
        },
        toggleToSelected: (state, action: PayloadAction<number>) => {

            state.product.forEach(item => {
                if (item.id === action.payload) item.selected = !item.selected
            })
            state.currentProduct = state.product

        },

    },
    extraReducers: builder => {
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            action.payload.forEach(item => {
                item.favorite = false;
                item.selected = false;
            })
            state.product = action.payload
            state.currentProduct = action.payload
        })
    }

})


export default products.reducer
export const {selectedInFind, toggleToFavorite, toggleToSelected, buyProducts, toggleViewCart} = products.actions


