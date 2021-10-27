import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import cartReducer from '../lol/redux/cart/cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer
    },
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

