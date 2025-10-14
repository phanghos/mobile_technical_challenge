import { City } from '@/app/core/entities/City';
import { setCities } from '@/domain/city/actions/setCities';
import { useCityStore } from '@/stores/useCityStore';

describe('setCities', () => {
  it('initial state', () => {
    expect(useCityStore.getState().cities).toHaveLength(0);
  });

  it('sets cities', () => {
    // When
    setCities([city]);

    // Then
    expect(useCityStore.getState().cities).toHaveLength(1);
    expect(useCityStore.getState().cities).toStrictEqual([city]);
  });
});

const city: City = {
  id: 1,
  key: 'barcelona',
  name: 'Barcelona',
  nativeName: 'Barcelona',
  currency: 'Euro',
  language: 'es',
  fullLanguage: 'Spanish',
};
