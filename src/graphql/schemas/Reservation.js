import { makeExecutableSchema } from 'graphql-tools'

export default makeExecutableSchema({
  typeDefs: `
    type Reservation {
      _id: ID
      name: String
      hotelName: String
      arrivalDate: String
      departureDate: String
    }

    type Query {
      reservations(
        name: String
        hotelName: String
        arrivalDate: String
        departureDate: String
      ): [Reservation]

      reservationById(
        id: ID!
      ): Reservation
    }

    type Mutation {
      createReservation(
        name: String!
        hotelName: String!
        arrivalDate: String!
        departureDate: String!
      ): Reservation

      deleteReservation(
        id: ID!
      ): Reservation

      updateReservation(
        id: ID!
        name: String
        hotelName: String
        arrivalDate: String
        departureDate: String
      ): Reservation
    }
  `
})
