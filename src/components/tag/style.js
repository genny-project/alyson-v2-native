import { StyleSheet } from 'react-native';
import * as commonStyles from '../../styles/common';

const { BORDER_RADIUS } = commonStyles;

const defaultTag = {
  width: 120,
  height: 40,
  backgroundColor: '#fff',
  borderRadius: BORDER_RADIUS,
  borderWidth: 2,
  borderColor: '#3498db',
  padding: 10,
};

const textDefault = {
  color: '#3498db',
  textAlign: 'center',
};


const style = StyleSheet.create({
  default: { ...defaultTag },
  textDefault: { ...textDefault },
});

export default style;
