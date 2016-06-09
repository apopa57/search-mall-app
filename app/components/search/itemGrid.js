import React from 'react'
import Item from 'components/common/item'

export default (props) => {
  const { data, hide } = props
  if (hide || data.length === 0) return false
  return (
    <section>
      <ul className="items-list">
        {data.map(item => {
          return (
            <li key={item.itemCode}>
              <Item item={item} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
