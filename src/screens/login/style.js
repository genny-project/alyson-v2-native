import { StyleSheet } from 'react-native';


const container = {
  fontFamily: 'Lato',
  backgroundColor: '#2980b9',
  flex: 1,
  padding: 10,
  alignItems: 'center',
  justifyContent: 'center',
};


const header = {
  fontSize: 24,
  color: '#fff',
  fontFamily: 'Lato',
  fontWeight: '700',
};

const input = {
  borderRadius: 2,
  borderColor: '#f8f8f8',
  height: 40,
  width: '80%',
  backgroundColor: '#fff',
  marginTop: 20,
  padding: 5,
};

const signupLink = {
  color: '#fff',
  marginTop: 10,
};
const styles = StyleSheet.create({
  container,
  header,
  input,
  signupLink,
});


export default styles;
