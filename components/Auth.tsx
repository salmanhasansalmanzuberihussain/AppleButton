import { StyleSheet, Text, View } from 'react-native';


export default function Auth() {
  return (
    <View style={styles.container}>
      <Text>Todo web auth!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
