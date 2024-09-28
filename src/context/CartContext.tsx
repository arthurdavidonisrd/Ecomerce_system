import { createContext, ReactNode, useState } from "react";
import { productsProps } from "../pages/home";

interface CartContextData{
    cart: CartProps[];
    cartAmount: number,
    addItemCart: (newItem: productsProps) => void;
    removeItemCart: (product: CartProps) => void;
    total: string
}

interface CartProps{
    id: number;
    title:string;
    description: string;
    price: number;
    cover:string;
    amount: number;
    total: number;
}

interface CartProviderProps{
    children: ReactNode;
}


export const CartContext = createContext({} as CartContextData)


function CartProvider({children} : CartProviderProps){


    const [cart, setCart] = useState<CartProps[]>([])
    const [total, setTotal] = useState("")


    function addItemCart(newItem : productsProps){
        //verify if iten already exists
        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if(indexItem !== -1){
            let cartList = cart
            
            cartList[indexItem].amount += 1;
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

            setCart(cartList);
            totalResultValue(cartList);
            return;
            
        }

        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }

        setCart(products => [...products, data]);
        totalResultValue([...cart, data])

    }


    function removeItemCart(product: CartProps){
        const indexItem = cart.findIndex(item => item.id === product.id)

        if(cart[indexItem]?.amount > 1){

            let cartList = cart

            cartList[indexItem].amount  -= 1
            cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price

            setCart(cartList)
            totalResultValue(cartList)
            return

        }

        const removeItem = cart.filter(item => item.id !== product.id)
        setCart(removeItem);
        totalResultValue(removeItem)

    }

    function totalResultValue(items: CartProps[]){
        let myCart = items;
        let result = myCart.reduce((acumulator, obj) => {return acumulator + obj.total }, 0 )

        const format = result.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})
        setTotal(format)

    }

    return(
        <CartContext.Provider value={{cart, cartAmount: cart.length, addItemCart, removeItemCart, total}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider;