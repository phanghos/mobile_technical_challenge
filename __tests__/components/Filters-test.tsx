import { Filters } from '@/components/filter/Filters';
import { City } from '@/domain/city/entities/City';
import { CityFilters } from '@/domain/city/entities/CityFilters';
import { useNavigation } from '@react-navigation/native';
import { fireEvent, render } from '@testing-library/react-native';
import { Builder } from 'builder-pattern';

const mockedUseNavigation = jest.mocked(useNavigation);

describe('Filters', () => {
  it('renders filters and correct cta text', () => {
    const { getByTestId, getByText } = render(
      <Filters cities={cities} filters={filters} onSelectFilters={jest.fn()} />,
    );

    expect(
      getByTestId('filter-checkbox-language-Spanish-checked'),
    ).toBeVisible();
    expect(
      getByTestId('filter-checkbox-language-German-checked'),
    ).toBeVisible();
    expect(getByTestId('filter-checkbox-currency-Eur-checked')).toBeVisible();
    expect(getByTestId('filter-checkbox-currency-Yen-unchecked')).toBeVisible();
    expect(getByText('Show Results (2)')).toBeVisible();
  });

  it('removes filter', () => {
    const { getByTestId, getByText } = render(
      <Filters cities={cities} filters={filters} onSelectFilters={jest.fn()} />,
    );

    fireEvent.press(getByTestId('filter-checkbox-language-German-checked'));

    expect(
      getByTestId('filter-checkbox-language-German-unchecked'),
    ).toBeVisible();
  });

  it('navigates back after tapping on cta', () => {
    console.log(mockedUseNavigation);

    const navigateMock = jest.fn();
    mockedUseNavigation.mockReturnValue({
      setOptions: jest.fn(),
      goBack: navigateMock,
    });

    const { getByTestId } = render(
      <Filters cities={cities} filters={filters} onSelectFilters={jest.fn()} />,
    );

    fireEvent.press(getByTestId('filters-cta'));

    expect(navigateMock).toHaveBeenCalled();
  });
});

const filters: CityFilters = {
  language: ['Spanish', 'German'],
  currency: ['Eur'],
};

const city1 = Builder<City>().fullLanguage('Spanish').currency('Eur').build();
const city2 = Builder<City>().fullLanguage('German').currency('Eur').build();
const city3 = Builder<City>().fullLanguage('Japanese').currency('Yen').build();
const cities = [city1, city2, city3];
