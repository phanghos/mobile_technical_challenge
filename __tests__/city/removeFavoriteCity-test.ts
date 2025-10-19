import { City } from '@/domain/city/entities/City';
import { removeFavouriteCity } from '@/domain/city/stores/actions/removeFavouriteCity';
import { useFavoriteCitiesStore } from '@/domain/city/stores/useFavoriteCitiesStore';
import { Builder } from 'builder-pattern';

describe('removeFavoriteCity', () => {
  it('removes a city from the favorites', () => {
    // Given
    useFavoriteCitiesStore.setState({
      cities: {
        1: city,
        2: anotherCity,
      },
    });

    // When
    removeFavouriteCity(city.id);

    // Then
    const { cities } = useFavoriteCitiesStore.getState();
    expect(cities).toStrictEqual({
      [anotherCity.id]: anotherCity,
    });
  });
});

const city = Builder<City>().id(1).build();
const anotherCity = Builder<City>().id(2).build();
