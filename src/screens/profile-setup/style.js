import { StyleSheet } from 'react-native';


const container = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

const input = {
  height: 50,
  borderColor: '#e3e3e3',
  backgroundColor: '#fff',
  padding: 10,
  marginTop: 5,
  marginHorizontal: 10,
};

const textarea = {
  height: 190,
  borderColor: '#e3e3e3',
  backgroundColor: '#fff',
  marginTop: 10,
  padding: 10,
  marginHorizontal: 10,
};

const contactMethod = {
  marginTop: 20,
  height: 30,
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
};

const bio = {
  marginTop: 20,
  height: 30,
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
};

const button = {
  marginTop: 10,
  width: '96%',
  marginHorizontal: 6,
};

const styles = StyleSheet.create({
  input: { ...input },
  textarea: { ...textarea },
  contactMethod: { ...contactMethod },
  container: { ...container },
  bio: { ...bio },
  button: { ...button },
});


export default styles;
