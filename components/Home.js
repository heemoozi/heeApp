import React, { useState, useCallback } from 'react';
import { Text, View, Button, ImageBackground, StyleSheet } from 'react-native';


import { SearchBar } from 'react-native-elements';
import SearchList from './SearchList'

const Images= { uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyLuyZwd1HrMI3oIe0kTsUhG6uz503aNvPEg&usqp=CAU"};

const Home = ({navigation}) => {

  const [keyword, setKeyword] = useState("");

  const handleSearch = useCallback((search)=>{
    console.log(search);
    setKeyword(search);
  }, []);
  
  const styles = StyleSheet.create({
    image: {
      height: '100%',
      width: '100%',
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
    SearchBar: {
      justifyContent: 'center',
      alignItems: 'center' ,
      width:'80%',
    }
  });

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source = {Images}  style = {styles.image} >
        <SearchBar platform={"android"} containerStyle={{width: '80%'}}
          placeholder="검색해보세요."
          onChangeText={handleSearch}
          value={keyword}
        />
        <SearchList navigation={navigation} keyword={keyword}></SearchList>
      </ImageBackground>
    </View>
  )
}

export default Home;
