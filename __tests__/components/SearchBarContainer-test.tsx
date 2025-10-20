import { SearchBarContainer } from '@/components/SearchBarContainer';
import { fireEvent, render } from '@testing-library/react-native';

describe('SearchBarContainer', () => {
  it('renders with default placeholder', () => {
    const { getByPlaceholderText } = render(
      <SearchBarContainer onSearch={jest.fn()} />,
    );

    expect(getByPlaceholderText('Search...')).toBeVisible();
  });

  it('renders with custom placeholder', () => {
    const onSearchMock = jest.fn();

    const { getByPlaceholderText } = render(
      <SearchBarContainer placeholder="placeholder" onSearch={onSearchMock} />,
    );

    expect(getByPlaceholderText('placeholder')).toBeVisible();
  });

  it('calls onSearch with query', () => {
    const query = 'barcelona';
    const onSearchMock = jest.fn();

    const { getByTestId } = render(
      <SearchBarContainer onSearch={onSearchMock} />,
    );

    fireEvent.changeText(getByTestId('search-bar'), query);

    expect(onSearchMock).toHaveBeenCalledWith(query);
  });
});
