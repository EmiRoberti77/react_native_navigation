import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, View } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  return (
    <>
      <RootNavigator />
    </>
  );
}
