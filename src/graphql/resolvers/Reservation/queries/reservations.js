import { Reservation } from 'models'

export default async (root, query) => {
  try {
    return await Reservation.find(query)
  } catch (error) {
    console.log(error)
    return []
  }
}
