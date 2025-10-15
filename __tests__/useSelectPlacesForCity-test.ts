import { Place } from '@/domain/place/entities/Place';
import { useSelectPlacesForCity } from '@/domain/place/store/selectors/useSelectPlacesForCity';
import { usePlaceStore } from '@/domain/place/store/usePlaceStore';
import { PlacesUtils } from '@/shared/utils/places';
import { renderHook } from '@testing-library/react-native';
import { Builder } from 'builder-pattern';

jest.mock('@/shared/utils/places', () => ({
  PlacesUtils: {
    getPlacesForCityByType: jest.fn().mockReturnValue({}),
  },
}));

const mockedGetPlacesForCityByType = jest.mocked(
  PlacesUtils.getPlacesForCityByType,
);

describe('useSelectPlacesForCity', () => {
  beforeEach(() => {
    usePlaceStore.setState({
      places: [restaurant, monument],
    });
  });

  it('calls getPlacesForCityByType internally', () => {
    // When
    const { result } = renderHook(() => useSelectPlacesForCity(cityKey));

    // Then
    expect(result.current).toStrictEqual({});
    expect(mockedGetPlacesForCityByType).toHaveBeenCalledWith(cityKey, [
      restaurant,
      monument,
    ]);
  });
});

const cityKey = 'barcelona';
const restaurant = Builder<Place>().type('restaurant').build();
const monument = Builder<Place>().type('monument').build();
