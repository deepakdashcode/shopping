import axios from 'axios';
import './App.css';
import Category from './Category';
import ProductItems from './ProductItems';
import { useEffect, useState } from 'react';

function App() {
  let [finalCategories, setFinalCategories] = useState([])
  let [homeProducts, setHomeProducts] = useState([])
  let [categoryName, setCategoryName] = useState('')

  let getCategories = ()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then((res)=>res.data)
    .then((finalResponse)=>{
      console.log(finalResponse);
      setFinalCategories(finalResponse)
    })
  }

  let getHomeProducts = (url)=>{
    axios.get(url)
    .then((res)=>res.data)
    .then((finalResponse) => {
      console.log(finalResponse.products);
      setHomeProducts(finalResponse.products);
    })
  }

  useEffect(()=>{
    getCategories();
    getHomeProducts('https://dummyjson.com/products');
  }, [])

  useEffect(()=>{
    if(categoryName)
    {
      console.log(categoryName);
      getHomeProducts(categoryName)
    }
    
  }, [categoryName])
  return (
    <div>
      <div className='py-[40px]'>
        <div className='max-w-[95%] mx-auto'> 
          <h1 className='text-center text-[30px] font-bold mb-[25px]'>Our Products</h1>
          <div className='grid grid-cols-[25%_auto] gap-[15px]'>
            

            <div className='bg-[#e8e6e6]' style={{borderRadius: '7px'}}>
              <Category finalCategories={finalCategories} setCategoryName={setCategoryName}/>
              
            </div>

            <div>
              <div className='grid grid-cols-3 gap-4'>
                {
                  homeProducts.length >= 1 ?
                  homeProducts.map((element, index)=>{
                    return(
                      <ProductItems key={index} thumbnail={element.thumbnail} name={element.title} price={element.price}/>
                    )

                  })
                  :
                  
                  <div className="flex justify-center items-center h-screen">
                  <h1 className='text-center font-extrabold text-[40px]'>WAIT BRO</h1>
                </div>
                  
                }
              </div>
            </div>


          </div>
        </div>
      
      </div>
      
    </div>
  );
}

export default App;
