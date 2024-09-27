import React, { FC } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { styles } from './Loader.styles';
import { LoaderProps } from './Loader.types';

const Loader: FC<LoaderProps> = ({ isFullScreen, size, color }) => {
  if (isFullScreen) {
    return (
      <View testID="loader-container" style={styles.container}>
        <ActivityIndicator
          testID="activity-indicator-full-screen"
          size={size}
          color={color}
        />
      </View>
    );
  }
  return (
    <ActivityIndicator testID="activity-indicator" size={size} color={color} />
  );
};

export { Loader };
