import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

import { removeTask } from '../redux/actions/tasks'
import { reseveAction } from '../redux/actions'

const Tasks = ({ route, navigation}) => {

  const Tasks = useSelector(state => state.tasks);
  console.log(tasks);

  const dispatch = useDispatch();

  return(
    <View style={{flex:1}}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", justifyContent: 'center' }}>
      {
        tasks.map((item, i) => (
          <ListItem containerStyle={{width:"80%"}} key={i} onPress={()=>{navigation.navigate("Details", {id: item.id})}}>
            <Avatar source={{uri: item.image}} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <Icon name='close' type='ionicon' color='gray' onPress={()=>{dispatch(removeTask(item.id))}} />
          </ListItem>
        ))
      }
      </ScrollView>
    </View>
  )
}

export default Tasks;