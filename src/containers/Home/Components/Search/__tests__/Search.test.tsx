import { fireEvent, render, screen } from '@config/tests/utils';

import SearchComponent from '../index';

const mockCallBack = jest.fn();
const defaultComponent = <SearchComponent onSearch={mockCallBack} placeholder={'test'} />;

describe('<SearchComponent />', () => {
  test('component is rendering', () => {
    render(defaultComponent);

    const searchInput = screen.getByPlaceholderText('test');
    expect(searchInput).toBeInTheDocument();
  });

  test('component onSearch is working', () => {
    render(defaultComponent);

    const searchInput = screen.getByPlaceholderText('test');
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });
});
