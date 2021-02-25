import { apiAreAvailable } from 'expo';
import React, { useEffect, useCallback, useState } from 'react';
import { Text, View, ProgressBarAndroid } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'

import { useDispatch, useSelector } from 'react-redux'
import { addTask, removeTask } from '../redux/actions/tasks'

import { LISTDATA } from '../shared/list';
import { ScrollView } from 'react-native-gesture-handler';

import api from '../api/list'

const Details = ({ route, navigation }) => {
  
  console.log("--details");
  console.log(route.params);    

  const { id } = route.params;

  const [item, setItem ] = useState(null)
  //const item = LISTDATA.filter(item => item.id == id)[0];
  const dispatch = useDispatch();
  
  const tasks = useSelector(state => state.tasks);
  const isExistedTask = tasks.filter(item => item.id == id).length > 0 ? true : false;
  const getDetails = useCallback(async () => {
    const result = await api.get(id);
    setTimeout(()=> {
      setItem(result.data);
    }, 300)

  }, [])

  useEffect(() => {
    getDetails();
  }, [])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <ScrollView 
        contentContainerStyle={
          { flexGrow:1, alignItems:"center", justifyContent:"center"}}
          >
        <Card>
        <Card.Title>{item.title}</Card.Title>
        <Card.Divider/>
        <Card.Image source={{uri: item.image}} style={{height: 500}}>
        </Card.Image>
        <Card.Divider/>
        <Text style={{marginBottom: 10}}>
            {item.description}
          </Text>
            {
              isExistedTask 
                ?
                <Button
                  onPress={()=>{dispatch(removeTask(id))}}
                  icon={<Icon name='close' type='ionicon' color='#ffffff' />}
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"gray"}}
                  title='삭제' 
                /> 
                :
                <Button
                  onPress={()=>{dispatch(addTask(item))}}
                  icon={<Icon name='checkmark' type='ionicon' color='#ffffff' />}
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"tomato"}}
                  title='추가' 
                />
            }
            {/* <Button
                  onPress={()=>{dispatch(reserveAction(Reserve))}}
                  icon={<Icon name='checkmark' type='ionicon' color='#ffffff' />}
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"green"}}
                  title='예약' 
                /> */}
      </Card>
      
      </ScrollView>
    </View>
  )
}
export default Details;