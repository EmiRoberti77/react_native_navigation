import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  DetailsScreenRouteProp,
  MainStackParamList,
} from '../types/navigation';

interface DetailsProps {
  navigation: StackNavigationProp<MainStackParamList, 'Details'>;
}

const Details: FC<DetailsProps> = ({ navigation }) => {
  const route = useRoute<DetailsScreenRouteProp>();
  return (
    <View style={styles.container}>
      <Text>Details</Text>
      <Text>{route.params?.title}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
