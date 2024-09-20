import React from 'react'
import ItemList from './ItemList';

const RestaurentCategory = ({data}) => {
    console.log(data);


    const handleClick=()=>{
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
            <ItemList items={data.itemCards}/>
            </div>
         </div>
         
        
    </div>
  )
}

export default RestaurentCategory;