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
  fontSize: 32,
  color: '#fff',
  fontFamily: 'Lato',
  fontWeight: '700',
  marginBottom: 10,
};

const input = {
  borderRadius: 2,
  borderColor: '#f8f8f8',
  height: 40,
  width: '80%',
  backgroundColor: '#fff',
  marginTop: 20,
  padding: 10,
};

const loginLink = {
  color: '#fff',
  marginTop: 20,
};

const styles = StyleSheet.create({
  container,
  header,
  input,
  loginLink,

});


export default styles;
