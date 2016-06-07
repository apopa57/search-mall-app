import { Schema } from 'normalizr'

export const ItemSchema = new Schema('items', {
  idAttribute: i => i.itemCode
})

export const GenreSchema = new Schema('genres', {
  idAttribute: g => g.genreId
})

export const RankingSchema = new Schema('ranking', {
  idAttribute: r => r.rank
})
