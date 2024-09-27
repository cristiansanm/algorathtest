import { StyleSheet, TextStyle } from 'react-native';

interface TextSize {
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  h5: TextStyle;
  p: TextStyle;
  small: TextStyle;
  smaller: TextStyle;
  smallest: TextStyle;
  tiny: TextStyle;
}
interface TextWeightByFontFamily {
  thin: TextStyle;
  regular: TextStyle;
  medium: TextStyle;
  bold: TextStyle;
}

interface TextStyles {
  center: TextStyle;
  alignLeft: TextStyle;
  alignRight: TextStyle;
  justifyText: TextStyle;
  underline: TextStyle;
}

export const sizeStyles = StyleSheet.create<TextSize>({
  h1: {
    fontSize: 36,
  },
  h2: { fontSize: 32 },
  h3: { fontSize: 28 },
  h4: { fontSize: 24 },
  h5: { fontSize: 20 },
  p: { fontSize: 16 },
  small: { fontSize: 12 },
  smaller: { fontSize: 8 },
  smallest: {
    fontSize: 4,
  },
  tiny: { fontSize: 3 },
});

export const weightStyles = StyleSheet.create<TextWeightByFontFamily>({
  thin: { fontWeight: '200' },
  regular: { fontWeight: '400' },
  medium: { fontWeight: '600' },
  bold: { fontWeight: 'bold' },
});

export const styles = StyleSheet.create<TextStyles>({
  center: { textAlign: 'center' },
  alignLeft: { textAlign: 'left' },
  alignRight: { textAlign: 'right' },
  justifyText: { textAlign: 'justify' },
  underline: { textDecorationLine: 'underline' },
});
