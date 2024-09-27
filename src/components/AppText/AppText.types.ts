import { ReactNode } from 'react';
import { TextProps, TextStyle } from 'react-native';

export type TextSize =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'p'
  | 'small'
  | 'smaller'
  | 'smallest'
  | 'tiny';

export type TextWeight = 'thin' | 'regular' | 'medium' | 'bold';
export interface AppTextProps {
  size?: TextSize;
  fontWeight?: TextWeight;
  color?: string;
  center?: boolean;
  alignLeft?: boolean;
  alignRight?: boolean;
  justifyText?: boolean;
  underline?: boolean;
  children: ReactNode | ReactNode[];
  style?: TextStyle | TextStyle[];
  fontFamily?: TextStyle['fontFamily'];
  numberOfLines?: number;
  textProps?: TextProps;
}
