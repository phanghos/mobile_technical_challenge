import { SearchBarContainer } from '@/components/SearchBarContainer';
import { act } from '@testing-library/react';
import { fireEvent, render } from '@testing-library/react-native';

describe('SearchBarContainer', () => {
  it('renders with default placeholder', async () => {
    const { getByPlaceholderText } = render(
      <SearchBarContainer onSearch={jest.fn()} />,
    );

    await act(async () => {
      expect(getByPlaceholderText('Search...')).toBeVisible();
    });
  });

  it('renders with custom placeholder', async () => {
    const onSearchMock = jest.fn();

    const { getByPlaceholderText } = render(
      <SearchBarContainer placeholder="placeholder" onSearch={onSearchMock} />,
    );

    await act(async () => {
      expect(getByPlaceholderText('placeholder')).toBeVisible();
    });
  });

  it('calls onSearch with query', async () => {
    const query = 'barcelona';
    const onSearchMock = jest.fn();

    const { getByTestId } = render(
      <SearchBarContainer onSearch={onSearchMock} />,
    );

    await act(async () => {
      fireEvent.changeText(getByTestId('search-bar'), query);
    });

    expect(onSearchMock).toHaveBeenCalledWith(query);
  });
});
