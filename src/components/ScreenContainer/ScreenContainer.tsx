import React, { FC } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './ScreenContainer.styles';
import { ScreenContainerProps } from './ScreenContainer.types';

export const ScreenContainer: FC<ScreenContainerProps> = ({
  isFullScreen,
  hasTopMargin,
  hasHorizontalPadding,
  children,
  screenContainerStyles,
  safeAreaContainerStyles,
}) => {
  if (isFullScreen) {
    return (
      <SafeAreaView
        testID="safe-area-view"
        style={[styles.safeAreaContainerStyle, safeAreaContainerStyles]}
        edges={hasTopMargin ? ['top', 'bottom'] : ['bottom']}>
        <View
          testID="screen-container-view-full-screen"
          style={[
            hasHorizontalPadding && styles.horizontalPadding,
            styles.screenContainerStyle,
            screenContainerStyles,
          ]}>
          {children}
        </View>
      </SafeAreaView>
    );
  }
  return (
    <View
      testID="screen-container-view"
      style={[
        hasHorizontalPadding && styles.horizontalPadding,
        styles.screenContainerStyle,
        screenContainerStyles,
      ]}>
      {children}
    </View>
  );
};
