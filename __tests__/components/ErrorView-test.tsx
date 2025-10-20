import { ErrorView } from '@/components/ErrorView';
import { fireEvent, render } from '@testing-library/react-native';

describe('ErrorView', () => {
  it('renders without cta', () => {
    const { getByText, queryByTestId } = render(
      <ErrorView title="title" description="description" />,
    );

    expect(getByText('title')).toBeVisible();
    expect(getByText('description')).toBeVisible();
    expect(queryByTestId('error-cta')).not.toBeVisible();
  });

  it('renders without cta when onPress is not passed', () => {
    const { getByText, queryByTestId } = render(
      <ErrorView title="title" description="description" ctaText="cta" />,
    );

    expect(getByText('title')).toBeVisible();
    expect(getByText('description')).toBeVisible();
    expect(queryByTestId('error-cta')).not.toBeVisible();
  });

  it('renders with cta and calls onPress callback when cta is tapped', () => {
    const onPressMock = jest.fn();

    const { getByTestId, getByText } = render(
      <ErrorView
        title="title"
        description="description"
        ctaText="cta"
        onPress={onPressMock}
      />,
    );

    fireEvent.press(getByTestId('error-cta'));

    expect(onPressMock).toHaveBeenCalled();
    expect(getByText('cta')).toBeVisible();
  });
});
