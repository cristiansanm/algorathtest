import { render } from '@testing-library/react-native';
import React from 'react';
import { Loader } from '../Loader';

describe('Loader Component', () => {
  it('renders correctly when isFullScreen is true', () => {
    const { getByTestId } = render(
      <Loader isFullScreen={true} size="large" color="blue" />,
    );
    const container = getByTestId('loader-container');
    const activityIndicator = getByTestId('activity-indicator-full-screen');

    expect(container).toBeTruthy();
    expect(activityIndicator).toBeTruthy();
    expect(activityIndicator.props.size).toBe('large');
    expect(activityIndicator.props.color).toBe('blue');
  });

  it('renders correctly when isFullScreen is false', () => {
    const { getByTestId } = render(
      <Loader isFullScreen={false} size="small" color="red" />,
    );
    const activityIndicator = getByTestId('activity-indicator');

    expect(activityIndicator).toBeTruthy();
    expect(activityIndicator.props.size).toBe('small');
    expect(activityIndicator.props.color).toBe('red');
  });
});
