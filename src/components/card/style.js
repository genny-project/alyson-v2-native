import { StyleSheet } from 'react-native';


const container = {
  height: 190,
  padding: 10,
  margin: 30,
  width: '100%',
  borderColor: '#e3e3e3',
  borderWidth: 1,
  borderRadius: 2,
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
};

const imageBox = {
  marginTop: 10,
  flex: 1,
};
const textBox = {
  marginTop: 10,
  flex: 2,
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
