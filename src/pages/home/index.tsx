import { BsCartPlus } from 'react-icons/bs'
import {useEffect, useState, useContext} from 'react'
import { api } from '../../servies/api'
import {motion} from 'framer-motion'
import { CartContext } from '../../context/CartContext'; 
import { Slider } from '../../components/slider';

export interface productsProps{
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;

}

export function Home() {

    const [products, setProducts] = useState<productsProps[]>([]);

    const {addItemCart} = useContext(CartContext)


    useEffect(() => {
        async function getProducts(){
            const res = await api.get("/products");
            setProducts(res.data);
        }

        getProducts();
    },[])

    function handleAddCartItem(productObject: productsProps){
      addItemCart(productObject);
    }


  return (
    <div>
      <h1 className='font-bold text-center text-4xl mt-10'>Brands we work with</h1>
      <Slider />
      <main className="w-full max-w-7xl px-4 mx-auto">
        <motion.h1 className="font-bold text-2xl mb-4 mt-10 text-center">
          Produtos em alta
        </motion.h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5 mb-12">
          {products.map((product) => (
            <section className="w-full" key={product.id}>
                <img
                className="w-full rounded-lg max-h-70 mb-2"
                src={product.cover}
                alt="Logo do produto"
                />
                <p className="font-medium mt-1 mb-2">{product.title}</p>
                <div className="flex gap-3 items-center">
                    <strong className="text-zinc-700/90">{product.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    })}</strong>
                    <button className="bg-zinc-900 p-1 rounded" onClick={ () => handleAddCartItem(product) }>
                        <BsCartPlus size={20} color="#FFF" />
                    </button>
                </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  )
}
