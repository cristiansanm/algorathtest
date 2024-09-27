import { render } from '@testing-library/react-native';
import React from 'react';
import { AppText } from '../AppText';
import { sizeStyles, styles, weightStyles } from '../AppText.style';

describe('AppText Component', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<AppText>Default Text</AppText>);
    const textElement = getByText('Default Text');
    expect(textElement).toBeTruthy();
    expect(textElement.props.style).toContainEqual({ color: 'black' });
  });

  it('applies size and weight styles correctly', () => {
    const { getByText } = render(
      <AppText size="h1" fontWeight="bold">
        Styled Text
      </AppText>,
    );
    const textElement = getByText('Styled Text');
    expect(textElement.props.style).toContainEqual(sizeStyles.h1);
    expect(textElement.props.style).toContainEqual(weightStyles.bold);
  });

  it('applies alignment styles correctly', () => {
    const { getByText } = render(<AppText center>Centered Text</AppText>);
    const textElement = getByText('Centered Text');
    expect(textElement.props.style).toContainEqual(styles.center);
  });

  it('applies custom color and fontFamily', () => {
    const { getByText } = render(
      <AppText color="red" fontFamily="Arial">
        Custom Text
      </AppText>,
    );
    const textElement = getByText('Custom Text');
    expect(textElement.props.style).toContainEqual({
      color: 'red',
      fontFamily: 'Arial',
    });
  });

  it('applies underline style', () => {
    const { getByText } = render(<AppText underline>Underlined Text</AppText>);
    const textElement = getByText('Underlined Text');
    expect(textElement.props.style).toContainEqual(styles.underline);
  });

  it('applies additional styles', () => {
    const customStyle = { margin: 10 };
    const { getByText } = render(
      <AppText style={customStyle}>Styled Text</AppText>,
    );
    const textElement = getByText('Styled Text');
    expect(textElement.props.style).toContainEqual(customStyle);
  });
});
