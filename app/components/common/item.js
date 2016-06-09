import React, { PropTypes } from 'react'

const Item = (props) => {
  const { item } = props

  return (
    <div className="item" >
      <div className="item__img">
        <img src={item.mediumImageUrls[0].imageUrl} />
      </div>




    </div>
  )
}

export default Item
