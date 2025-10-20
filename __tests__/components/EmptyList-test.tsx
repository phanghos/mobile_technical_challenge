import { EmptyList } from '@/components/EmptyList';
import { render } from '@testing-library/react-native';

describe('EmptyList', () => {
  it('renders title and description', () => {
    const { getByText } = render(
      <EmptyList title="title" description="description" />,
    );

    expect(getByText('title')).toBeVisible();
    expect(getByText('description')).toBeVisible();
  });
});
