import { StyleSheet } from 'react-native';


const container = {
  height: 120,
  flex: 0,
  flexDirection: 'row',
  margin: 10,
  padding: 10,
  paddingVertical: 10,
  borderWidth: 1,
  borderRadius: 5,
  borderColor: '#e8e8e8',

};

const imageBox = {
  marginTop: 10,
  flex: 1,
};

const textBox = {
  marginTop: 10,
  flex: 4,
};

const title = {
  fontSize: 20,
  fontWeight: '700',
};

const description = {
  color: '#444',
  marginTop: 10,
};

const subDescription = {
  color: '#c8c8c8',
  marginTop: 10,
};

const button = {
  flex: 1,
  marginTop: 20,
};


const style = StyleSheet.create({
  container: { ...container },
  title: { ...title },
  imageBox: { ...imageBox },
  textBox: { ...textBox },
  description: { ...description },
  subDescription: { ...subDescription },
  button: { ...button },
});


export default style;
