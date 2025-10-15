import { CityRaw } from '@/data/dtos/CityRaw';
import { City } from '@/domain/city/entities/City';
import { setCities } from '@/domain/city/store/actions/setCities';
import { useCityStore } from '@/domain/city/store/useCityStore';
import { Builder } from 'builder-pattern';

describe('setCities', () => {
  const mockAdapter = jest.fn();

  beforeEach(() => {
    mockAdapter.mockReset();
    mockAdapter.mockReturnValue([city]);
  });

  it('initial state', () => {
    expect(useCityStore.getState().cities).toHaveLength(0);
  });

  it('calls adapter and sets cities on store', () => {
    // When
    setCities([cityRaw], mockAdapter);

    // Then
    expect(useCityStore.getState().cities).toHaveLength(1);
    expect(useCityStore.getState().cities).toStrictEqual([city]);
    expect(mockAdapter).toHaveBeenCalledWith([cityRaw]);
  });
});

const cityRaw = Builder<CityRaw>().build();
const city = Builder<City>().build();
