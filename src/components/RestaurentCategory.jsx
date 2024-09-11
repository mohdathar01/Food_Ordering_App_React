import React from 'react'

const RestaurentCategory = ({data}) => {
    // console.log(data)
  return (
    <div>
        {/* {header of rescatogery} */}
         <div className='titleheader'>
            <span>{data.title}</span>
            <span>🔽</span>
         </div>
        
    </div>
  )
}

export default RestaurentCategory;