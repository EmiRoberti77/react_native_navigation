import React, { FC } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../types/navigation';
import { useQuery } from '@tanstack/react-query';
import { ScrollView } from 'react-native-gesture-handler';
import { Todo } from '../models/models';
const endpoint = 'https://jsonplaceholder.typicode.com/todos';

type HomeProps = {
  navigation: StackNavigationProp<MainStackParamList, 'Home'>;
};
const Home: FC<HomeProps> = ({ navigation }) => {
  const {data:todos, isSuccess, isError, isPending} = useQuery({
    queryKey:['todos'],
    queryFn:()=> fetch(endpoint).then((res)=> res.json())
  })

  const interateToDos = () => {
    return todos.map((t:Todo)=>(
          <TouchableOpacity onPress={()=>navigation.navigate('Details', {todo:t})}>
            <View style={styles.item}>
              <Text style={styles.todoFont}>{t.title}</Text>
            </View>
        </TouchableOpacity>)
      )
  }

  return (
    <View style={styles.container}>
      <Text>Welcome Home</Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate('Details', { todo: {
          userId:1,
          id:2,
          title:'RN Development',
          completed:true
          }}
        )}
      />
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      {isSuccess ? <ScrollView 
        style={styles.scrollableArea}>
          {interateToDos()}
        </ScrollView> : null}
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
  item:{
    borderBottomWidth:1,
    borderColor:'gray',
    marginTop:8,
    marginBottom:8,
    backgroundColor:'white',
  },
  scrollableArea:{
    flex:1,
    marginTop:16,
    marginBottom:16
  },
  todoFont:{
    fontSize:18,
  }
});
