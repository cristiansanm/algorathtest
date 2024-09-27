import { StyleSheet } from 'react-native';
import { SpacerProps } from './Spacer.types';

const UNIT = 10;
export const getDynamicStyles = (props: SpacerProps) =>
  StyleSheet.create({
    spacerStyle: {
      ...(props.horizontal
        ? { width: UNIT * (props.size || 1) }
        : { height: UNIT * (props.size || 1) }),
      ...(props.border
        ? {
            borderBottomColor: props.borderColor,
            borderBottomWidth: props.borderSize,
            width: '100%',
            height: UNIT * (props.size || 1),
          }
        : {}),
    },
  });
