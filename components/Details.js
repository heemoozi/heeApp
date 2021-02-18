import React from 'react';
import { Text, View } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'

import { useDispatch, useSelector } from 'react-redux'
import { addAction } from '../redux/actions'
import { removeAction } from '../redux/actions'

import { LISTDATA } from '../shared/list';
import { ScrollView } from 'react-native-gesture-handler';

const Details = ({ route, navigation }) => {
  
  console.log("--details");
  console.log(route.params);    

  const { id } = route.params;

  const item = LISTDATA.filter(item => item.id == id)[0];
  const dispatch = useDispatch();
  
  const actions = useSelector(state => state.actions);
  const isExistedAction = actions.filter(item => item.id == id).length > 0 ? true : false;

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
              isExistedAction 
                ?
                <Button
                  onPress={()=>{dispatch(removeAction(id))}}
                  icon={<Icon name='close' type='ionicon' color='#ffffff' />}
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"gray"}}
                  title='삭제' 
                /> 
                :
                <Button
                  onPress={()=>{dispatch(addAction(item))}}
                  icon={<Icon name='checkmark' type='ionicon' color='#ffffff' />}
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"tomato"}}
                  title='추가' 
                />
            }
      </Card>
      </ScrollView>
    </View>
  )
}
export default Details;