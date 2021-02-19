import React, { useState, useCallback } from 'react';
import { Text, View, Button, ImageBackground, StyleSheet } from 'react-native';


import { SearchBar } from 'react-native-elements';
import SearchList from './SearchList'

const Images= { uri:"https://lh3.googleusercontent.com/proxy/VKMRq9oFE6PCsc1gY3_FTKxNWRuFYV9C2WLqDp3ZV7uwA4luC5Z78Fue_T2vFQjvrnnrKD-pLZvbubwNbZloGdOCy4ekn6pIbaWS-57YOduDgWt1fSbDKnmNFRYUAbcTSZDQifPuqnrj3Fl22zIgwXQECKcx9O7w7MfMTLy60g"};

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
