import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Auth } from './components/Auth.native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Supabase with React Native</Text>
      <Auth/>
      <StatusBar style="auto" />
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
