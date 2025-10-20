import { PlacesList } from '@/components/place/PlacesList';
import { Place } from '@/domain/place/entities/Place';
import { fireEvent, render } from '@testing-library/react-native';
import { Builder } from 'builder-pattern';

describe('PlacesList', () => {
  it('does not render anything when there are no places', () => {
    const { queryByTestId } = render(
      <PlacesList
        places={{
          restaurant: [],
          monument: [],
        }}
      />,
    );

    expect(queryByTestId('places-list')).not.toBeVisible();
  });

  it('renders segmented buttons and places list', () => {
    const { getByTestId, getByText } = render(
      <PlacesList
        places={{
          restaurant: [restaurant],
          monument: [monument],
        }}
      />,
    );

    expect(getByTestId('segmented-button-restaurant')).toBeVisible();
    expect(getByTestId('segmented-button-monument')).toBeVisible();
    expect(getByTestId('places-list')).toBeVisible();
    expect(getByText('restaurant')).toBeVisible();
  });

  it('updates places list when segmented button is tapped', () => {
    const { getByTestId, getByText } = render(
      <PlacesList
        places={{
          restaurant: [restaurant],
          monument: [monument],
        }}
      />,
    );

    fireEvent.press(getByTestId('segmented-button-monument'));

    expect(getByText('monument')).toBeVisible();
  });
});

const restaurant = Builder<Place>().name('restaurant').build();
const monument = Builder<Place>().name('monument').build();
