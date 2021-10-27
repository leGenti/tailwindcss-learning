// import { formatter } from '.';
// import { Cart } from '../../typescript-demo/redux/cart/cartSlice';
// import { useAppDispatch, useAppSelector } from '../hooks';
import { CartItem, selectCart } from '../redux/cart/cartSlice';

export class Helpers {

    static getPrice(cart: CartItem[]): number {
        let total = 0;
        cart.map((item) => {
            total += item.price
        });
        return total
    }
}