import { FC } from 'react';
import { View } from 'react-native';
import { getDynamicStyles } from './Spacer.styles';
import { SpacerProps } from './Spacer.types';

export const Spacer: FC<SpacerProps> = props => {
  const styles = getDynamicStyles(props);
  return (
    <View testID="spacer-view" style={[styles.spacerStyle, props.style]} />
  );
};
