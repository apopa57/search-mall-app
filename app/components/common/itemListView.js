import React, { PropTypes } from 'react'
import { numberWithCommas } from 'utils/common'

const ItemListView = (props) => {
  const { item } = props

  const imgUrl = () => {
    return ( item.imageFlag === 1) ? <img src={item.mediumImageUrls[0].imageUrl} /> : <span>No image</span>
  }


  return (
    <div className="item row" >
      <div className="three columns">
        <div className="item__img-wrap">
          {imgUrl()}
        </div>
      </div>

      <div className="nine columns">
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
    </div>
  )
}

ItemListView.propTypes = {
  item: PropTypes.object
}

export default ItemListView
