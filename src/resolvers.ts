import { Resolvers } from './generated/graphql';

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const resolvers: Resolvers = {
  Query: {
    root: () => ({
      films: [],
      people: [],
      planets: [],
      species: [],
      startships: [],
      vehicles: []
    }),
  },
  Mutation: {
    test: () => 'this is a test'
    // addNewAttributeOn: () => ({})
  }
};