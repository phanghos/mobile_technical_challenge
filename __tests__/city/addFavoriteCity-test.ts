import { City } from '@/domain/city/entities/City';
import { addFavoriteCity } from '@/domain/city/stores/actions/addFavoriteCity';
import { useFavoriteCitiesStore } from '@/domain/city/stores/useFavoriteCitiesStore';
import { Builder } from 'builder-pattern';

describe('addFavoriteCity', () => {
  it('adds a city as favorite', () => {
    // Given
    useFavoriteCitiesStore.setState({
      cities: {
        1: city,
      },
    });

    // When
    addFavoriteCity(anotherCity);

    // Then
    const { cities } = useFavoriteCitiesStore.getState();
    expect(cities).toStrictEqual({
      [city.id]: city,
      [anotherCity.id]: anotherCity,
    });
  });
});

const city = Builder<City>().id(1).build();
const anotherCity = Builder<City>().id(2).build();
