import { City } from '@/domain/city/entities/City';
import { isFavoriteCity } from '@/domain/city/stores/actions/isFavoriteCity';
import { useFavoriteCitiesStore } from '@/domain/city/stores/useFavoriteCitiesStore';
import { Builder } from 'builder-pattern';

describe('isFavoriteCity', () => {
  beforeEach(() => {
    useFavoriteCitiesStore.setState({
      cities: {
        1: city,
        2: anotherCity,
      },
    });
  });

  it('returns true when the city is in the favorites', () => {
    // When
    const result = isFavoriteCity(1);

    // Then
    expect(result).toBe(true);
  });

  it('returns false when the city is not in the favorites', () => {
    // When
    const result = isFavoriteCity(3);

    // Then
    expect(result).toBe(false);
  });
});

const city = Builder<City>().id(1).build();
const anotherCity = Builder<City>().id(2).build();
