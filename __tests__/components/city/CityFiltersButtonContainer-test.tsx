import { CityFiltersButtonContainer } from '@/components/city/CityFiltersButtonContainer';
import { City } from '@/domain/city/entities/City';
import { useCityStore } from '@/domain/city/stores/useCityStore';
import { useNavigation } from '@react-navigation/native';
import { fireEvent, render } from '@testing-library/react-native';
import { Builder } from 'builder-pattern';

const mockedUseNavigation = jest.mocked(useNavigation);

describe('CityFiltersButtonContainer', () => {
  it('does not render when the list of cities is empty', () => {
    const { queryByTestId } = render(<CityFiltersButtonContainer />);

    expect(queryByTestId('filter-button')).not.toBeVisible();
  });

  it('renders', () => {
    useCityStore.setState({ cities: [city] });

    const { getByTestId } = render(<CityFiltersButtonContainer />);

    expect(getByTestId('filter-button')).toBeVisible();
  });

  it('navigates to cities filters onPress', () => {
    const navigateMock = jest.fn();
    mockedUseNavigation.mockReturnValue({
      navigate: navigateMock,
    });
    useCityStore.setState({ cities: [city] });

    const { getByTestId } = render(<CityFiltersButtonContainer />);

    fireEvent.press(getByTestId('filter-button'));

    expect(navigateMock).toHaveBeenCalledWith('cities-filters');
  });
});

const city = Builder<City>().build();
