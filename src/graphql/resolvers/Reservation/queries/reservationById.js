import { Reservation } from 'models'

export default async (root, { id }) => {
  try {
    return await Reservation.findById(id)
  } catch (error) {
    console.log(error)
    return []
  }
}
