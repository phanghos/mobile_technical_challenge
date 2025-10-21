import { FavoriteCitiesFiltersButtonContainer } from '@/components/city/FavoriteCitiesFiltersButtonContainer';
import { City } from '@/domain/city/entities/City';
import { useFavoriteCitiesStore } from '@/domain/city/stores/useFavoriteCitiesStore';
import { useNavigation } from '@react-navigation/native';
import { fireEvent, render } from '@testing-library/react-native';
import { Builder } from 'builder-pattern';

const mockedUseNavigation = jest.mocked(useNavigation);

describe('FavoriteCitiesFiltersButtonContainer', () => {
  it('does not render when the list of cities is empty', () => {
    const { queryByTestId } = render(<FavoriteCitiesFiltersButtonContainer />);

    expect(queryByTestId('filter-button')).not.toBeVisible();
  });

  it('renders', () => {
    useFavoriteCitiesStore.setState({
      cities: {
        1: city,
      },
    });

    const { getByTestId } = render(<FavoriteCitiesFiltersButtonContainer />);

    expect(getByTestId('filter-button')).toBeVisible();
  });

  it('navigates to cities filters onPress', () => {
    const navigateMock = jest.fn();
    mockedUseNavigation.mockReturnValue({
      navigate: navigateMock,
    });
    useFavoriteCitiesStore.setState({
      cities: {
        1: city,
      },
    });

    const { getByTestId } = render(<FavoriteCitiesFiltersButtonContainer />);

    fireEvent.press(getByTestId('filter-button'));

    expect(navigateMock).toHaveBeenCalledWith('favorite-cities-filters');
  });
});

const city = Builder<City>().id(1).build();
