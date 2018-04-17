import Reservation from './Reservation'

export default {
  Query: {
    ...Reservation.queries
  },
  Mutation: {
    ...Reservation.mutations
  }
}
