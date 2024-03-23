import React, { useState } from 'react'

const Quantity = () => {
    const [quantity, setQuantity] = useState(1);

  const increase=()=>{
    setQuantity(prevqauan=>prevqauan+1);
  }
  const decrease=()=>{
    if(quantity>1){
    setQuantity(prevqauan=>prevqauan-1);
    }
  }
  return (
    <div>
         <p className='flex'>
         <button onClick={decrease}>-</button>
         <div className='w-7 h-7 mx-2 border border-slate-500 text-center rounded-sm'>{quantity}</div>
         <button onClick={increase}>+</button>
 </p>
    </div>
  )
}

export default Quantity