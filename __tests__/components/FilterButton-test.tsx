import { FilterButton } from '@/components/filter/FilterButton';
import { CityFilters } from '@/domain/city/entities/CityFilters';
import { fireEvent, render } from '@testing-library/react-native';

describe('FilterButton', () => {
  it('renders with right filter count', () => {
    const { getByTestId, getByText } = render(
      <FilterButton filters={filters} onPress={jest.fn()} />,
    );

    expect(getByTestId('filter-button')).toBeVisible();
    expect(getByText('Filter (4)')).toBeVisible();
  });

  it('calls onPress callback', () => {
    const onPressMock = jest.fn();

    const { getByTestId } = render(
      <FilterButton filters={filters} onPress={onPressMock} />,
    );

    fireEvent.press(getByTestId('filter-button'));

    expect(onPressMock).toHaveBeenCalled();
  });
});

const filters: CityFilters = {
  language: ['es', 'en', 'de'],
  currency: ['eur'],
};
