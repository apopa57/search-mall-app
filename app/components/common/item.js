import React from 'react'

export default (props) => {
  const { data } = props;

  return (
    <div>
      <img src={data.mediumImageUrls[0].imageUrl} />
      <h4>{data.itemName}</h4>
    </div>
  )
}
