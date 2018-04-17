import mongoose from 'mongoose'

export default mongoose.model('Reservation', new mongoose.Schema({
  name: String,
  hotelName: String,
  arrivalDate: Date,
  departureDate: Date
}))
