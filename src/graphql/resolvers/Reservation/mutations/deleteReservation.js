import { Reservation } from 'models'

export default async (root, { id }) => {
  try {
    const query = { _id: id }
    await Reservation.deleteOne(query)
    return query
  } catch (err) {
    console.log(err)
    return false
  }
}
