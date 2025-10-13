import { gql } from '@apollo/client';

export const GET_CITIES = gql`
  query TestQuery {
    allCities {
      id
      name
      language
      currency
    }
  }
`;
