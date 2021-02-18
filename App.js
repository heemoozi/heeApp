import 'react-native-gesture-handler';
import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './components/Home'
import List from './components/List'
import Actions from './components/Actions'
import Details from './components/Details'

// https://ionicons.com/
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './redux/reducers'

const store = createStore(rootReducer);

const Tab = createBottomTabNavigator();
const ListStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ActionStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{title:"박스오피스", headerTitleAlign:"center"}} />
      <HomeStack.Screen name="Details" component={Details} options={{title:"자세히보기", headerTitleAlign:"center"}}  />
    </HomeStack.Navigator>
  )
}

const ListStackScreen = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="List" component={List} options={{title:"순위", headerTitleAlign:"center"}} />
      <ListStack.Screen name="Details" component={Details} options={{title:"자세히보기", headerTitleAlign:"center"}}  />
    </ListStack.Navigator>
  )
}

const ActionStackScreen = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="Actions" component={Actions} options={{title:"보관함", headerTitleAlign:"center"}} />
      <ListStack.Screen name="Details" component={Details} options={{title:"자세히보기", headerTitleAlign:"center"}}  />
    </ListStack.Navigator>
  )
}

const screeOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch(route.name){
      case 'Home':
        iconName = focused
          ? 'home'
          : 'home-outline';
        break;
      case 'List':
        iconName = focused
          ? 'list'
          : 'list-outline'; 
        break;
      case 'Actions':
        iconName = focused
          ? 'checkmark'
          : 'checkmark-outline'; 
        break;
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
})

const tabBarOptions= {
  activeTintColor: 'gray',
  inactiveTintColor: 'black',
}

export default function App() {
  return (
    <Provider store={store}>
     <SafeAreaProvider>
       <NavigationContainer>
         <Tab.Navigator tabBarOptions={tabBarOptions} screenOptions={screeOptions}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="List" component={ListStackScreen} />
            <Tab.Screen name="Like" component={ActionStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
     </SafeAreaProvider>
    </Provider>
  
  );
}