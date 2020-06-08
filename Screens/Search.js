/* eslint-disable quotes */
/* eslint-disable keyword-spacing */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import { Appbar, Title,TextInput,Button,Card } from 'react-native-paper';
import {View, Text,FlatList} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Header from './Header';

export default Search = ({navigation})=> {

    const [city, setCity] = useState('');
    const [cities,setCities] = useState([]);

    //Getting suggestion of cities
    const fetchCity = (text)=>{
        setCity(text)
        fetch("https://autocomplete.wunderground.com/aq?query=" + text)
        .then(item=>item.json())
        .then(cityData=>{
            // console.log(cityData)
            setCities(cityData.RESULTS.slice(0,9))
        })
    }

    const btnClick = async ()=>{
        await AsyncStorage.setItem('newCity',city)
        navigation.navigate("home",{city:city})
    }

    const listClick = async (cityName) =>{
        await AsyncStorage.setItem('newCity',cityName)
        setCity(cityName)
        navigation.navigate("home",{city:cityName})
    }

  return (
     <View style={{flex:1}}>
         <Header name="Search City"/>
         <TextInput 
         label='City Name'
         theme={{
             colors:{primary:'#00aaff'}
         }}
         value={city}
         onChangeText={(text)=>fetchCity(text)}

         />

        <Button 
        style={{margin:5}}
        icon="content-save-outline" 
        mode="contained" 
        theme={{
            colors:{primary:'#00aaff'}
        }}
        onPress={() => btnClick()}>
            <Text style={{
                color:'white'
            }}>Save</Text>
        </Button>

        {/* Viewing suggestions as a list */}
        <FlatList 
        data={cities}
        renderItem={({item})=>{
            return(
                <Card
                style={{
                    margin:2,
                    padding:12
                }}
                onPress={()=>listClick(item.name)}
                >
                    <Text>
                        {item.name}
                    </Text>
                </Card>
            )
        }}

        keyExtractor={item=>item.name}
        />

     </View>
    );
}