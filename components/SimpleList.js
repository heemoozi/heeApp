import React, { useCallback, useState } from 'react';
import { View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import SelectedItem from './SelectedItem';

const simpleData = [
  {id:1, title:"미션파서블"},
  {id:2, title:"소울"},
  {id:3, title:"극장판 귀멸의 칼날: 무한열차편"},
  {id:4, title:"더블패티"},
  {id:5, title:"새해전야"},
  {id:6, title:"해리 포터와 불의 잔"},
  {id:7, title:"몬스터헌터"},
  {id:8, title:"마리오네트"},
  {id:9, title:"아이"},
  {id:10, title:"시간의 끝에서 널 기다려"},
  {id:11, title:"인투 더 미러"}

]

const SimpleList = () => {
  const [item, setItem] = useState({});

  const itemPressed = useCallback(()=>{
    console.log(data);
    setItem(data);
  }, [])

  return (
      <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
    {
      simpleData.map(data => {
        return (
          <TouchableOpacity key={data.id} onPress={()=>{ itemPressed(data) }}>
          <Text>{data.id} {data.title}</Text>
          </TouchableOpacity>
        )
      })
    }

    <Text style={{marginBottom: 10, marginTop: 30, fontWeight: "bold"}}>Selected</Text>
    
    <SelectedItem item={item}></SelectedItem>
    
    </View>
  )
}

export default SimpleList;