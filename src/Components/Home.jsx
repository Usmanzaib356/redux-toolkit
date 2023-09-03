import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../Redux/DataSlice'
import { addItems } from '../Redux/CartSlice'
function Home() {

  const dispatch = useDispatch()
  const data = useSelector(state => state.coin) 

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const addToCart = (item) => {
    dispatch(addItems(item))
  }

  return (
    <>
      <div className='flex justify-between flex-wrap px-10 mt-10 gap-5'>
        {
          data.map((item, index) => {
            return (
                <div key={index} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
                  <a href="#">
                    <img className="p-8 rounded-t-lg"  src={item.image.small} alt="product image" />
                  </a>
                  <div className="px-5 pb-5">
                    <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white" >{item.name}</h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                      <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">${item.market_data.current_price.aud}</span>
                      <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={e => addToCart(item)}>Add to cart</a>
                    </div>
                  </div>
                </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Home;