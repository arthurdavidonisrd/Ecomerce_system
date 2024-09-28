import { useContext } from "react"
import {Link} from 'react-router-dom'
import { CartContext } from "../../context/CartContext"

export function Cart(){

    const {cart, total, removeItemCart, addItemCart} = useContext(CartContext);

    return(
        <div className=" w-full max-w-7xl mx-auto">
            <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

            {cart.length === 0 &&(
                <div className="flex justify-center items-center flex-col mt-10">
                    <p className="font-bold">Seu carrinho está vazio!</p>

                    <Link to="/" className="font-regular underline bg-slate-600 px-2 py-1 text-white mt-5 rounded-lg">
                        Ver produtos
                    </Link>
                </div>
            )}

            {cart.map((item) => (

                <section key={item.id} className="flex justify-between items-center border-b-2 border-gray-400">
                    <img 
                        src={item.cover}
                        className="w-28"
                        alt={item.title} 
                    />

                    <strong>Preço: {item.price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</strong>

                    <div className="flex items-center justify-center gap-4">
                        <button onClick={() => removeItemCart(item)} className="bg-slate-600 rounded text-white flex items-center justify-center px-3">
                            -
                        </button>
                            {item.amount}
                        <button onClick={() => addItemCart(item)} className="bg-slate-600 rounded text-white flex items-center justify-center px-3">
                            +
                        </button>
                    </div>

                    <strong className="float-right">
                        SubTotal: {item.total.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })}
                    </strong>

                </section>

            ))}


            {cart.length !== 0 && (
                <p className="font-bold mt-4">Total: {total}</p>

            )}
        </div>
    )
}