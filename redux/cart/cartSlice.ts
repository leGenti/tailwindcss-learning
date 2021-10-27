import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

export interface CartItem{
    id: string;
    title: string;
    model: string;
    desc: string;
    price: number;
};

export type Cart = {
    cart: CartItem[]
};

const initialState: Cart = {
    cart: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, {payload}) => {
            const item = state.cart.find((item) => item.id === payload.cartitem.id)
            const inlijst = state.cart.find((item) => item.id === payload.cartitem.id ? true : false)
            console.log(payload)
            return {
                ...state,
                cart: inlijst ? state.cart.map((item) => item.id === payload.cartitem.id ? {...item, ...payload.cartitem} : item) : [...state.cart, payload.cartitem]
            }
        },
        deleteFromCart: (state, { payload }) => {
            return { state, cart: state.cart.filter(obj => obj.id !== payload)}
        },
    },
});

export const {addToCart, deleteFromCart} = cartSlice.actions;

//De hierboven benoemde acties oproepen is nutteloos als we de data in de state niet kunnen aanspreken. We gebruiken dus een selector zodat we een value uit de state kunnen selecteren/aanspreken
export const selectCart = (state: RootState) => state.cart;

// Hier gaan we de reducer exporteren zodat we deze kunnen toevoegen aan de store
export default persistReducer(persistConfig, cartSlice.reducer);