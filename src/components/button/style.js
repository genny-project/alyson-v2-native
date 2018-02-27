import { StyleSheet } from 'react-native';
import * as common from '../../styles/common';

const { BORDER_RADIUS } = common;

const defaultBtn = {
  width: 60,
  height: 40,
  padding: 10,
  backgroundColor: '#3498db',
  borderRadius: BORDER_RADIUS,
};

const outline = {
  borderWidth: 3,
  borderColor: '#3498db',
  backgroundColor: '#fff',
  padding: 8,

};


const dangerBtn = {
  backgroundColor: '#e74c3c',
};

const warningBtn = {
  backgroundColor: '#f1c40f',
};

const successBtn = {
  backgroundColor: 'green',
};

const smallBtn = {
  width: 140,
  height: 35,
};

const largeBtn = {
  width: 230,
  height: 45,
};

const mediumBtn = {
  width: 200,
  height: 40,
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
  success: { ...successBtn },
  small: { ...defaultBtn, ...smallBtn },
  medium: { ...mediumBtn },
  large: { ...largeBtn },
  outline: { ...outline },
  text,
});

export default styles;
