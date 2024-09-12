import React from 'react'
import ItemList from './ItemList';

const RestaurentCategory = ({data}) => {
    console.log(data);
  return (
    <div>
        {/* {header of rescatogery accordian} */}
         <div className='titleheader'>
            <div className='childdataoftheader'>
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