import React from 'react'
import ItemList from 'components/common/itemListView'
import ItemBox from 'components/common/itemBoxView'

export default (props) => {
  const { data, hide, displayType } = props
  if (hide || data.length === 0) return false

  const renderView = (item) => {
    const Item = displayType === 'box' ? ItemBox : ItemList

    return <li key={item.itemCode}><Item item={item} /></li>
  }

  return (
    <section>
      <ul className="items-list">
        {data.map(renderView)}
      </ul>
    </section>
  )
}
