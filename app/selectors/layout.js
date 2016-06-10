import { createSelector } from 'reselect'

const selectLayout = () => state => state.layout

const selectLayoutItemView = () => createSelector(
  selectLayout(),
  (layout) => layout.defaultItemView
)

export {
  selectLayout,
  selectLayoutItemView
}
