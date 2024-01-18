import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { MainStackParamList } from '../types/navigation';

interface SettingsProps {
  navigation:StackNavigationProp<MainStackParamList, "Settings">
}

const Settings:FC<SettingsProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <Button 
        title='Home' 
        onPress={()=>navigation.navigate('Home')} />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
