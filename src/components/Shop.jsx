import React from 'react'

const Shop = () => {
  return (
    <div className='container mx-3'>
      <h2>Buy Adidas shoes 50 rs</h2>
      <div className='d-flex mx-3 my-3'>
      <button className='btn  btn-primary mx-3'>-</button>
      <p className='align-items-center'>Add to cart</p>
      <button  className='btn  btn-primary mx-3'>+</button>
      </div>
    </div>
  )
}

export default Shop
