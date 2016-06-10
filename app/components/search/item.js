import React, { PropTypes } from 'react'
import { numberWithCommas } from 'utils/common'

const Item = (props) => {
  const { item } = props

  const imgUrl = () => {
    return ( item.imageFlag === 1) ? <img src={item.mediumImageUrls[0].imageUrl} /> : <span>No image</span>
  }


  return (
    <div className="item" >
      <div className="item__img-wrap">
        {imgUrl()}
      </div>
      <div className="item__name">
        <span>{item.itemName}</span>
      </div>
      <div className="item__price">
        <span>{`${numberWithCommas(item.itemPrice)} 円`}</span>
      </div>
      <div className="item__shopname">
        <span><i className="shop-icon" /> {item.shopName}</span>
      </div>
    </div>
  )
}

Item.propTypes = {
  item: PropTypes.object
}

export default Item
