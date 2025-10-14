import { gql } from '@apollo/client';

export const GET_CITIES = gql`
  query GetCities {
    allCities {
      id
      name
      language
      currency
    }
  }
`;

export const GET_PLACES = gql`
  query GetPlaces {
    allPlaces {
      key
      place
    }
  }
`;
