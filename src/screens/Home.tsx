import React, { FC } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../types/navigation';

type HomeProps = {
  navigation: StackNavigationProp<MainStackParamList, 'Home'>;
};
const Home: FC<HomeProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome Home</Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate('Details', { title: 'Emi code' })}
      />
            <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
