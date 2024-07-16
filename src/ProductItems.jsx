import React from 'react'

export default function ProductItems({thumbnail, price, name}) {
  return (
    <div className='shadow-lg text-center pb-4 bg-slate-100 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105'>
                  <img  src={`${thumbnail}`}/>
                  <h4>{name}</h4>
                  <b>Rs {Math.floor(price * 80)}</b>
    </div>
  )
}
