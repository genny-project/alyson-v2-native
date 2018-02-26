import { StyleSheet } from 'react-native';
import * as common from '../../styles/common';

const { BORDER_RADIUS } = common;

const defaultBtn = {
  width: 200,
  height: 40,
  padding: 10,
  backgroundColor: '#3498db',
  borderRadius: BORDER_RADIUS,
};

const smallBtn = {
  width: 140,
  height: 35,
};

const dangerBtn = {
  backgroundColor: '#e74c3c',
};

const warningBtn = {
  backgroundColor: '#f1c40f',
};

const text = {
  color: '#fff',
  textAlign: 'center',
  fontWeight: '700',

};


const styles = StyleSheet.create({
  default: { ...defaultBtn },
  danger: { ...defaultBtn, ...dangerBtn },
  warning: { ...defaultBtn, ...warningBtn },
  small: { ...defaultBtn, ...smallBtn },
  text,
});

export default styles;
