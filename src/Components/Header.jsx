import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Header() {

    const carItems = useSelector(state => state.cart)
    const totalQuantity = carItems.reduce((total, cartitem) => {
        return total + cartitem.quantity;
    }, 0)
    const displayedQuantity = totalQuantity > 99 ? '99+' : totalQuantity;

    return (
        <>
            <nav className='bg-black py-5 mx-auto px-4 text-white'>
                <div className='flex justify-between'>
                    <div>
                        Brand
                    </div>
                    <div>
                        <ul >
                            <Link to='/' className='pe-2'>Home</Link>
                            <Link to='/cart'>cart <sup className='bg-red-500 px-2 py-1 rounded-2xl '>   {displayedQuantity}</sup></Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header