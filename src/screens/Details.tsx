import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

//type DetailsProps

const Details = () => {
  const route = useRoute();
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
