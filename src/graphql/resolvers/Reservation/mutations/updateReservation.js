import { Reservation } from 'models'

export default async (root, payload) => {
  try {
    return await Reservation.updateOne(payload)
  } catch (err) {
    console.log(err)
    return false
  }
}
