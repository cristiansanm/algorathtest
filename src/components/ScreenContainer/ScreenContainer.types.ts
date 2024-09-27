import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export type ScreenContainerProps = {
  children?: ReactNode | ReactNode[];
  screenContainerStyles?: StyleProp<ViewStyle>;
  safeAreaContainerStyles?: StyleProp<ViewStyle>;
  isFullScreen?: boolean;
  hasTopMargin?: boolean;
  hasHorizontalPadding?: boolean;
};
