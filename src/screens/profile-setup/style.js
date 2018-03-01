import { StyleSheet } from 'react-native';


const container = {
  backgroundColor: '#f2f2f2',
  flex: 1,
};

const input = {
  height: 40,
  borderColor: '#e3e3e3',
  backgroundColor: '#fff',
  padding: 10,
  marginTop: 2,
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
  marginBottom: 20,
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
};

const bio = {
  marginTop: 20,
  height: 30,
  fontWeight: 'bold',
  justifyContent: 'space-between',
  alignItems: 'center',
};


const bioTextWrapper = {
  marginTop: 15,
  marginBottom: 15,
  marginHorizontal: 15,
  flexDirection: 'row',
  flex: 1,
};

const button = {
  marginVertical: 20,
  width: '90%',
  marginHorizontal: 16,

};

const styles = StyleSheet.create({
  input: { ...input },
  textarea: { ...textarea },
  contactMethod: { ...contactMethod },
  container: { ...container },
  bio: { ...bio },
  button: { ...button },
  bioTextWrapper: { ...bioTextWrapper },
});


export default styles;
