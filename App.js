/* eslint-disable jsx-quotes */
/* eslint-disable semi */
/* eslint-disable keyword-spacing */
/* eslint-disable space-infix-ops */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StatusBar} from 'react-native';

import {Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import Search from './Screens/Search';
import Home from './Screens/Home';


const App = () => {

const Tab = createBottomTabNavigator();

return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({route})=>({
          tabBarIcon:({color})=>{
            let iconName;
            if(route.name==="home"){
              iconName='city'
            }else if(route.name==="search"){
              iconName='search-location'
            }
            return <FontAwesome5 name={iconName} color={color} size={25} />
          }
        })}

          tabBarOptions={{
          activeTintColor:'#00aaff',
          inactiveTintColor:'gray'
        }}
        >

          <Tab.Screen name="home" component={Home} 
          initialParams={{city:'london'}}
          />
          <Tab.Screen name="search" component={Search} />
        </Tab.Navigator>
      </NavigationContainer>

      
    </>
  );
};



export default App;
