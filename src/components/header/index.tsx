import {Link} from 'react-router-dom'
import {FiShoppingCart} from 'react-icons/fi'
import { useContext } from 'react'

import { CartContext } from '../../context/CartContext'

export function Header(){

    const {cartAmount} = useContext(CartContext);


    return(
        <header className='w-full px-1 bg-black'>
            <nav className='w-full max-w-7xl flex flex-row justify-between h-14 items-center px-5 mx-auto'>
                <Link className='font-bold text-2xl text-white' to="/">
                    CSSDev
                </Link>


                <Link className='relative' to="/cart">
                    <FiShoppingCart size={24} color='#fff'/>

                    {cartAmount > 0 &&(
                         <span className='absolute -top-4 -right-3 px-2.5 bg-sky-400 rounded-full w-6 h-6 flex justify-center items-center text-white text-xs'>{cartAmount}</span>
                    )}

                   
                </Link>
            </nav>
        </header>
    )
}