import React from 'react'

const ItemList = ({items}) => {
    // console.log(items?.card?.info);
  return (
    <div> 
        {items.map((item)=>(
            <div key={item.card.info.id} className='itemsinsideone'> 
            <div className='divofnameprice'>
                <span className='itemcardname'>{item.card.info.name}</span> 
                <span className='itemcardprice'>{"-₹"}{item.card.info.price?item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
            </div>
            <p className='itemdescription'>
            {item.card.info.description}
            </p>
            
            </div>
        ))}
    </div>
  )
}

export default ItemList;