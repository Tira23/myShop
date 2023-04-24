import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../App";


export const getAllProducts = createAsyncThunk<IProduct[]>(
    'card/fetchProducts', () => {
        return fetch('https://fakestoreapi.com/products').then(data => data).then(data => data.json())
    }
)

interface myProd {
    product: IProduct[],
    currentProduct: IProduct[]
}

const products = createSlice({
    name: 'Products',
    initialState: {
        product: [],
        currentProduct: []
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
            state.currentProduct.forEach(item=> {
                if (item.id === action.payload) item.favorite = !item.favorite
            })
        },
        toggleToSelected: (state, action: PayloadAction<number>) => {
            state.currentProduct.forEach(item=> {
                if (item.id === action.payload) item.selected = !item.selected
            })
        },
        deleteNumber: (state, action: PayloadAction<number>) => {

            state.currentProduct = state.product.filter((item) => item.id !== action.payload)
        }
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
export const {selectedInFind,toggleToFavorite,toggleToSelected} = products.actions


