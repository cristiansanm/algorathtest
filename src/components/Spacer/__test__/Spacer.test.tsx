import { render } from '@testing-library/react-native';
import React from 'react';
import { Spacer } from '../Spacer';
import { getDynamicStyles } from '../Spacer.styles';
jest.mock('../Spacer.styles', () => ({
  getDynamicStyles: jest.fn(),
}));

describe('Spacer Component', () => {
  it('renders correctly with default styles', () => {
    const mockStyles = { spacerStyle: { margin: 10 } };
    (getDynamicStyles as jest.Mock).mockReturnValue(mockStyles);

    const { getByTestId } = render(<Spacer />);
    const spacerView = getByTestId('spacer-view');

    expect(spacerView).toBeTruthy();
    expect(spacerView.props.style).toContainEqual(mockStyles.spacerStyle);
  });

  it('applies additional styles passed via props', () => {
    const mockStyles = { spacerStyle: { margin: 10 } };
    const additionalStyles = { backgroundColor: 'red' };
    (getDynamicStyles as jest.Mock).mockReturnValue(mockStyles);

    const { getByTestId } = render(<Spacer style={additionalStyles} />);
    const spacerView = getByTestId('spacer-view');

    expect(spacerView).toBeTruthy();
    expect(spacerView.props.style).toContainEqual(mockStyles.spacerStyle);
    expect(spacerView.props.style).toContainEqual(additionalStyles);
  });
});
