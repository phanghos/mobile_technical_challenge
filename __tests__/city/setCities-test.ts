import { City } from '@/domain/city/entities/City';
import { setCities } from '@/domain/city/stores/actions/setCities';
import { useCityStore } from '@/domain/city/stores/useCityStore';
import { Builder } from 'builder-pattern';

describe('setCities', () => {
  it('initial state', () => {
    expect(useCityStore.getState().cities).toHaveLength(0);
  });

  it('sets cities on store', () => {
    // When
    setCities([city, anotherCity]);

    // Then
    expect(useCityStore.getState().cities).toHaveLength(2);
    expect(useCityStore.getState().cities).toStrictEqual([city, anotherCity]);
  });
});

const city = Builder<City>().build();
const anotherCity = Builder<City>().build();
