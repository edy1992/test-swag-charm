import { CartItem } from '../types';

export const formatPrice = (price: number) => {
    return price.toFixed(2);
};

export const getTotalPrice = (cartItems: CartItem[]) => {
    return cartItems.reduce((a, b) => a + (b.sku_price * b.quantity), 0);;
};