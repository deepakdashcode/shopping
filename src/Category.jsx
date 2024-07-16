import React from 'react'

export default function Category({finalCategories, setCategoryName}) {

  return (
    <div>
        <h3 className='text-[25px] font-[400] p-[5px] text-center'>Category</h3>
        <ul>
            {
                finalCategories.map((element, index)=>{
                    return(
                        <li onClick={()=>{
                                setCategoryName(element.url)
                            }} 
                            key={index} 
                            className='bg-[#ccc] p-[5px] cursor-pointer hover:bg-[#a0a0c7] hover:transition duration-700 ease-in-out ... text-[18px] font-serif font-[500] mb-1'>
                            {element.name}
                        </li>
                    )
                    
                })
            }
            


        </ul>
    </div>
  )
}
