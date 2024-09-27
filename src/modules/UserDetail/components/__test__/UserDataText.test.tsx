import { render } from '@testing-library/react-native';
import React from 'react';
import { UserDataText } from '../UserDataText'; // Adjust the import according to your file structure

describe('UserDataText Component', () => {
  it('renders correctly with given title and value', () => {
    const { getByText } = render(
      <UserDataText title="Name" value="John Doe" />,
    );

    const titleElement = getByText('Name: ');
    const valueElement = getByText('John Doe');

    expect(titleElement).toBeTruthy();
    expect(valueElement).toBeTruthy();
  });

  it('applies correct styles to title and value', () => {
    const { getByText } = render(<UserDataText title="Age" value="30" />);

    const titleElement = getByText('Age: ');
    const valueElement = getByText('30');

    expect(titleElement.props.style[0].fontSize).toBe(20);
    expect(Number(titleElement.props.style[1].fontWeight)).toBe(200);
    expect(valueElement.props.style[0].fontSize).toBe(20);
  });
});
