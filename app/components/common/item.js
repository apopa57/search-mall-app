import React, { PropTypes } from 'react'
import { numberWithCommas } from 'utils/common'

const Item = (props) => {
  const { item } = props



  return (
    <div className="item" >
      <div className="item__img-wrap">
        <img src={item.mediumImageUrls[0].imageUrl} />
      </div>
      <div className="item__name">
        <span>{item.itemName}</span>
      </div>
      <div className="item__price">
        <span>{`${numberWithCommas(item.itemPrice)} 円`}</span>
      </div>
    </div>
  )
}

Item.propTypes = {
  item: PropTypes.object
}

export default Item
