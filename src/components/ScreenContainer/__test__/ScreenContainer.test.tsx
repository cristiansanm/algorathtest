import { render } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';
import { ScreenContainer } from '../ScreenContainer';
import { styles } from '../ScreenContainer.styles';
describe('ScreenContainer Component', () => {
  it('renders correctly when isFullScreen is true', () => {
    const { getByTestId } = render(
      <ScreenContainer
        isFullScreen={true}
        hasTopMargin={true}
        hasHorizontalPadding={true}
        screenContainerStyles={{ backgroundColor: 'red' }}
        safeAreaContainerStyles={{ padding: 10 }}>
        <View testID="child-view" />
      </ScreenContainer>,
    );

    const safeAreaView = getByTestId('safe-area-view');
    const childView = getByTestId('child-view');

    expect(safeAreaView).toBeTruthy();
    expect(safeAreaView.props.style).toContainEqual(
      styles.safeAreaContainerStyle,
    );
    expect(safeAreaView.props.style).toContainEqual({ padding: 10 });

    const screenContainerView = getByTestId(
      'screen-container-view-full-screen',
    );
    expect(screenContainerView).toBeTruthy();
    expect(screenContainerView.props.style).toContainEqual(
      styles.horizontalPadding,
    );
    expect(screenContainerView.props.style).toContainEqual(
      styles.screenContainerStyle,
    );
    expect(screenContainerView.props.style).toContainEqual({
      backgroundColor: 'red',
    });

    expect(childView).toBeTruthy();
  });

  it('renders correctly when isFullScreen is false', () => {
    const { getByTestId } = render(
      <ScreenContainer
        isFullScreen={false}
        hasTopMargin={false}
        hasHorizontalPadding={false}
        screenContainerStyles={{ backgroundColor: 'blue' }}>
        <View testID="child-view" />
      </ScreenContainer>,
    );

    const screenContainerView = getByTestId('screen-container-view');
    const childView = getByTestId('child-view');

    expect(screenContainerView).toBeTruthy();
    expect(screenContainerView.props.style).toContainEqual(
      styles.screenContainerStyle,
    );
    expect(screenContainerView.props.style).toContainEqual({
      backgroundColor: 'blue',
    });

    expect(childView).toBeTruthy();
  });
});
