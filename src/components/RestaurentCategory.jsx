import React from 'react'
import ItemList from './ItemList';
import { useState } from 'react';

const RestaurentCategory = ({data}) => {
  const[showItem,setShowItems]=useState(false);


    const handleClick=()=>{
      setShowItems(!showItem);
      console.log("clicked");
    }
  return (
    <div>
        {/* {header of rescatogery accordian} */}
         <div className='titleheader'>
            <div className='childdataoftheader'  onClick={handleClick}>
            <span className='datatitletext'>{data.title}({data.itemCards.length})</span>
            <span>🔽</span>
            </div>
            <div>
          { showItem && <ItemList items={data.itemCards}/>}
            </div>
         </div>
         
        
    </div>
  )
}

export default RestaurentCategory;