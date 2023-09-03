  import React, { useEffect, useState } from 'react'
  import { useDispatch, useSelector } from 'react-redux'
  import { removeAllItems, removeItem, updateQuantity } from '../Redux/CartSlice';
  function Cart() {

    const dispatch = useDispatch()
    const cartItem = useSelector(state => state.cart)
    const totalPrice = cartItem.reduce((total, item) => total + item.market_data.current_price. usd * item.quantity , 0
    )
    
    const handleRemoveItem = (item) => {
      dispatch(removeItem(item));
    };

    const hanldeQuantity = (item, newQuantity) => {
      if (newQuantity > 999) {
        newQuantity = item.quantity;  
      }
      dispatch(updateQuantity({...item, quantity: newQuantity }));
    };

    return (
      <>
        <div className="w-full flex justify-center mt-20 ">
          <div className="w-2/4">
            <div className='text-center p-4 flex justify-between'>
              <h1> List </h1>
              <button className='text-black' onClick={() => dispatch(removeAllItems())}> Remove All Items </button>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-h-96">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                {
                  cartItem.map((item, index) => {
                    return (
                      <tbody key={index}>
                        <tr
                          className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            <img src={item.image.small} alt="" />
                          </th>
                          <td className="px-6 py-4">
                            <a href="">{item.name}</a>
                          </td>
                          <td className="px-6 py-4">
                            <input
                              type="number"
                              aria-label='Quantity'
                              name='quantityBox'
                              autoComplete='off'
                              value={item.quantity}
                              onChange={(e) => hanldeQuantity(item, parseInt(e.target.value))}
                              min="1"
                              max="999"
                              className="w-20 px-2 py-1 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                          </td>
                          <td className="px-6 py-4">${item.market_data.current_price.usd}</td>
                          <td className="px-6 py-4">
                            <a
                              href="#"
                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => handleRemoveItem(item)}
                            >
                              Remove
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    )
                  })
                }
              </table>
            </div>
            <div className='text-center p-4'>
              <h1>  Total Price : ${totalPrice}  </h1>
            </div>

          </div>
        </div>

      </>
    )
  }

  export default Cart