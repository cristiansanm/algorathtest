import React, { FC } from 'react';
import { Text, TextProps } from 'react-native';
import { sizeStyles, styles, weightStyles } from './AppText.style';
import { AppTextProps } from './AppText.types';

const AppText: FC<AppTextProps & TextProps> = ({
  size = 'p',
  color = 'black',
  center,
  alignLeft,
  alignRight,
  justifyText,
  underline,
  children,
  fontWeight = 'regular',
  fontFamily,
  style = {},
  ...textProps
}) => {
  return (
    <Text
      style={[
        sizeStyles[size],
        weightStyles[fontWeight],
        center && styles.center,
        alignLeft && styles.alignLeft,
        alignRight && styles.alignRight,
        justifyText && styles.justifyText,
        underline && styles.underline,
        { color, ...(fontFamily && { fontFamily }) },
        style,
      ]}
      {...textProps}>
      {children}
    </Text>
  );
};

export { AppText };
