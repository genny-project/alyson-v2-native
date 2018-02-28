import { StyleSheet } from 'react-native';


const container = {
  flex: 0,
  height: 310,
  backgroundColor: '#f8f8f8',
  padding: 10,
  justifyContent: 'flex-start',
  alignItems: 'center',
};

const name = {
  marginTop: 10,
  fontSize: 24,
  color: '#0084ff',
};

const position = {
  marginTop: 10,
  fontSize: 14,
  color: '#0084ff',

};
const company = {
  marginTop: 10,
  fontSize: 14,
  color: '#0084ff',

};

const website = {
  marginTop: 10,
  fontSize: 14,
};


const styles = StyleSheet.create({
  container: { ...container },
  name: { ...name },
  position: { ...position },
  company: { ...company },
  website: { ...website },
});

export default styles;
