import React from 'react';
import BaseComponent from 'utils/baseComponent';

export default class ItemGrid extends BaseComponent {
  render() {
    // const { items } = this.props;
    const items = [];

    return (
      <div className="row item-grid">
        {items.map(item => {
          return (
            <Item data={item} />
          )
        })}
      </div>
    );
  }
}
