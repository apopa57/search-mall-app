import React from 'react'
import Item from 'components/common/item'

export default (props) => {
  const { data, hide } = props
  if (hide || data.length === 0) return null
  console.log(props);
  return (
    <section>
      <ul>
        {data.map(item => {
          return (
            <li key={item.itemCode} className="item">
              <Item data={item} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
